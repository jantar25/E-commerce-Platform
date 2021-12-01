
import {Container,Image,Info,Card,Circular,ImgContainer,Title,Price} from './Styles'
import {Link} from "react-router-dom"

const PopularItem = ({item}) => {
    return (
        <Container>
            <Circular />
            <Link to={`/product/${item._id}`} style={{textDecoration:"none"}}>
                <Card>
                    <ImgContainer>
                        <Image src={item.img}/>
                    </ImgContainer>
                    <Info>
                        <Title>{item.title}</Title>
                        <Price>Rwf {item.price}/kg</Price>
                    </Info>
                </Card>
            </Link>
        </Container>
    )
}

export default PopularItem