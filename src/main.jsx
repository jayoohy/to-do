import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store/store.js";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <App />
        </Router>
      </PersistGate>
    </Provider>
  </StrictMode>
);
