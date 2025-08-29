🔹 Why Services?

Components should mainly handle UI logic (templates, interactions).

Services handle non-UI logic, like:

Fetching data from an API (HTTP calls).

Managing application state.

Shared logic (e.g., authentication, logging, math utilities).

Communication between unrelated components.

//create a service

ng generate service my-service
or
ng g s my-service

Key Points

A service is just a class with @Injectable().

It is usually provided in root (singleton available everywhere).

Used for API calls, shared data, and logic.

Accessed in components using Dependency Injection (constructor(private xyz: XyzService) {}).


Centralized state: A service can hold data that multiple components can use.

Shared logic: You don’t repeat logic inside components.

Dependency injection makes the service available wherever you need it 