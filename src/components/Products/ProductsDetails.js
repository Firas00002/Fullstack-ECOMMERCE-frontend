import React, { useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import { useDispatch, useSelector } from "react-redux";
import { getProductsDetails } from "../../redux/actions/productsActions";
import "./ProductsDetails.css";

import { Rating } from "@mui/material";
import ReviewCard from "./ReviewCard";
import Loading from "../layout/Loading/Loading";

const ProductsDetails = ({ match }) => {
  const dispatch = useDispatch();
  const { loading, product } = useSelector(
    (state) => state.productsDetailsReducer
  );

  useEffect(() => {
    dispatch(getProductsDetails(match.params.id));
  }, [dispatch, match.params.id]);

  const options = {
    size: "meduim",
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="ProductDetails">
            <div>
              {product.images &&
                product.images.map((item, i) => (
                  <img
                    className="CarouselImage"
                    key={i}
                    src={item.url}
                    alt={`${i} Slide`}
                  />
                ))}
            </div>
            <div>
              <div className='"detailsBlock-1"'>
                <h2>{product.name}</h2>
                <p>Product # {product._id}</p>
              </div>

              <div className="detailsBlock-2">
                <Rating {...options} />
                <span className="detailsBlock-2-span">
                  {" "}
                  ({product.numOfReviews} Reviews)
                </span>
              </div>
              <div className="detailsBlock-3">
                <h1>{`${product.price}$`}</h1>
                <div className="detailsBlock-3-1">
                  <div className="detailsBlock-3-1-1">
                    <button>-</button>
                    <input readOnly type="number" value={0} />
                    <button>+</button>
                  </div>
                  <button disabled={product.stock < 1 ? true : false}>
                    Add to Cart
                  </button>
                </div>

                <p>
                  Status:
                  <b className={product.stock < 1 ? "redColor" : "greenColor"}>
                    {product.stock < 1 ? "OutOfStock" : "InStock"}
                  </b>
                </p>
              </div>
              <div className="detailsBlock-4">
                Description : <p>{product.description}</p>
              </div>

              <button className="submitReview">Submit Review</button>
            </div>
          </div>
          <h3 className="reviewsHeading">REVIEWS</h3>

          {product.reviews && product.reviews[0] ? (
            <div className="reviews">
              {product.reviews &&
                product.reviews.map((review) => (
                  <ReviewCard key={review._id} review={review} />
                ))}
            </div>
          ) : (
            <p className="noReviews">No Reviews Yet</p>
          )}
        </>
      )}
    </>
  );
};

export default ProductsDetails;
