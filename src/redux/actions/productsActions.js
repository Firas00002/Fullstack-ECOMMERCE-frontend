import axios from 'axios'
import { ADMIN_PRODUCT_FAIL, ADMIN_PRODUCT_REQUEST, ADMIN_PRODUCT_SUCCESS, CLEAR_ERRORS, DELETE_PRODUCT_FAIL, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, GET_ALLPRODUCTS, GET_ALLPRODUCTSDETAILS, GET_ALLPRODUCTSDETAILS_FAIL, GET_ALLPRODUCTSDETAILS_SUCCESS, GET_ALLPRODUCTS_FAIL, GET_ALLPRODUCTS_SUCCESS, NEW_PRODUCT_FAIL, NEW_PRODUCT_REQUEST, NEW_PRODUCT_SUCCESS, NEW_REVIEW_FAIL, NEW_REVIEW_REQUEST, NEW_REVIEW_SUCCESS, UPDATE_PRODUCT_FAIL, UPDATE_PRODUCT_REQUEST, UPDATE_PRODUCT_SUCCESS,  } from '../actionsTypes/productsActionsTypes'






export const getProducts =(keyword='',currentPage=1,price=[0,25000],category,ratings=0) => async(dispatch)=>{

dispatch({
   type:GET_ALLPRODUCTS
})

let link =`/allproducts/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}`
if(category){
    link=`/allproducts/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&ratings[gte]=${ratings}`
}
try {

    const {data} = await axios.get(link)
    dispatch({
        type:GET_ALLPRODUCTS_SUCCESS,
        payload:data
    })


    
} catch (error) {
    dispatch({
        type:GET_ALLPRODUCTS_FAIL,
        payload:error.response.data
    })
}

}



export const getProductsDetails =(id) => async(dispatch)=>{

    dispatch({
       type:GET_ALLPRODUCTSDETAILS
    })
    
    try {
    
        const {data} = await axios.get(`/allproducts/products/${id}`)
        dispatch({
            type:GET_ALLPRODUCTSDETAILS_SUCCESS,
            payload:data
        })
    
    
        
    } catch (error) {
        dispatch({
            type:GET_ALLPRODUCTSDETAILS_FAIL,
            payload:error.response.data
        })
    }
    
    }

    // Get All Products For Admin
export const getAdminProduct = () => async (dispatch) => {

    let token=localStorage.getItem('token')
    const config ={
        headers:{
            Authorization:token
        }
      }
      dispatch({ type: ADMIN_PRODUCT_REQUEST });
    try {
      
  
      const { data } = await axios.get("/allproducts/admin/products",config);
  
      dispatch({
        type: ADMIN_PRODUCT_SUCCESS,
        payload: data.product,
      });
    } catch (error) {
      dispatch({
        type: ADMIN_PRODUCT_FAIL,
        payload: error.response.data,
      });
    }
  };


    // NEW REVIEW
export const newReview = (reviewData) => async (dispatch) => {
    let token=localStorage.getItem('token')
    const config ={
        headers:{
            Authorization:token
        }
      }
      dispatch({ type: NEW_REVIEW_REQUEST });
    try {
      
  
      
  
      const { data } = await axios.put(`/allproducts/review`, reviewData, config);
  
      dispatch({
        type: NEW_REVIEW_SUCCESS,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: NEW_REVIEW_FAIL,
        payload: error.response.data,
      });
    }
  };
  

  // Create Product
export const createProduct = (productData) => async (dispatch) => {
    let token=localStorage.getItem('token')
    const config ={
        headers:{
            Authorization:token
        }
      }
      dispatch({ type: NEW_PRODUCT_REQUEST });
  
      
    try {
      
      const { data } = await axios.post(
        `/allproducts/admin/products/add`,
        productData,
        config
      );
  
      dispatch({
        type: NEW_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: NEW_PRODUCT_FAIL,
        payload: error.response.data
      });
    }
  };


  // Update Product
export const updateProduct = (id, productData) => async (dispatch) => {
  let token=localStorage.getItem('token')
    const config ={
        headers:{
            Authorization:token
        }
      }
      dispatch({ type: UPDATE_PRODUCT_REQUEST });
  try {
    

    

    const { data } = await axios.put(
      `/allproducts/admin/products/${id}`,
      productData,
      config
    );

    dispatch({
      type: UPDATE_PRODUCT_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PRODUCT_FAIL,
      payload: error.response.data
    });
  }
};


  // Delete Product
export const deleteProduct = (id) => async (dispatch) => {

  let token=localStorage.getItem('token')
    const config ={
        headers:{
            Authorization:token
        }
      }
      dispatch({ type: DELETE_PRODUCT_REQUEST });
  try {
    

    const { data } = await axios.delete(`/allproducts/admin/products/${id}`,config);

    dispatch({
      type: DELETE_PRODUCT_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_PRODUCT_FAIL,
      payload: error.response.data
    });
  }
};

    
    