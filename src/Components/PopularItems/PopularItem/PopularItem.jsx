import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import {Container,Image,Info,Icon,Circular} from './Styles'

const PopularItem = ({item}) => {
    return (
        <Container>
            <Circular />
            <Image src={item.img}/>
            <Info>
                <Icon>
                    <SearchOutlined />
                </Icon>
                <Icon>
                    <ShoppingCartOutlined />
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined /> 
                </Icon>
            </Info>
        </Container>
    )
}

export default PopularItem