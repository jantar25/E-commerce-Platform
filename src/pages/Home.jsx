import Navbar from "../Components/Navbar/Navbar"
import Announcement from "../Components/Navbar/Announcement"
import Slider from "../Components/Slider/Slider"
import Categories from "../Components/Categories/Categories"
import PopularItems from "../Components/PopularItems/PopularItems"


const Home = () => {
    return (
        <div>
           <Navbar />
           <Announcement />
           <Slider />
           <Categories />
           <PopularItems />
        </div>
    )
}

export default Home
