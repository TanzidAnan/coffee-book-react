import { useParams } from "react-router-dom";

const CoffeeCard = () => {
    const {tanzid} = useParams();
    // console.log(obj)
    // console.log(obj)
    return (
        <div>
            <h1>coffee card ..... {tanzid}</h1>
        </div>
    );
};

export default CoffeeCard;