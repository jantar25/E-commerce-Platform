import {Container} from './Styles'
import {CategoriesItems} from '../Data'
import CategoryItem from './Category/CategoryItem'

const Categories = () => {
    return (
        <Container>
            {CategoriesItems.map(item=>(
                <CategoryItem item={item} />
            ))}
            
        </Container>
    )
}

export default Categories
