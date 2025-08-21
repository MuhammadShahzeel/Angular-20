- install nodejs
- npm install -g @angular/cli                 -> only one time
- ng v                                        -> to check angular correctly installed
- ng new proj_name                            -> to create a project
* it will ask you some questions
- share pseudonymous                          -> NO
- CSS
- SSR                                         -> NO
- Zonless                                     -> NO
* for now we not use Zonless its latest v20 feature we later use it
With Zone.js ("No") → Angular auto-detects async changes and updates the UI for you.
Zoneless ("Yes") → Faster, modern approach using signals, but you must explicitly tell Angular when to update the UI.
- AI                                          -> No for now

RUN YOUR PROJECT:
- cd proj_name
- ng serve
- open browser and go to http://localhost:4200
