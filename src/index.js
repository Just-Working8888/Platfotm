import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { createRoot } from "react-dom/client"; // Update the import statement
import RoutesConfig from "./Routes";

const root = createRoot(document.getElementById("root")); // Update the method
root.render(
  <>
    <Provider store={store}>
      <RoutesConfig />
    </Provider>
  </>
);
