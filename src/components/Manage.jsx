import ab1 from '../assets/ab1.png';

const Manage = () => {

    const packages = [
        {name:"Membership Organisations", description: 'Our membership management software provides full automation of membership renewals and payments', green :"/src/assets/ab1.png"},
        {name:"National Associations", description: 'Our membership management software provides full automation of membership renewals and payments', green :"/src/assets/ab2.png"},
        {name:"Clubs And Groups", description: 'Our membership management software provides full automation of membership renewals and payments', green :"/src/assets/ab3.png"},
    ]

  return (
    <div className='md:px-14 p-4 max-w-s mx-auto py-10' id='service'>
        {/* manage text  */}
        <div className="text-center">
            <h1 className='md:text-4xl md:w-1/2 mx-auto text-center text-3xl font-semibold text-secondary mb-6'>Manage your entire community in a single system</h1>
            <p className="text-lg text-gray-500">Who is Nextcent suitable for?</p>
        </div>

        {/* manage card */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto">
            {
                packages.map((pack, index) => <div key={index} className='border-b py-10 md:px-6 px-4 rounded-lg'>
                    <img src={pack.green} alt="/" className='flex items-center justify-center mx-auto mb-6'/>
                    <h1 className='text-lg md:text-xl font-bold text-center text-primary mb-4'>{pack.name}</h1>
                    <p className="text-gray-500 text-sm text-center">{pack.description}</p>
                </div>)
            }
        </div>
    </div>
  )
}

export default Manage