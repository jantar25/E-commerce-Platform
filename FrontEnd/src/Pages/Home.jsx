import Navbar from "../Components/Navbar/Navbar"
import Announcement from "../Components/Navbar/Announcement"
import Slider from "../Components/Slider/Slider"
import Categories from "../Components/Categories/Categories"
import PopularItems from "../Components/PopularItems/PopularItems"
import Newsletter from "../Components/Newsletter/Newsletter"
import Footer from "../Components/Footer/Footer"


const Home = () => {
    return (
        <div>
            <Announcement />
           <Navbar />
           <Slider />
           <Categories />
           <PopularItems />
           <Newsletter />
           <Footer />
        </div>
    )
}

export default Home
