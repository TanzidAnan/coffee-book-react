import { useLoaderData } from "react-router-dom";
import Card from "../Compontents/Card";


const Coffess = () => {
    const data = useLoaderData()
    return (
        <>
            <div className="flex justify-between">
                <div>
                    <h2 className="text-3xl font-semibold">Sort Coffee's by Popularity & Rating-{">"}</h2>
                </div>
                <div className="flex gap-6">
                    <button className="btn bg-yellow-600 font-bold text-white">Sort By Popularity (DSC)</button>
                    <button className="btn bg-yellow-600 font-bold text-white">Sort By Rating (ASC)</button>
                </div>
            </div>
            <div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 my-14">
                    {
                        data.map((coffee) => <Card key={coffee.id} coffee={coffee}></Card>)
                    }
                </div>
            </div>
        </>
    );
};

export default Coffess;