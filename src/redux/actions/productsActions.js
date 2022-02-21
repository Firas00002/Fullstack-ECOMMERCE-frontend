import axios from 'axios'
import { GET_ALLPRODUCTS, GET_ALLPRODUCTSDETAILS, GET_ALLPRODUCTSDETAILS_FAIL, GET_ALLPRODUCTSDETAILS_SUCCESS, GET_ALLPRODUCTS_FAIL, GET_ALLPRODUCTS_SUCCESS,  } from '../actionsTypes/productsActionsTypes'






export const getProducts =() => async(dispatch)=>{

dispatch({
   type:GET_ALLPRODUCTS
})

try {

    const {data} = await axios.get('/allproducts/products')
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
            payload:data.product
        })
    
    
        
    } catch (error) {
        dispatch({
            type:GET_ALLPRODUCTSDETAILS_FAIL,
            payload:error.response.data
        })
    }
    
    }
    
    