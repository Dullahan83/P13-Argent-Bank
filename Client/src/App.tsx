import Router from "./Components/Router/Router";

import { Provider } from "react-redux";
import { store } from "./Redux/Store";
import { persistStore } from "reduxjs-toolkit-persist";
import { PersistGate } from "reduxjs-toolkit-persist/integration/react";
function App() {
   let persistor = persistStore(store);
   return (
      <Provider store={store}>
         <PersistGate persistor={persistor}>
            <Router />
         </PersistGate>
      </Provider>
   );
}

export default App;
