import { Link } from 'react-router-dom'


const CategoryItem = ({item}) => {

    return (
        <div className='flex-1 '>
            <Link to={`/products/${item.cat}`} style={{textDecoration:"none"}} > 
                <div className='min-w-[250px] sm:min-w-[450px] h-[250px] relative m-[5px]'>
                    <img className='w-full h-full object-cover brightness-50' src={item.img} alt='category'/>
                    <div className='absolute bottom-[10px] left-[10px]'>
                        <h2 className='text-orange-500 text-[700] text-4xl'>{item.title}</h2>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default CategoryItem
