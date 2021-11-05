import {Container} from './Styles'
import {PopItems} from '../Data'
import PopularsItem from './PopularItem/PopularItem'

const PopularsItems = () => {
    return (
        <Container>
            {PopItems.map(item=>(
                <PopularsItem item={item} key={item.id} />
            ))}
            
        </Container>
    )
}

export default PopularsItems