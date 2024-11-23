import { useLoaderData, useParams } from "react-router-dom";

const Coffie = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const detlesId = data.find(coffes => coffes.id === parseInt(id))
    console.log(detlesId)
    return (
        <div className="flex justify-center items-center">
            <div>
                <h1 className="text-5xl font-bold text-center my-4">{detlesId.category}</h1>
                <div >
                    <img className="h-[60vh] w-full rounded-2xl" src={detlesId.image} alt="" />
                </div>
                <div className="my-7 border-2 py-3 px-2">
                    <p>{detlesId.description}</p>
                </div>
                <div className="text-6xl font-bold text-center">
                    <p>{detlesId.name}</p>
                </div>
            </div>
        </div>
    );
};

export default Coffie;