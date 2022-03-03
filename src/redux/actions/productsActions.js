import axios from 'axios'
import { CLEAR_ERRORS, GET_ALLPRODUCTS, GET_ALLPRODUCTSDETAILS, GET_ALLPRODUCTSDETAILS_FAIL, GET_ALLPRODUCTSDETAILS_SUCCESS, GET_ALLPRODUCTS_FAIL, GET_ALLPRODUCTS_SUCCESS,  } from '../actionsTypes/productsActionsTypes'






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


    
    