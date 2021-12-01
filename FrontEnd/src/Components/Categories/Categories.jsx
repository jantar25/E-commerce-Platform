import {Container,Title,Cat} from './Styles'
import {CategoriesItems} from '../Data'
import CategoryItem from './Category/CategoryItem'

const Categories = () => {
    return (
        <Container>
            <Title>Categories</Title>
            <Cat>
            {CategoriesItems.map(item=>(
                <CategoryItem item={item} key={item.id}  />
            ))}
            </Cat>
        </Container>
    )
}

export default Categories
