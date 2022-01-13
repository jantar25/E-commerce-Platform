import {CategoriesItems} from '../Data'
import CategoryItem from './Category/CategoryItem'

const Categories = () => {
    return (
        <div className='flex flex-col justify-center items-center px-5 py-10 sm:px-20'>
            <h1 className='text-2xl md:text-4xl text-orange-500 text-center mb-8'>Categories</h1>
            <div className='flex flex-wrap justify-center lg:justify-between'>
            {CategoriesItems.map(item=>(
                <CategoryItem item={item} key={item.id}  />
            ))}
            </div>
        </div>
    )
}

export default Categories
