import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import {Container,Image,Info,Icons,Icon,Circular,Title,Price} from './Styles'
import {Link} from "react-router-dom"

const PopularItem = ({item}) => {
    return (
        <Container>
            <Circular />
            <Image src={item.img}/>
            <Info>
                <Icons>
                    <Link to={`/product/${item._id}`}>
                        <Icon>
                            <SearchOutlined />
                        </Icon>
                    </Link>
                    <Icon>
                        <ShoppingCartOutlined />
                    </Icon>
                    <Icon>
                        <FavoriteBorderOutlined /> 
                    </Icon>
                </Icons>
                <Title>{item.title}</Title>
                <Price>Rwf {item.price}/kg</Price>
            </Info>
            
        </Container>
    )
}

export default PopularItem