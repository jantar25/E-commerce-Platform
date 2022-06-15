import {useSelector} from 'react-redux';
import Header from "../Components/header"
import Categories from "../Components/Categories/Categories"
import NewestItems from "../Components/PopularItems/NewestItems"
import Footer from "../Components/Footer/Footer"
import FarmerLogin from "../Components/FarmerLogin/FarmerLogin"
import FarmerProfile from "../Components/FarmerProfile/FarmerProfile"
import GetStarted from '../Components/GetStarted/GetStarted';


const Home = () => {
    const farmer=useSelector((state)=>state.farmer.currentFarmer);
    return (
        <div className="bg-[#000]">
            <Header />
           <Categories />
           <div>
                <h1 className='text-2xl md:text-4xl text-orange-500 text-center mb-8'>Newest Items</h1>
            </div>
           <NewestItems />
           <GetStarted />
           {farmer? <FarmerProfile farmer={farmer} />: <FarmerLogin /> }
           <Footer />
        </div>
    )
}

export default Home
