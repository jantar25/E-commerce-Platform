import Header from "../Components/header"
import Categories from "../Components/Categories/Categories"
import PopularItems from "../Components/PopularItems/PopularItems"
import Footer from "../Components/Footer/Footer"


const Home = () => {
    return (
        <div className="bg-[#000]">
            <Header />
           <Categories />
           <PopularItems />
           <Footer />
        </div>
    )
}

export default Home
