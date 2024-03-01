import { FaFacebook, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaDribbble, FaYoutube } from 'react-icons/fa6'
import logo from '../assets/logo.png';
import '../App.css';

const Footer = () => {
  return (
    <div className='lg:px-24 px-4 text-white bg-secondary pt-12'>
        {/* footer top  */}
        <div className="flex flex-col md:flex-row flex-wrap justify-between items-start gap-5">

            {/* logo text  */}
            <div className="space-y-4 lg:w-1/3">
            <div className="">
                  <a href="/" className="text-2xl font-semibold flex items-center space-x-3 text-white">
                      <img src={logo} alt="" className="w-10 inline-block items-center" />
                      <span>Nexcent</span>
                  </a>
              </div>
                <p className="text-gray-200">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, veniam.</p>

                {/* social icons  */}
                <div className="flex gap-5 text-white">
                    <a href="/" className="block border-2 p-3 rounded-full hover:border-orange hover:scale-110 transition-all duration-300"><FaInstagram className='w-5 h-5'/></a>
                    <a href="/" className="block border-2 p-3 rounded-full hover:border-orange hover:scale-110 transition-all duration-300"><FaDribbble className='w-5 h-5'/></a>
                    <a href="/" className="block border-2 p-3 rounded-full hover:border-orange hover:scale-110 transition-all duration-300"><FaTwitter className='w-5 h-5'/></a>
                    <a href="/" className="block border-2 p-3 rounded-full hover:border-orange hover:scale-110 transition-all duration-300"><FaYoutube className='w-5 h-5'/></a>
                </div>
            </div>

            {/* services  */}
            <div className="space-y-4">
                <h3 className="text-xl font-semibold">Company</h3>
                <div className="space-y-3 text-gray-300">
                    <a href="/" className="block">About Us</a>
                    <a href="/" className="block">Blog</a>
                    <a href="/" className="block">Pricing</a>
                    <a href="/" className="block">Testimonials</a>
                </div>
            </div>

            {/* contact  */}
            <div className="space-y-4">
                <h3 className="text-xl font-semibold">Support</h3>
                <div className="space-y-3 text-gray-300">
                <a href="/" className="block">Help center</a>
                <a href="/" className="block">Terms of service</a>
                    <a href="/" className="block">Legal</a>
                    <a href="/" className="block">Privacy policy</a>
                </div>
            </div>

            {/* subscribe  */}
            <div className="space-y-4">
                <h3 className="text-xl font-semibold">Stay up to date</h3>
                <div className="space-y-3 text-gray-300">
                    <div className="relative w-full">
                        <input type="email" placeholder='yourhead@gmail.com' className='newsletter_input' />
                    </div>
                </div>
            </div>


        </div>

        <div className="h-12"></div>
        <hr className='border-gray-300'/>
        <div className="h-12"></div>

        {/* copyright */}
        <div className="flex flex-col sm:flex-row justify-between pb-7">
            <p>omo all rights no dey reserved for this joint</p>
            <p>Terms of use | no stress</p>
        </div>
    </div>
  )
}

export default Footer