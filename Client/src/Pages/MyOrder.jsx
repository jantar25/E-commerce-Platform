import React,{useRef} from 'react'
import Navbar from "../Components/Navbar/Navbar"
import Announcement from "../Components/Navbar/Announcement"
import Footer from "../Components/Footer/Footer"

const MyOrder = () => {
  const form = useRef();
  const sendEmail = (e) =>{
    e.preventDefault();
    
    // emailjs.sendForm('service_o27xpzc', 'template_rvwz16m', form.current, 'user_p6Z8erkcnfbXKsrc63eXs')
    //   .then((result) => {
    //       console.log(result.text);
    //   }, (error) => {
    //       console.log(error.text);
    //   });
      form.current.reset()
  }

  return (
    <div className='bg-black'>
        <Navbar />
        <Announcement />
        <div className='min-h-[50vh] p-8 text-gray-300'>
          <div className='text-center'>
            <h2 className='text-lg md:text-2xl font-[600]'>Didn't you receiver your Order?</h2>
            <h2 className='text-md md:text-xl font-[400]'>Or You are not satisfied with our quality service</h2>
            <h1 className='text-3xl md:text-5xl font-[800] mt-4 mb-8'>Please Claim by feeling the below form</h1>
          </div>
          <form ref={form} onSubmit={sendEmail} className='flex flex-col items-center justify-between md:mx-8 lg:mx-32 border p-2 md:p-8'>
            <div className='flex flex-col md:flex-row items-center w-full'>
              <div className='flex flex-col m-2 w-full'>
                <label>Names</label>
                <input name='names' className='rounded text-white px-4 py-2 bg-gray-600'/>
              </div>
              <div className='flex flex-col m-2 w-full'>
                <label>Order Number</label>
                <input name='OrderNumber' className='rounded text-white px-4 py-2 bg-gray-600'/>
              </div>
            </div>
            <div className='flex flex-col md:flex-row items-center w-full'>
              <div className='flex flex-col m-2 w-full'>
                <label>Address</label>
                <input name='address' className='rounded text-white px-4 py-2 bg-gray-600'/>
              </div>
              <div className='flex flex-col m-2 w-full'>
                <label>Ordered Date</label>
                <input type='date' name='date' className='rounded text-white px-4 py-2 bg-gray-600'/>
              </div>
            </div>
            <div className='flex flex-col m-2 w-full'>
              <label>Comments</label>
              <textarea name='comments'  rows={4} className='rounded text-white px-4 py-2 bg-gray-600'/>
            </div>
            <button type='submit' className='my-4 px-8 py-2 text-black text-xl font-[600] bg-[#04AA6D] hover:bg-[#24FE41] rounded'>
              Send Claim</button>
          </form>
          <div className='mt-16 md:mx-4 text-center'>
            <h3 className='text-xl text-red-500 underline '>IMPORTANT</h3>
            <p className='text-lg mt-2'>Thanks for being in touch with us,
            Note that we will respond to your claiming after <strong>2 Opening days</strong>.</p>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default MyOrder