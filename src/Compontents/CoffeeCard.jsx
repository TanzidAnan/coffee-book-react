import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";

const CoffeeCard = () => {
    const data =useLoaderData();
    const {category} = useParams();
    // console.log(data)
    // console.log(category)
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3">
            {
                data.map((coffee) => <Card key={coffee.id} coffee={coffee}></Card>)
            }
        </div>
    );
};

export default CoffeeCard;