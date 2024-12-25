import { FC } from "react";
import "./App.css";
import Main from "./layouts/Main";
import { Provider } from "react-redux";
import store from "./store";
import Modal from "./component/modal/Modal";

const App: FC = () => (
  <Provider store={store}>
    <Main />
    <Modal />
  </Provider>
);

export default App;
