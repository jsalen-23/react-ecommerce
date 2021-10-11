# Salen Store

This is a fake store made with ReactJS. [FakeStoreAPI](https://fakestoreapi.com/) was used to fetch store's items. In this ReactJS project you will find the use of React Context to handle global states (Add to Cart, Add to Favorites, handle user's information), I also implemented some React Hooks to facilitate the development of this project.

[React-Paypal-Button-v2](https://www.npmjs.com/package/react-paypal-button-v2) was used to handle payments with such platform. At the moment it uses only a SandBox to test payments. This payment process can be tested with the following Fake Credit Card:

Card Number: `4242424242424242`
CVC: Any 3 digits.
Date: Any future date.

Since my designer skills are still not developed, I took [Twitter](https://twitter.com/) as a little inspiration and some details from Chilean Retailer [Hites](https://hites.cl/). `Styled-components` was used to give styling to this project.

## Live Demo

Hosted by Vercel at: [Live Demo](https://salen-store.vercel.app/)

## Installation

After downloading/cloning just remember to run

```bash
npm install
```

### Dependecies:

#### Development Dependecies:

```json
"devDependencies": {
  "@babel/core": "7.15.5",
  "@babel/preset-react": "7.14.5",
  "babel-loader": "8.2.2",
  "file-loader": "6.2.0",
  "html-webpack-plugin": "5.3.2",
  "webpack": "5.53.0",
  "webpack-cli": "4.8.0",
  "webpack-dev-server": "4.2.1"
}
```

#### Production Dependecies:

```json
"dependencies": {
  "axios": "0.21.4",
  "dotenv": "10.0.0",
  "dotenv-webpack": "7.0.3",
  "intersection-observer": "0.12.0",
  "react": "17.0.2",
  "react-dom": "17.0.2",
  "react-helmet": "6.1.0",
  "react-icons": "4.2.0",
  "react-paypal-button-v2": "2.6.3",
  "react-router-dom": "5.3.0",
  "styled-components": "5.3.1"
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
