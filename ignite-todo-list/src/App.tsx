

// React Redux
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";


import Home from "./routes/Home";
import About from "./routes/About";
import Navbar from './Navbar';
import { Routes, Route} from "react-router-dom";
// Styles
import "./styles/index.css";


const App = () => {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
    </PersistGate>
   </Provider>
  );
};

export default App;
