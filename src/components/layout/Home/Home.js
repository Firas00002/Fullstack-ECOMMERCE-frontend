import React from "react";
import { CgMouse } from "react-icons/cg";

import "./home.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {clearErrors, getProducts} from "../../../redux/actions/productsActions";
import ProductCard from "./ProductCard";
import Loading from "../Loading/Loading";
import { useAlert } from "react-alert";



// const products = {
//   name: "TShirt",
//   images: [
//     {
//       url: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F49%2F56%2F49560dfa45732ed844e8e4742afdca248ee60f9f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
//     },
//   ],
//   price: "3000$",
//   _id: "5",
// };

const Home = () => {
 

const dispatch =useDispatch();

const {loading,allproducts}=useSelector(state=>state.productsReducer)

useEffect(() => {
  
  dispatch(getProducts());
}, [dispatch]);

  return (
    <>
    {loading ?<Loading/> :<>
      <div className="banner">
        <p>Welcome to Ecommerce</p>
        <h1>FIND AMAZING PRODUCTS BELOW</h1>

        <a href="#container">
          <button>
            Scroll <CgMouse />
          </button>
        </a>
      </div>

      <h2 className="homeHeading">Featured Products</h2>

      <div className="container" id="container">
      {allproducts &&
              allproducts.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
      </div>
    </>}
    
    
    
    </>
  );
};

export default Home;
