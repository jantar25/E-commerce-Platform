import { Link } from 'react-router-dom'


const CategoryItem = ({item}) => {

    return (
            <Link to={`/products/${item.cat}`} style={{textDecoration:"none"}} > 
                <div className='w-[250px]  h-[160px] relative m-[5px] hover:translate-y-2 duration-300'>
                    <img className='w-full h-full object-cover brightness-50 rounded-lg' src={item.img} alt='category'/>
                    <div className='absolute bottom-[10px] left-[10px]'>
                        <h2 className='text-orange-500 text-[700] text-4xl'>{item.title}</h2>
                    </div>
                </div>
            </Link>
    )
}

export default CategoryItem
