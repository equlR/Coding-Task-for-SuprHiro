# Product Explorer — React Native Mobile Application

A production-grade React Native mobile application built with standard **React Navigation (`@react-navigation/native-stack`)**, **TypeScript**, and a clean architectural design. It features a responsive product feed fetching live items from a public REST API, debounced search, category filtering, a detailed product view with an interactive image carousel, verified reviews, technical specifications, pull-to-refresh, skeleton shimmer loading states, and robust error handling with retry mechanisms.

---

## 📱 Features

- **Product Feed (List Screen)**:
  - Fetches and displays products in real-time from the public [DummyJSON Products API](https://dummyjson.com/products).
  - High-performance list using `FlatList` with `expo-image` (memory-disk caching, fast decode, smooth crossfade).
  - Debounced search query bar (~400ms delay to prevent unnecessary network requests).
  - Dynamic horizontal category filter chips ("All", "Beauty", "Fragrances", "Furniture", etc.).
  - Badges for discounts, ratings, and stock availability.
- **Product Details Screen**:
  - Stack navigation with native push/pop transitions via `@react-navigation/native-stack`.
  - Interactive hero image gallery with image pagination dots and clickable thumbnail strip.
  - Product metadata, calculated discount savings, and price breakdown.
  - Technical specifications table (SKU, Weight, Dimensions, Warranty, Shipping, and Return Policy).
  - Verified customer reviews section with star ratings, reviewer avatars, and formatted dates.
  - Floating bottom action bar with total price and interactive "Add to Cart" feedback.
  - Favorite toggle button with animated visual response.
- **States & Performance**:
  - **Loading States**: Shimmer skeleton placeholder cards (`SkeletonCard` and `SkeletonDetail`) for smooth perceived performance.
  - **Pull-to-Refresh**: Native `RefreshControl` on both list and detail screens to reload data on demand without UI flashing.
  - **Error States**: Dedicated `ErrorView` with iconography, descriptive error messages, and an interactive "Try Again" / "Retry" action.
  - **Empty States**: Friendly `EmptyView` with "Clear Filters" when searches yield no matches.
  - **Light & Dark Theme**: Adaptive theme tokens with high-contrast color palettes and typography.

---

## 🏛️ Standard React Native CLI Architecture & Folder Structure

This project follows standard **React Native Bare / CLI Project Structure** with strict separation of concerns across three core pillars:
1. **Pure Presentation / UI (`*.tsx`)** — Components and screens only handle JSX layout, styling bindings, and user event delegation.
2. **Dedicated Styling (`*.styles.ts`)** — All style rules are separated into dedicated style files powered by React Native's `StyleSheet.create` and centralized design tokens.
3. **Business Logic & State (`hooks/` & `services/`)** — All network fetching, filtering, debouncing, error handling, and state manipulation live in custom hooks and typed API clients.

```text
Coding-Task-for-SuprHiro/
├── App.tsx                                 # Root component (NavigationContainer, ThemeProvider, SafeAreaProvider)
├── index.js                                # Standard RN CLI / bare entry point (registerRootComponent)
├── package.json                            # Standard "main": "index.js"
│
├── src/
│   ├── navigation/                         # Standard React Navigation layer
│   │   ├── RootNavigator.tsx               # Native Stack Navigator (ProductList -> ProductDetail)
│   │   └── types.ts                        # RootStackParamList, screen navigation prop types
│   │
│   ├── screens/                            # Screen Modules (Separated UI, Styles & Business Logic)
│   │   ├── ProductListScreen/
│   │   │   ├── ProductListScreen.tsx       # Pure UI Presentation Layout
│   │   │   ├── ProductListScreen.styles.ts # Dedicated StyleSheet & Tokens
│   │   │   ├── useProductListScreen.ts     # Business Logic Hook & Navigation Wiring
│   │   │   └── index.tsx                   # Screen Container connecting Logic to View
│   │   │
│   │   └── ProductDetailScreen/
│   │       ├── ProductDetailScreen.tsx     # Pure UI Presentation Layout
│   │       ├── ProductDetailScreen.styles.ts # Dedicated StyleSheet
│   │       ├── useProductDetailScreen.ts   # Business Logic Hook (Route params & callbacks)
│   │       └── index.tsx                   # Screen Container connecting Logic to View
│   │
│   ├── components/                         # Modular Component Library
│   │   ├── common/                         # Generic UI components (each with .tsx and .styles.ts)
│   │   │   ├── Badge/
│   │   │   │   ├── Badge.tsx
│   │   │   │   └── Badge.styles.ts
│   │   │   ├── RatingBadge/
│   │   │   │   ├── RatingBadge.tsx
│   │   │   │   └── RatingBadge.styles.ts
│   │   │   ├── SearchBar/
│   │   │   │   ├── SearchBar.tsx
│   │   │   │   └── SearchBar.styles.ts
│   │   │   ├── LoadingSkeleton/
│   │   │   │   ├── SkeletonCard.tsx
│   │   │   │   ├── SkeletonCard.styles.ts
│   │   │   ├── ErrorView/
│   │   │   │   ├── ErrorView.tsx
│   │   │   │   └── ErrorView.styles.ts
│   │   │   └── EmptyState/
│   │   │       ├── EmptyView.tsx
│   │   │       └── EmptyView.styles.ts
│   │   │
│   │   └── products/                       # Feature-specific product components
│   │       ├── ProductCard/
│   │       │   ├── ProductCard.tsx
│   │       │   └── ProductCard.styles.ts
│   │       ├── CategoryFilterBar/
│   │       │   ├── CategoryFilterBar.tsx
│   │       │   └── CategoryFilterBar.styles.ts
│   │       ├── ProductImageCarousel/
│   │       │   ├── ProductImageCarousel.tsx
│   │       │   └── ProductImageCarousel.styles.ts
│   │       ├── ProductInfo/
│   │       │   ├── ProductInfo.tsx
│   │       │   └── ProductInfo.styles.ts
│   │       ├── ProductSpecs/
│   │       │   ├── ProductSpecs.tsx
│   │       │   └── ProductSpecs.styles.ts
│   │       └── ProductReviewsList/
│   │           ├── ProductReviewsList.tsx
│   │           └── ProductReviewsList.styles.ts
│   │
│   ├── hooks/                              # Business Logic Hooks
│   │   ├── useProducts.ts                  # List state, search debounce, category filtering, refresh/retry
│   │   ├── useProductDetail.ts             # Detail state, image selection, favorites, refresh/retry
│   │   └── useTheme.ts                     # Color scheme & theme hook
│   │
│   ├── services/                           # API & Networking Layer
│   │   ├── api/
│   │   │   └── apiClient.ts                # Generic fetch client with timeout & error normalization
│   │   └── productService.ts               # Domain endpoints for products & categories
│   │
│   ├── constants/                          # Design tokens & theme definitions
│   │   └── theme.ts                        # Palette, spacing, typography, shadows
│   │
│   ├── types/                              # TypeScript domain definitions
│   │   ├── product.ts                      # Product, Review, Dimensions, Category
│   │   └── api.ts                          # ApiError, AsyncState
│   │
│   └── utils/                              # Pure helper functions
│       └── formatters.ts                   # Currency, discount, date, stock status formatting
```

---

## 🚀 How to Run the App

### Prerequisites

Ensure you have **Node.js (v18+)** installed. You can use either **Bun** or **npm**.

### 1. Install Dependencies

Using **Bun** (recommended for this project):
```bash
bun install
```

Or using **npm**:
```bash
npm install
```

### 2. Start the Development Server

```bash
# Using bun
bun run start

# Or using npx
npx expo start
```

### 3. Open on Your Preferred Platform

Once the Metro bundler starts in your terminal:
- **iOS Simulator**: Press `i` (requires Xcode on macOS)
- **Android Emulator**: Press `a` (requires Android Studio)
- **Web Browser**: Press `w` (opens in your default browser)
- **Physical Device**: Scan the QR code using the **Expo Go** app on your phone.

---

## 🧪 Quality & Verification Commands

This project passes all TypeScript typechecks, lint rules, and Expo diagnostics with zero errors:

```bash
# Type check TypeScript codebase
bunx tsc --noEmit

# Run ESLint validation
bunx expo lint

# Diagnose Expo dependencies & configuration
bunx expo-doctor
```

---

## 🌐 Public API Reference

- **Base URL**: `https://dummyjson.com`
- **List & Pagination**: `GET /products?limit=30&skip=0`
- **Search**: `GET /products/search?q={query}`
- **Categories**: `GET /products/categories`
- **Category Filter**: `GET /products/category/{slug}`
- **Single Product**: `GET /products/{id}`
