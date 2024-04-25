import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
/*--------------------Store--------------------*/
import { Provider } from "react-redux";
import { setupStore } from "./store/store";
const store = setupStore();
/*--------------------Store--------------------*/
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
