import l1 from '../assets/l1.png';
import l2 from '../assets/l2.png';
import l3 from '../assets/l3.png';
import l4 from '../assets/l4.png';
import l5 from '../assets/l5.png';
import l6 from '../assets/l6.png';
import l7 from '../assets/l7.png';

const Clients = () => {
  return (
    <div className='my-10'>
        {/* client text  */}
        <div className="text-center">
            <h1 className='md:text-4xl text-3xl font-bold text-secondary mb-6'>Our CLients</h1>
            <p className="text-lg text-gray-500">We have been working with some Fortune 500+ clients</p>
        </div>

        {/* company logos */}
        <div className="flex justify-between items-center gap-4 flex-wrap mx-8 mt-5">
            <img src={l1} alt="/" />
            <img src={l2} alt="/" />
            <img src={l3} alt="/" />
            <img src={l4} alt="/" />
            <img src={l5} alt="/" />
            <img src={l6} alt="/" />
            <img src={l7} alt="/" />
        </div>
    </div>
  )
}

export default Clients