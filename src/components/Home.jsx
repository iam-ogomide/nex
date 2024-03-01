import home from '../assets/home.png';

const Home = () => {
  return (
    <div className='md:px-12 p-4 max-w-screen-2xl mx-auto mt-28' id='home'>
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">

            {/* home content */}
            <div className="md:w-1/2">
                <h1 className="md:text-5xl text-4xl font-bold text-secondary mb-6 leading-relaxed-[110px]">Lessons and insights <span className="text-primary">from 8 years</span></h1>
                <p className="text-lg mb-8 text-gray-500">Where to grow your business as a photographer: site or social media?</p>
                <button className='btnPrimary'>Register</button>
            </div>

             {/* image */}
            <div className="md:w-[40%]">
                <img src={home} alt="" />
            </div>

        </div>
    </div>
  )
}

export default Home