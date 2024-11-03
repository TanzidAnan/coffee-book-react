
const Card = ({coffee}) => {
    const {name,image,category,ingredients,nutrition_info,origin,type,rating,popularity} =coffee;
    // console.log(coffee)
 
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default Card;