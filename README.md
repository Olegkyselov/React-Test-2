# What is it?
A react test task.

# What can I do?
* Run it and visit on http://localhost:8080
```
npm run start
```
* Run Storybook (basically it just renders an Application, not separate components)
```
npm run storybook
```
* Run unit-test
```
npm run test:unit
```
* Run e2e-test in the browser (you also may run it in CI headless mode)
```
npm run start
npm run test:e2e:browser
```

# CSP
Automatic upgrade from http to https made by meta-tag:
```
<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
```
> Notice that all fetch requests in "src/api/fetchData.ts" intentionally mentioned as http.

# Details
I'm not a big fan of create-react-app and usually configure my projects manually. The bare minimum is:
* React, TS, webpack
* Jest as a test runner and for unit-testing
* React Test Utils for React components testing (there is no such test)
* Cypress for e2e testing
* Storybook for components documenting (I didn't really document the components)

On the layout, I recognize the Bootstrap and added it with jQuery and popper.js according to documentation.
I've copypasted some examples into the project and completed the form layout.

To show the upper info block I used reactstrap (I think for the test task it's close enough to the example provided).

The next step was data fetching. I've googled the great tool "xml2js" to parse XML, joined Promises via Promise.all, and parse data. Not sure I was good at SELECTING the data from request result, but it works fine)
Also, I used moment.js for proper patient age calculation.

The next move was from management. In my experience, I worked primarily with self-written form engines and just tried Formik a few times. So I've decided to try some new/hyped and use react-hook-form. 
I haven't use Redux because it's a single form and Dan Abramov would not appreciate that Redux usage.
So I've set basic logic and display the validation results.

The last part of the work was to do the actual calculation and display results. I've set up a `CreatinineClearanceCalculationData` interface for passing parsed form data into calculation function and do the same thing with output via `CreatinineClearanceCalculationResult`. 

In the end, I've covered calculation function with unit tests and set up a really straightforward e2e test via Cypress. I could also test the App via React Testing Library, but seems it should be additionally configured to fetch data (especially over the HTTPS).


About the structure...

Personally, I prefer a feature-based project structure. Basically, I store closely all artifacts (inner components, Storybook stories, helpers, styles, tests) in components or feature folders (according to Uncle Bob 'Screaming Architecture' concept). Also, I widely use index.js, don't use relative imports between features and extract Data Layer (API) from any other helpers because of different levels of responsibility.