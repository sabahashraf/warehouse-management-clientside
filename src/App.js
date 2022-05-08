import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./pages/shared pages/Header/Header";
import Footer from "./pages/shared pages/Footer/Footer";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import ManageItem from "./pages/ManageItem/ManageItem";
import AddItem from "./pages/AddItem/AddItem";
import { ToastContainer } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import MyItems from "./pages/MyItems/MyItems";

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
        <Route path="/manage" element={<ManageItem></ManageItem>}></Route>
        <Route path="/addItem" element={<AddItem></AddItem>}></Route>
        <Route path="/myItems" element={<MyItems></MyItems>}></Route>
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
