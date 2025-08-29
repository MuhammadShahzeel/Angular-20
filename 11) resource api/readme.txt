🔎 What is resource() in Angular?
It’s a reactive wrapper around async data (like API calls).
Think of it like a signal but specifically for loading data (fetching from API, lazy-loaded values, etc).
It handles:
loading state
error state
value() → the actual resolved data
hasValue() → whether data is available
So instead of managing isLoading, data, and error manually, resource() does it in a reactive way.

resource() → uses fetch/Promise loader.
rxResource() → uses HttpClient/Observable loader.
Both expose the same reactive resource API (value(), hasValue(), error, loading).