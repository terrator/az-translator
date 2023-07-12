# Translator Demo

This a demo to that uses [Azure](https://learn.microsoft.com/en-us/azure/) Cognitive Services Translator. It uses Angular's HttpClient to access Azure's Translation Service.

It also uses the [Ionic](https://ionicframework.com) toolkit for the UI.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.4.

# Before running the demo
1. Clone this repo.
2. Obtain your Azure credentials.
3. Create an environment.ts file in the environments folder (create onthis folder if it doesn't exist). The file should looks like this:

```js
export const environment = {
    azureTranslatorKey:         <Your Azure key>,
    azureTranslatorEndpoint:    <Your endpoint>,
    location:                   <Your region>
};

```


## Run the application

Run ```npm run ionic:serve``` for a dev server. Navigate to `http://localhost:8100/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
