import { FC } from "react";
import "./App.css";
import Main from "./layouts/Main";
import { Provider } from "react-redux";
import store from "./store";

const App: FC = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

export default App;
