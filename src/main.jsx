import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import "./index.css";
import configureStore from "./redux/store/ConfigureStore";
import initialStore from "./redux/store/initialStore.js";
import { initializeGroupData } from "./redux/actions/GroupAction.js";

const store = configureStore(initialStore);

//Example of how to preload application data state for initial app load
//initiaizeGroupData() would be an Action that loads data from a database,
//or even a simple .json file with data that will never change.
//It could be a list of client names that is displayed in a list somewhere.
//store.dispatch(initializeGroupData());

/**
 * The Provider component is a part of the Context API, which is a mechanism for sharing data across multiple components
 * without having to pass props down manually at each level of the component tree.
 *
 */
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
