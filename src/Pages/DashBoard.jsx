import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStrogeData } from "../Utlits/Stroge";


const DashBoard = () => {

    const allData =useLoaderData();
    const [productList,setProductList] =useState([]);

    useEffect(() =>{
        const strogeProduct =getStrogeData();
        console.log(strogeProduct)
    },[])

    return (
        <div>
            <h1>DeshBoards</h1>
        </div>
    );
};

export default DashBoard;