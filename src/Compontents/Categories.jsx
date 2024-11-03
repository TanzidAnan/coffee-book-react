import { Link } from "react-router-dom";

const Categories = ({categories}) => {
    return (
        <div>
            <div role="tablist" className="tabs tabs-lifted">
                {categories.map((categorie ,idx) =><Link key={idx} to='/cart' role="tab" className="tab">
                {categorie.category}
                </Link>)}
            </div>
        </div>
    );
};

export default Categories;