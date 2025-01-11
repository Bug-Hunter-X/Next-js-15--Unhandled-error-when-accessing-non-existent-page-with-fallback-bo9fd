# Next.js 15 Unhandled Error with Fallback

This repository demonstrates a bug in Next.js 15 where an error occurs when accessing a non-existent page, even when a fallback mechanism is used.  The error isn't always gracefully handled, resulting in a poor user experience.

## Description

The issue arises when fetching data for a page that doesn't exist.  While a loading indicator is displayed, if the fetch request fails (due to the page not being found), the application throws an error that isn't caught.  The solution involves more robust error handling and a more sophisticated approach to fallback mechanisms.

## How to Reproduce

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Navigate to `/about`.  This should work correctly.
5. Navigate to a non-existent route, such as `/nonexistent`.  You should see an error in your console, and potentially a broken application state.

## Solution

The provided solution implements more robust error handling to catch and display user-friendly messages for non-existent routes and network errors.