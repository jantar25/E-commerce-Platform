import {ShoppingCartOutlined} from '@material-ui/icons'
import {Container,Image,Info,Card,Circular,ImgContainer,Title,Price,Button} from './Styles'
import {Link} from "react-router-dom"

const PopularItem = ({item}) => {
    return (
        <Container>
                <Card>
                    <ImgContainer>
                        <Circular />
                        <Image src={item.img}/>
                    </ImgContainer>
                    <Info>
                        <Title>{item.title}</Title>
                        <Price>Rwf {item.price}/kg</Price>
                        <Link to={`/product/${item._id}`} style={{textDecoration:"none"}}>
                            <Button>Buy
                                <ShoppingCartOutlined style={{fontSize:'medium',marginLeft:'10px',fontWeight:"600"}} />
                            </Button>
                        </Link>
                    </Info>
                </Card>
        </Container>
    )
}

export default PopularItem