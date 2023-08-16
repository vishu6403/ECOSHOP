import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { BiCart } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import "./Header.scss";
import Search from "./Search/Search";
import { Context } from "../../utils/context";
import Cart from "../Cart/Cart";


const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [searchModal, setSearchModal] = useState(false);
  const navigate = useNavigate();
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const { cartCount, showCart, setShowCart, isLoggedIn, setLoggedIn } =
    useContext(Context);

  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
          <ul className="left">
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/")}>About</li>
            <li>Categories</li>
          </ul>
          <div className="center" onClick={() => navigate("/")}>
            EcoShop
          </div>
          <div className="right">
            <TbSearch title="Search" onClick={() => setSearchModal(true)} />
            <AiOutlineHeart title="Favorites" />
            <span className="cart-icon" onClick={() => setShowCart(true)}>
              <BiCart title="Cart" />
              {!!cartCount && <span>{cartCount}</span>}
            </span>
            {isLoggedIn ? (
              <CgProfile onClick={() => setLoggedIn(false)} />
            ) : (
              <CgProfile title="Login/Register" onClick={() => navigate("/Login")} />
            )}
          </div>
        </div>
      </header>
      {searchModal && <Search setSearchModal={setSearchModal} />}
      {showCart && <Cart />}
    </>
  );
};

export default Header;
