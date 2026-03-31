# Visam Homework — Travel Destination Explorer

A React Native mobile app built with Expo that lets users browse, search, and filter travel destinations.

## Features

- Browse 12 curated travel destinations
- Search by destination name or country (debounced)
- Sort by rating (ascending / descending)
- Filter by price range, climate, season, and continent
- Optimized with `useCallback`, `useMemo`, and memoized components

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- [Expo Go](https://expo.dev/go) app on your phone (for physical device testing)
- iOS Simulator (macOS only) or Android Emulator (optional)

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm start
```

This opens the Expo Metro bundler in your terminal with a QR code.

## Running the App

| Platform | Command |
|---|---|
| Physical device (iOS/Android) | Scan the QR code in the terminal with the **Expo Go** app |
| iOS Simulator | Press `i` in the terminal (requires Xcode on macOS) |
| Android Emulator | Press `a` in the terminal (requires Android Studio) |
| Web browser | Press `w` in the terminal, or run `npm run web` |

## Code Quality

```bash
# Run linter
npm run lint

# Check formatting
npm run format:check

# Auto-format code
npm run format
```

## Project Structure

```
src/
  components/
    extendedFilters/   # Climate, season, continent filter UI
    priceFilter/       # Price range slider
    searchInput/       # Debounced search bar
    sortDropdown/      # Sort options
    travelCard/        # Destination card component
  data/
    filters.ts         # Filter option definitions
    items.ts           # Travel destination data
  hooks/
    useDebounce.ts     # Debounce hook for search input
  screens/
    home/              # Main screen
  types/
    item.ts            # TravelItem type definitions
```

## Tech Stack

- **React Native** 0.81.5
- **Expo** ~54.0.33
- **React** 19.1.0
- **TypeScript** ~5.9.2
- **ESLint** + **Prettier** for code quality
