export interface ApiError {
  message: string;
  status?: number;
  code?: string;
}

export type AsyncState<T> = {
  data: T | null;
  isLoading: boolean;
  isRefreshing: boolean;
  error: ApiError | null;
};
