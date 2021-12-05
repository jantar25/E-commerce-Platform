import Navbar from "../Components/Navbar/Navbar"
import Announcement from "../Components/Navbar/Announcement"
import Slider from "../Components/Slider/Slider"
import Categories from "../Components/Categories/Categories"
import PopularItems from "../Components/PopularItems/PopularItems"
import Newsletter from "../Components/Newsletter/Newsletter"
import Footer from "../Components/Footer/Footer"
import styled from "styled-components"
import BackImg from "../Images/last.png"


const Carousell = styled.div`
background-image: url(${BackImg});
background-size: contain;
`


const Home = () => {
    return (
        <div>
            <Carousell>
                <Navbar />
                <Announcement />
                <Slider />
            </Carousell>
           <Categories />
           <PopularItems />
           <Newsletter />
           <Footer />
        </div>
    )
}

export default Home
