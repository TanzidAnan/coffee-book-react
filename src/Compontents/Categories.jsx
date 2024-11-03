/* eslint-disable react/prop-types */
import {  NavLink } from "react-router-dom";

const Categories = ({categories}) => {
    return (
        <div className="mt-10">
            <div role="tablist" className="tabs tabs-lifted">
                {categories.map((categorie ,idx) =>
                <NavLink key={idx}
                 to={`/categorie/${categorie.category}`} role="tab"
                  className={({isActive}) => `tab text-2xl ${isActive?'tab-active':''}`}
                 >
                {categorie.category}
                </NavLink>)}
            </div>
        </div>
    );
};

export default Categories;