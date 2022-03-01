import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/productsActions";
import ProductCard from "../layout/Home/ProductCard";
import Loading from "../layout/Loading/Loading";
import "./Products.css";
import Pagination from "react-js-pagination";
import { useState } from "react";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";



const categories = [
    "Laptop",
    "Footwear",
    "Bottom",
    "Tops",
    "Attire",
    "Camera",
    "SmartPhones",
  ];
const Products = ({ match }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 25000]);
  const [category, setCategory] = useState("");
  const [ratings, setRatings] = useState(0);

  const dispatch = useDispatch();
  const {
    loading,
    allproducts,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.productsReducer);
  const keyword = match.params.keyword;
  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };
  let count = filteredProductsCount;

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };

  useEffect(() => {
    dispatch(getProducts(keyword, currentPage,price,category,ratings));
  }, [dispatch, keyword, currentPage,price,category,ratings]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <h2 className="productsHeading">Products</h2>

          <div className="products">
            {allproducts &&
              allproducts.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
          <div className="filterBox">
            <Typography>Price</Typography>
            <Slider
              value={price}
              onChange={priceHandler}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              min={0}
              max={25000}
            />
            <Typography>Categories</Typography>
            <ul className="categoryBox">
              {categories.map((category) => (
                <li
                  className="category-link"
                  key={category}
                  onClick={() => setCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
            <fieldset>
              <Typography component="legend">Ratings Above</Typography>
              <Slider
                value={ratings}
                onChange={(e, newRating) => {
                  setRatings(newRating);
                }}
                aria-labelledby="continuous-slider"
                valueLabelDisplay="auto"
                min={0}
                max={5}
              />
            </fieldset>
          </div>
          {resultPerPage < count && (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Products;
