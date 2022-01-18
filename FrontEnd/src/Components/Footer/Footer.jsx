import pay from '../../Images/payment1.png'
import logoimage from '../../Images/logo.png'
import {Email, Facebook, Instagram, LocalPhone, Room,Twitter, WhatsApp} from '@material-ui/icons'



const Footer = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-center items-center px-5 py-10 sm:px-20'>
            <div className='flex-1 flex flex-col items-center p-4'>
                <div className='flex-1 flex items-center'>
                    <div className='mr-1 w-12'>
                        <img className='min-w-full' src={logoimage} alt="logo" />
                    </div>
                    <h1 className='flex text-3xl font-[800] font-Manrope text-transparent bg-clip-text 
                    bg-gradient-to-tr from-[#04AA6D] to-[#24FE41]'>KIVUGREEN</h1>
                 </div>
                <p className='text-gray-500 px-3 py-8 text-center'>Full of goodness. We have a passion for fresh, healthy food. 
                Our ambition is simple: To make healthy food yummier, easier to get ...</p>
                <div className='flex'>
                    <div className='bg-[#3B5999] h-10 w-10 flex justify-center items-center mr-[10px] rounded-full'>
                        <Facebook />
                    </div>
                    <div className='bg-[#E4405F] h-10 w-10 flex justify-center items-center mr-[10px] rounded-full'>
                        <Instagram />
                    </div>
                    <div className='bg-[#55ACEE] h-10 w-10 flex justify-center items-center mr-[10px] rounded-full'>
                        <Twitter />
                    </div>
                    <div className='bg-[#6a9113] h-10 w-10 flex justify-center items-center mr-[10px] rounded-full'>
                        <WhatsApp />
                    </div>
                </div>
            </div>
            <div className='flex-1 flex flex-col p-4 items-center'>
                <h2 className='mb-8 text-gray-300'>Useful Links</h2>
                <ul className='flex flex-wrap'>
                    <li className='text-gray-500 w-1/2 hover:text-[#6a9113] mb-2 cursor-pointer'>Home</li>
                    <li className='text-gray-500 w-1/2 hover:text-[#6a9113] mb-2 cursor-pointer'>Cart</li>  
                    <li className='text-gray-500 w-1/2 hover:text-[#6a9113] mb-2 cursor-pointer'>My Account</li>
                    <li className='text-gray-500 w-1/2 hover:text-[#6a9113] mb-2 cursor-pointer'>Order Tracking</li>
                    <li className='text-gray-500 w-1/2 hover:text-[#6a9113] mb-2 cursor-pointer'>Wishlist</li>
                    <li className='text-gray-500 w-1/2 hover:text-[#6a9113] mb-2 cursor-pointer'>Terms</li>
                </ul>
            </div>
            <div className='flex-1 flex flex-col p-4 items-center'>
                <h2 className='mb-8 text-gray-300 text-center'>Contact Us</h2>
                <div className='text-gray-500 mb-8 flex items-center'>
                    <Room style={{marginRight:"10px"}} /> ST.3456 Gisozi,Kigali</div>
                <div className='text-gray-500 mb-8 flex items-center'>
                    <LocalPhone style={{marginRight:"10px"}} /> +243 990 921 809</div>
                <div className='text-gray-500 mb-8 flex items-center'>
                    <Email style={{marginRight:"10px"}} /> contacts@kivugreen.co</div>
                <img className='w-1/2' src={pay} alt='pay'/>
            </div>
        </div>
    )
}

export default Footer
