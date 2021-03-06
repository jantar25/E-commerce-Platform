import {CategoriesItems} from '../Data'
import CategoryItem from './Category/CategoryItem'

const Categories = () => {
    return (
        <div className='flex flex-col px-5 py-10'>
            <h1 className='text-2xl md:text-4xl text-orange-500 text-center mb-8'>Categories</h1>
            <div className='flex flex-wrap justify-center items-center'>
                {CategoriesItems.map(item=>(
                    <CategoryItem item={item} key={item.id}  />
                ))}
            </div>
        </div>
    )
}

export default Categories
