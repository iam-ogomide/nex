import care from '../assets/care.png';
import { BsArrowRight } from "react-icons/bs";
import '../App.css';

const Care = () => {
    const packages = [
        {name:"Creating Streamlined Safeguarding Processes with OneRen"},
        {name:"What are your safeguarding responsibilities and how can you manage them?"},
        {name:"Revamping the Membership Model with Triathlon Australia"},
    ]

  return (
    <div className="" id='testify'>
        {/* overall top  */}
        <div className='md:px-14 p-4 max-w-s mx-auto py-10 mt-16'>
            {/* care text  */}
            <div className="text-center ">
                <h1 className='md:text-4xl md:w-1/2 mx-auto text-center text-3xl font-semibold text-secondary mb-6'>Caring is the new marketing</h1>
                <p className="text-sm text-gray-500 md:w-3/5 mx-auto">The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
            </div>


            {/* care card */}
            <div className="relative">
                {/* <img src={care} alt="" className='try'/> */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto">
                    {
                        packages.map((pack, index) => <div key={index} className='border py-10 md:px-6 px-4 rounded-lg'>
                            <h1 className='text-lg md:text-xl font-bold text-center text-secondary opacity-70 mb-4'>{pack.name}</h1>
                            <div className="items-center flex justify-center">
                                <a href="" className="inline-flex items-center text-primary gap-2 font-semibold  "><span>Readmore</span><BsArrowRight /></a>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>


        {/* bottom  */}
        <div className="bg-gray-100 w-full items-center md:p-14 p-4 max-w-s mx-auto">
            <h1 className='text-2xl md:text-5xl md:w-1/2 mx-auto font-bold text-center mb-10'>Pellentesque suscipit fringilla libero eu.</h1>
            <div className="items-center flex justify-center">
                <button className='btnPrimary'>
                    <a href="" className="inline-flex items-center text-white gap-2 font-semibold  "><span>Get a Demo</span><BsArrowRight /></a>
                </button>
            </div>
        </div>


    </div>
  )
}

export default Care