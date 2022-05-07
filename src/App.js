import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./pages/shared pages/Header/Header";
import Footer from "./pages/shared pages/Footer/Footer";
import ProductDetail from "./pages/ProductDetail/ProductDetail";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/inventory/:inventoryId"
          element={<ProductDetail></ProductDetail>}
        ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
