/* eslint-disable react/prop-types */

import { removeItem } from "../Utlits/Stroge";

const Product = ({ product }) => {
    // console.log(product)
    const {image,name,category,type,rating,id} =product;
    const hendleDelete =(id) =>{
        removeItem(id)
    }
    return (
        <div>
            <div className="card card-compact bg-base-100  shadow-xl">
                <figure className="h-[30vh] w-full">
                    <img
                        className="h-full w-full"
                        src={image}
                        alt="coffees" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <h2 className="card-title">categry: {category}</h2>
                    <p>type: {type}</p>
                    <p>type: {rating}</p>
                </div>
                <div className="flex justify-center py-3">
                    <button onClick={() =>hendleDelete(id)} className="btn btn-sm text-red-500">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default Product;