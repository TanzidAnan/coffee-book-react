
import NavBar from '../Compontents/NavBar';
import Footer from '../Compontents/Footer';
import { Outlet } from 'react-router-dom';

const MainLayouts = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className='min-h-[calc(100vh-300px)] my-10'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;