import { Link } from 'react-router-dom'
import {Container,Image,Info,Title,Button} from './Styles'

const CategoryItem = ({item}) => {
    return (
        <Container>
            <Link to={`/products/${item.cat}`}> 
                <Image src={item.img}/>
                <Info>
                    <Title>{item.title}</Title>
                    <Button>PURCHASE</Button>
                </Info>
            </Link>
        </Container>
    )
}

export default CategoryItem
