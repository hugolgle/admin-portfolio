import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import store, { persistor } from "./redux/store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { getAllProjects } from "./redux/actions/projects.action";
import { getCareers } from "./redux/actions/careers.action.js";
import { getAbout } from "./redux/actions/about.action.js";
import { getXpPro } from "./redux/actions/xpPro.action.js";
store.dispatch(getAllProjects());
store.dispatch(getCareers());
store.dispatch(getAbout());
store.dispatch(getXpPro());

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
