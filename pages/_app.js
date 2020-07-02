import Router from "next/router";
import withGA from "next-ga";
import '../style/flexboxgrid.css'
import '../style/style.css'
import 'react-image-lightbox/style.css';



// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default withGA("UA-XXXXXXXXX-1", Router)(MyApp);