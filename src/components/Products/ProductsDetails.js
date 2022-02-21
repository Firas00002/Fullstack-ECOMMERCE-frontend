import React, { useEffect } from 'react'
import Carousel from 'react-material-ui-carousel'
import { useDispatch,useSelector } from 'react-redux'
import { getProductsDetails } from '../../redux/actions/productsActions'

const ProductsDetails = ({match}) => {
      
    const dispatch=useDispatch();
    const {loading,allproducts} =useSelector(state=>state.productsDetailsReducer)

    useEffect(() => {
      dispatch(getProductsDetails(match.params.id))
    }, [dispatch,match.params.id])
    

  return (
      <>
    <div className='ProductsDetails'>
        <div>
            <Carousel>
                {
                    allproducts.images && allproducts.name.map(
                        // (item,i)=>(<img className='CarouselImage'
                        // key={item.url}
                        // src={item.url}
                        // alt={`${i} Slide`}
                        
                        
                        // />)
                    )
                }
            </Carousel>
        </div>
    </div>
  </>)
}

export default ProductsDetails