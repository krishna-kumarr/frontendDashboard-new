import { Provider } from "react-redux";
import {Store} from "./Components/Redux/Store";
import { PageRedirector } from "./Components/Layout/Router";
import "./App.css"


function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <PageRedirector/>
      </Provider>
    </div>
  );
}

export default App;
