# Setup

1. Get an API Key from https://www.omdbapi.com/apikey.aspx
2. Update the `APIKey` in omdbApiKey.ts
3. run `npm i` to install nuget packages
4. run `npm start` to launch
5. Get [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) Chrome extension

# My Approach

1. Create project using the Vite template from the guide https://react-redux.js.org/introduction/getting-started
2. Install npm packages for axios, react-query, react-redux, react-router-dom
3. Create project folders: common, components (and actual components) and features
4. Create index.tsx for each of the components
5. Setup the Routes in App.tsx
6. Complete the header component and verify routes working as expected
7. Setup axios in common/omdbApi.ts
8. Create the features/moviesSlice.ts
9. Configure reducers in app/store.ts
10. Verify reducers working as expected
11. Add app/localStorage.ts and configure saving/loading from localStorage in app/store.ts
12. Create functioning, unstyled components
13. Style components
14. Look at RTK Query / react-query for realtime search  
    (got search-on-change working, but using redux, not react-query)
15. Add randomSearch to Home/index.ts so that Home screen populates with default listings

---

# vite-template-redux

Uses [Vite](https://vitejs.dev/), [Vitest](https://vitest.dev/), and [React Testing Library](https://github.com/testing-library/react-testing-library) to create a modern [React](https://react.dev/) app compatible with [Create React App](https://create-react-app.dev/)

```sh
npx degit reduxjs/redux-templates/packages/vite-template-redux my-app
```

## Goals

- Easy migration from Create React App or Vite
- As beginner friendly as Create React App
- Optimized performance compared to Create React App
- Customizable without ejecting

## Scripts

- `dev`/`start` - start dev server and open browser
- `build` - build for production
- `preview` - locally preview production build
- `test` - launch test runner

## Inspiration

- [Create React App](https://github.com/facebook/create-react-app/tree/main/packages/cra-template)
- [Vite](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react)
- [Vitest](https://github.com/vitest-dev/vitest/tree/main/examples/react-testing-lib)
