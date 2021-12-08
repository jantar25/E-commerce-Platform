import Navbar from "../Components/Navbar/Navbar"
import Announcement from "../Components/Navbar/Announcement"
import Slider from "../Components/Slider/Slider"
import About from "../Components/About/About"
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
            <About />
           <Categories />
           <PopularItems />
           <Newsletter />
           <Footer />
        </div>
    )
}

export default Home
