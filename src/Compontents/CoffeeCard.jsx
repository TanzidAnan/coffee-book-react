import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const CoffeeCard = () => {
    const [coffees, setCoffees] = useState([]);
    const naveget =useNavigate()
    const data = useLoaderData();
    const { category } = useParams();
    console.log(category)

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
        <>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 my-14">
            {
                coffees.map((coffee) => <Card key={coffee.id} coffee={coffee}></Card>)
            }
        </div>
        <div>
            <button onClick={() =>{naveget('/coffees')}} className="btn bg-yellow-500">View All</button>
        </div>
        </>
    );
};

export default CoffeeCard;