import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const CoffeeCard = () => {
    const [coffees,setCoffees] =useState([])
    const data =useLoaderData();
    const {category} = useParams();

    useEffect( () =>{
        const filterByCatergory =[...data].filter(coffee => coffee.category ===category);
        setCoffees(filterByCatergory)
    },[category,data])

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