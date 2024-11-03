import Banner from "../Compontents/Banner";
import Heading from "../Compontents/Heading";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Heading  title={'Brown coffees by catagores'} subTitle={'A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116)'}/>
        </div>
    );
};

export default Home;