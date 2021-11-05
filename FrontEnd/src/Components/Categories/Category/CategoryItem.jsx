import {Container,Image,Info,Title,Button} from './Styles'

const CategoryItem = ({item}) => {
    return (
        <Container>
            <Image src={item.img}/>
            <Info>
                <Title>{item.title}</Title>
                <Button>PURCHASE</Button>
            </Info>
        </Container>
    )
}

export default CategoryItem
