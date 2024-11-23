import { useLoaderData, useParams } from "react-router-dom";

const Coffie = () => {
    const data =useLoaderData();
    const {id} =useParams();
    
    return (
        <div>
            <h1>tanizd</h1>
        </div>
    );
};

export default Coffie;