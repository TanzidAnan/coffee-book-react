import { useLoaderData, useParams } from "react-router-dom";

const Coffie = () => {
    const data =useLoaderData();
    const {id} =useParams();
    const detlesId =data.find(coffes => coffes.id === parseInt(id))
    console.log(detlesId)
    return (
        <div className="flex justify-center items-center">
            <h1>{detlesId.category}</h1>
        </div>
    );
};

export default Coffie;