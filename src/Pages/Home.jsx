import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Compontents/Banner";
import Heading from "../Compontents/Heading";
import Categories from "../Compontents/Categories";

const Home = () => {
    const categories = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <Heading title={'Brown coffees by catagores'} subTitle={'A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116)'} />
            <Categories categories={categories}></Categories>
            <Outlet></Outlet>


        </div>
    );
};

export default Home;