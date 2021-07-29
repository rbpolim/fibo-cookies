import { AuthContextProvider } from "../contexts/AuthContext";
import { Provider } from "react-redux";

import { store } from "../app/store";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <Component {...pageProps} />
      </AuthContextProvider>
    </Provider>
  );
}

export default MyApp;
