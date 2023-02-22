# Demo

[VERCEL PREVIEW LINK](https://star-wars-people.vercel.app)

### Installation

``` bash
$ npm install
```

### Basic usage

``` bash
# dev server with hot reload at http://localhost:3000
$ npm start 
```

1. Navigate to [http://localhost:3000](http://localhost:3000). The app will automatically reload if you change any of the source files.

2. Navigate to [People](http://localhost:3000/people) page from sidebar or header to see list of StarWars characters

3. Click on `View details` in table row to see more about your character
## What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
coreui-free-react-admin-template
├── public/          # static files
│   └── index.html   # html template
│
├── src/             # project root
│   ├── assets/      # images, icons, etc.
│   ├── components/  # common components - header, footer, sidebar, etc.
│   ├── layouts/     # layout containers
│   ├── scss/        # scss styles
│   ├── views/       # application views
│   ├── _nav.js      # sidebar navigation config
│   ├── App.js
│   ├── ...
│   ├── index.js
│   ├── routes.js    # routes config
│   └── api.js       # api layer for Starwars API 
│
└── package.json
```

## Definition of work
- UI was built by using `CoreUI` (based on Bootstrap). It contains two pages: `/people` and `/people/:id`
- UI for those pages was located in `/src/views/people`
- Each page has it's own component: `PeopleList`, `Person`. And also common component `Pagination`
- `react-query` + `axios` were used for fetching and storing server data. Getting `people` list and `person` detatils was incapsulated inside custom hooks: `usePeopleList` and `usePerson`


The documentation for the CoreUI Admin Template is hosted at our website [CoreUI for React](https://coreui.io/react/)
