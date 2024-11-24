
const Product = ({ product }) => {
    console.log(product)
    co
    return (
        <div>
            <div className="card card-compact bg-base-100 w-96 shadow-xl">
                <figure className="h-[30vh] w-full">
                    <img
                        className="h-full w-full"
                        src={image}
                        alt="coffees" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <h2 className="card-title">categry: {category}</h2>
                    <p>type: {type}</p>
                    <p>type: {rating}</p>
                </div>
            </div>
        </div>
    );
};

export default Product;