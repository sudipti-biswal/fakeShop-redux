import React, { useEffect, useCallback, useMemo }from "react";
import axios from "axios";
import ProductComponent from "./ProductComponent";
//Allows you to extract data from the Redux store state, using useselector
import { useSelector ,useDispatch } from "react-redux";
//passing Action
import {setProducts} from "../redux/actions/productActions";
 
const ProductListing =()=>{

	const products= useSelector ((state) => state);
    // console.log("products:",products);
    const dispatch = useDispatch();

    const fetchProducts = async () =>{
    	const response= await axios.get("https://fakestoreapi.com/products")
    	.catch((err)=>{
    		console.log("err",err)
    	})
    	dispatch(setProducts (response.data));
    }
	
    useEffect(()=>{
       fetchProducts();
    },[])
    console.log("Products : ",products)
   return(
   	<>
      <div className="ui grid container">
       
        <ProductComponent />
      
      </div>
   	</>
   	)

}
export default ProductListing;