# hero-editor-client
Angular2 web client tutorial: the Hero Editor.

(You'll find the hero-editor-backend project, which is in fact my contribution to this project, [here](https://github.com/pgbonino/hero-editor-backend))

## Previous considerations

This repository contains a literal implementation of Angular2 web client tutorial, which you can find [here](https://angular.io/guide/quickstart).

Only one thing to say. This web client, that happens to be a Hero CRUD, being the Hero object just a store of an ID and Name, simulates HTTP communication with a local data storage system. This is what you find in the app.module.ts file:

```
(...)
@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
   ],
(...)
```

Particularly take a look to the following line. And remember it.

```
InMemoryWebApiModule.forRoot(InMemoryDataService)
```

That is the line where it is announced that the service will redirect any HTTP request to the local data storage of the browser.

## Instructions

1. Clone repo.
2. npm start

## My great contribution

What I contribute to this project is, in fact, another project that runs a REST API Java server that serves the methods that the Angular2 web client consumes, persisting the heroes to a Couchbase Database. You'll find that [here](https://github.com/pgbonino/hero-editor-backend).

This contribution gives the posibility of commenting that line in the web client, causing the Angular2 to redirect the HTTP Requests to the real Java Server (listening by default in the 8080 once started).
