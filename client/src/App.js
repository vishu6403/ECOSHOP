import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Success from "./components/Success/Success";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

import AppContext from "./utils/context";

function App() {
  return (
    <BrowserRouter>
      <AppContext>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path="/category/:id"
            element={
              <>
                <Header />
                <Category />
                <Footer />
              </>
            }
          />
          <Route
            path="/product/:id"
            element={
              <>
                <Header />
                <SingleProduct />
                <Footer />
              </>
            }
          />
          <Route
            path="/success"
            element={
              <>
                <Success />
              </>
            }
          />
          <Route path="/login" element={
            <>
            <Login/>
            </>
          }
          />
           <Route path="/register" element={
            <>
            <Register/>
            </>
          }
          />
        </Routes>
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
