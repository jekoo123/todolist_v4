import "./App.css";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import { Main } from "./pages/main/main";
import { Input } from "./pages/input/input";
import { Search } from "./pages/search/search";
import { Header } from "./components/header/header";
import { Provider } from "react-redux";
import store from "./storage/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" />

          <Route exact path="/main" element={<Main />} />
          <Route exact path="/input" element={<Input />} />
          <Route exact path="/search" element={<Search />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
