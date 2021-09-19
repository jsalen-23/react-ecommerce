# Webpack Boiler Plate for React

This is a boiler plate ready to serve the most basic React App. This webpack configuration file is set to work with `styled-components`.

If you need to use CSS, Sass, or any other styling method, please edit the webpack configuration file to add the required rule for CSS.

## Installation

After downloading/cloning just remember to run

```bash
npm install
```

### Dependecies:

#### Development Dependecies:

```json
"devDependencies": {
  "@babel/core": "^7.15.5",
  "@babel/preset-react": "^7.14.5",
  "babel-loader": "^8.2.2",
  "html-webpack-plugin": "^5.3.2",
  "webpack": "^5.53.0",
  "webpack-cli": "^4.8.0",
  "webpack-dev-server": "^4.2.1"
}
```

#### Production Dependecies:

```json
"dependencies": {
  "react": "17.0.2",
  "react-dom": "17.0.2",
  "styled-components": "^5.3.1"
}
```

## Usage

```bash
npm run build
# runs a build version of your app. Build folder: build/

npm run dev
# runs a development mode of your app.
# It will server your application on port 3000.
# Port can be changed in webpack configuration file.
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
