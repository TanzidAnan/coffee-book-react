import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStrogeData } from "../Utlits/Stroge";


const DashBoard = () => {

    const allData =useLoaderData();
    const [productList,setProductList] =useState([]);

    useEffect(() =>{
        const strogeProduct =getStrogeData();
        const productStrogeCardList =strogeProduct.map(id => parseInt(id));
        console.log(productStrogeCardList)
        const productCard =allData.filter(product =>productStrogeCardList.includes(product.id))
        setProductList(productCard)
    },[allData])

    console.log(productList)


    return (
        <div>
            <h1>DeshBoards {productList.length}</h1>
        </div>
    );
};

export default DashBoard;