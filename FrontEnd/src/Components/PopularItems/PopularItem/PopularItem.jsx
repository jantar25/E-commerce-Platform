import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import {Container,Image,Info,Icons,Icon,Circular,Title} from './Styles'

const PopularItem = ({item}) => {
    return (
        <Container>
            <Circular />
            <Image src={item.img}/>
            <Info>
                <Icons>
                    <Icon>
                        <SearchOutlined />
                    </Icon>
                    <Icon>
                        <ShoppingCartOutlined />
                    </Icon>
                    <Icon>
                        <FavoriteBorderOutlined /> 
                    </Icon>
                </Icons>
                <Title>{item.name}</Title>
            </Info>
            
        </Container>
    )
}

export default PopularItem