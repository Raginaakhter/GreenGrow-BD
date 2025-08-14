
import { Outlet } from 'react-router-dom';
import App from './App';
import Navber from './Navbar';
import Footer from './Pages/Footer';

const Root = () => {
    return (
        <div>
        <Navber></Navber>
        <Outlet></Outlet>
        <Footer></Footer>
        </div>
    );
};

export default Root;