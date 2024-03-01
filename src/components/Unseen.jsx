import about from '../assets/about.png';
import hp1 from '../assets/hp1.png';
import hp2 from '../assets/hp2.png';
import hp3 from '../assets/hp3.png';
import hp4 from '../assets/hp4.png';

const Unseen = () => {
  return (
    <div className='' id='about'>

      {/* Top */}
      <div className="md:px-14 p-4 max-w-s mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

            {/* about image */}
            <div className="md:w-1/2">
                <img src={about} alt="/" />
            </div>

            {/* about content  */}
            <div className="md:w-1/2">
                <h2 className='md:text-4xl text-3xl font-bold text-secondary mb-5 leading-normal'>The unseen of spending three years at Pixelgrade</h2>
                <p className="text-gray-500 text-sm mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                <button className='btnPrimary'>Learn more</button>
            </div>
        </div>
      </div>
        


        {/* bottom */}
        <div className="bg-gray-100 w-full flex flex-col md:flex-row justify-between items-center md:p-14 p-4 max-w-s mx-auto">
          {/* right side  */}
          <div className="md:w-2/5 items-center">
            <h2 className="text-center md:text-start md:text-3xl text-2xl font-bold text-secondary mb-3 leading-normal">Helping a local <span className="text-primary">business reinvent itself</span></h2>
            <p className="text-center md:text-start mb-3 text-sm">We reached here with our hard work and dedication</p>
          </div>

          {/* left side  */}
          <div className="md:w-1/2">
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-8">
              <div className=" items-center gap-3 flex h-auto">
                    <img src={hp1} alt="" />
                    <div className="">
                        <h1 className="text-secondary text-lg font-bold">2,245,341</h1>
                        <p className="mb-2 text-sm leading-tight text-secondary">Members</p>
                    </div>
              </div>
              <div className=" items-center gap-3 flex h-auto">
                    <img src={hp2} alt="" />
                    <div className="">
                        <h1 className="text-secondary text-lg font-bold">46,328</h1>
                        <p className="mb-2 text-sm leading-tight text-secondary">Clubs</p>
                    </div>
              </div>
              <div className=" items-center gap-3 flex h-auto">
                    <img src={hp3} alt="" />
                    <div className="">
                        <h1 className="text-secondary text-lg font-bold">828,867</h1>
                        <p className="mb-2 text-sm leading-tight text-secondary">Event Bookings</p>
                    </div>
              </div>
              <div className=" items-center gap-3 flex h-auto">
                    <img src={hp4} alt="" />
                    <div className="">
                        <h1 className="text-secondary text-lg font-bold">1,926,436</h1>
                        <p className="mb-2 text-sm leading-tight text-secondary">Payments</p>
                    </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Unseen