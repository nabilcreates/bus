# Bus

All development files are in `/src`
-   getBus.js
    -   the getBus function (basically a template file)

-   handlers.js
    -   all input handlers (input and buttons) for the input of the bus stop code

-   index.js
    -   main file to be bundled, includes all of the imports and the starting script after `//start` line in the file

-   styles.scss
    -   Main sass styles

# Build files with webpack
-   `npm run build` (Production)
    -   Build all the files in 'production' mode
-   `npm run start` (Development)
    -   Start webpack in watch mode