import { useLoaderData } from "react-router-dom";
import Card from "../Compontents/Card";


const Coffess = () => {
    const data =useLoaderData()
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 my-14">
            {
                data.map((coffee) => <Card key={coffee.id} coffee={coffee}></Card>)
            }
        </div>
        </div>
    );
};

export default Coffess;