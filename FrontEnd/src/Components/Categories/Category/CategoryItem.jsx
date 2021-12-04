import { Link } from 'react-router-dom'
import {Container,Image,Info,Title,} from './Styles'

const CategoryItem = ({item}) => {
    return (
        <>
        <Link to={`/products/${item.cat}`} style={{textDecoration:"none"}} > 
            <Container>
                <Image src={item.img}/>
                <Info>
                    <Title>{item.title}</Title>
                </Info>
            </Container>
        </Link>
        </>
    )
}

export default CategoryItem
