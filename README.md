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