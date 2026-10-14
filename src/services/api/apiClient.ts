import { ApiError } from '@/types/api';

const DEFAULT_TIMEOUT_MS = 12000;

export async function request<T>(
  url: string,
  options?: RequestInit & { timeoutMs?: number }
): Promise<T> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => {
    controller.abort();
  }, options?.timeoutMs ?? DEFAULT_TIMEOUT_MS);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...options?.headers,
      },
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      let errorMessage = `Request failed with status ${response.status}`;
      try {
        const errorData = await response.json();
        if (errorData?.message) {
          errorMessage = errorData.message;
        }
      } catch {
        // Fallback to default message
      }

      const error: ApiError = {
        message: errorMessage,
        status: response.status,
      };
      throw error;
    }

    const data: T = await response.json();
    return data;
  } catch (err: unknown) {
    clearTimeout(timeoutId);

    if ((err as Error)?.name === 'AbortError') {
      const timeoutError: ApiError = {
        message: 'Request timed out. Please check your connection and try again.',
        code: 'TIMEOUT',
      };
      throw timeoutError;
    }

    if ((err as ApiError)?.message) {
      throw err;
    }

    const networkError: ApiError = {
      message: 'Network connection error. Please check your internet connection.',
      code: 'NETWORK_ERROR',
    };
    throw networkError;
  }
}

export const apiClient = {
  get: <T>(url: string, options?: RequestInit & { timeoutMs?: number }) =>
    request<T>(url, { ...options, method: 'GET' }),
};
