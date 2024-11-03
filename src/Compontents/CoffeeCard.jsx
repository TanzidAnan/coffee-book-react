import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const CoffeeCard = () => {
    const [coffees, setCoffees] = useState([])
    const data = useLoaderData();
    const { category } = useParams();

    useEffect(() => {
        if (category) {
            const filterByCatergory = [...data].filter(coffee => coffee.category === category);
            setCoffees(filterByCatergory)
        }
        else{
            setCoffees(data.slice(0,6))
        }
    }, [category, data])

    // console.log(data)
    // console.log(category)
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3">
            {
                coffees.map((coffee) => <Card key={coffee.id} coffee={coffee}></Card>)
            }
        </div>
    );
};

export default CoffeeCard;