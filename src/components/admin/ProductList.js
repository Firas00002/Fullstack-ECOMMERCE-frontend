import { Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import './ProductList.css'
import { deleteProduct, getAdminProduct } from '../../redux/actions/productsActions';
import { DELETE_PRODUCT_RESET } from '../../redux/actionsTypes/productsActionsTypes';
const ProductList = ({history}) => {
    const dispatch=useDispatch()
    const { allproducts ,isDeleted} = useSelector(
        (state) => state.productsReducer
      );
      const deleteProductHandler = (id) => {
        dispatch(deleteProduct(id));
      };
      const columns = [
        { field: "id", headerName: "Product ID", minWidth: 200, flex: 0.5 },
    
        {
          field: "name",
          headerName: "Name",
          minWidth: 350,
          flex: 1,
        },
        {
          field: "stock",
          headerName: "Stock",
          type: "number",
          minWidth: 150,
          flex: 0.3,
        },
    
        {
          field: "price",
          headerName: "Price",
          type: "number",
          minWidth: 270,
          flex: 0.5,
        },
    
        {
          field: "actions",
          flex: 0.3,
          headerName: "Actions",
          minWidth: 150,
          type: "number",
          sortable: false,
          renderCell: (params) => {
            return (
              <>
                <Link to={`/admin/product/${params.getValue(params.id, "id")}`}>
                  <EditIcon />
                </Link>
    
                <Button
                  onClick={() =>
                    deleteProductHandler(params.getValue(params.id, "id"))
                  }
                >
                  <DeleteIcon />
                </Button>
              </>
            );
          },
        },
      ];

      const rows = [];

  allproducts &&
    allproducts.forEach((item) => {
      rows.push({
        id: item._id,
        stock: item.stock,
        price: item.price,
        name: item.name,
      });
    });
    useEffect(() => {

      if (isDeleted) {
        alert.success("Product Deleted Successfully");
        history.push("/admin/dashboard");
        dispatch({ type: DELETE_PRODUCT_RESET });
      }
        
    
        dispatch(getAdminProduct());
      }, [dispatch,isDeleted,history]);
  return (
   <>
   <div className="dashboard">
        <Sidebar />
        <div className="productListContainer">
          <h1 id="productListHeading">ALL PRODUCTS</h1>

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="productListTable"
            autoHeight
          />
        </div>
      </div>
   </>
  )
}

export default ProductList