import { useLoaderData, useParams } from "react-router-dom";

const Coffie = () => {
    const data =useLoaderData();
    console.log(data)
    const {id} =useParams();
    console.log(id)
    return (
        <div>
            <h1>tanizd</h1>
        </div>
    );
};

export default Coffie;