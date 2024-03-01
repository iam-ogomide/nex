import pana from '../assets/pana.png';
import crt from '../assets/crt.png';
import l1 from '../assets/l1.png';
import l2 from '../assets/l2.png';
import l3 from '../assets/l3.png';
import l4 from '../assets/l4.png';
import l5 from '../assets/l5.png';
import l6 from '../assets/l6.png';
import l7 from '../assets/l7.png';

const Design = () => {
  return (
    <div className="">
        {/* Top content  */}
        <div className="md:px-14 p-4 max-w-s mx-auto" id='product'>
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">

                {/* about image */}
                <div className="md:w-1/2">
                    <img src={pana} alt="/" />
                </div>

                {/* about content  */}
                <div className="md:w-1/2">
                    <h2 className='md:text-4xl text-3xl font-bold text-secondary mb-5 leading-normal'>How to design your site footer like we did</h2>
                    <p className="text-gray-500 text-sm mb-5">Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                    <button className='btnPrimary'>Learn more</button>
                </div>
            </div>
      </div>


      {/* Bottom content  */}
      <div className="bg-gray-100 w-full md:px-14 p-4 max-w-s mx-auto mt-9">
        <div className="">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">

                {/* about image */}
                <div className="md:w-1/2 items-center">
                    <img src={crt} alt="/" />
                </div>

                {/* about content  */}
                <div className="md:w-1/2">
                    <p className="text-gray-500 text-sm mb-5">Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                    <div className="my-3">
                        <h1 className='text-primary text-xl'>Tim Smith</h1>
                        <p className="text-gray-500 text-sm mb-5">British Dragon Boat Racing Association</p>
                    </div>
                    <div className="flex justify-between items-center gap-4 flex-wrap  mt-5">
                        <img src={l1} alt="/" />
                        <img src={l2} alt="/" />
                        <img src={l3} alt="/" />
                        <img src={l4} alt="/" />
                        <img src={l5} alt="/" />
                        <img src={l6} alt="/" />
                        <img src={l7} alt="/" />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Design