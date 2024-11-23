import { useLoaderData } from "react-router-dom";

const Coffie = () => {
    const data =useLoaderData();
    console.log(data)
    return (
        <div>
            <h1>tanizd</h1>
        </div>
    );
};

export default Coffie;