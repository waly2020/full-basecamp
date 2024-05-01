import Routing from "./routes/Routes";
import { store } from "./setup/redux/store/stotre";
// import Routes from "./routes/Routes";
import {Provider} from "react-redux";

function App() {
  return (
    <Provider store={store}>
    <Routing/>
    </Provider>
  );
}

export default App;
