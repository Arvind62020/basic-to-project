import Imag from '../assets/icon-img.jpeg';

function DestinationCard() {
    return (
        <div className="m-4 max-h-120 max-w-60 bg-white bg-opacity-20 shadow-lg rounded-2xl p-4 hover:scale-105 transition-transform duration-300 ease-in-out overflow-hidden group">
            <div className='flex flex-col items-center'>
                <div className="h-48 w-48 p-2 mb-3 overflow-hidden rounded-2xl">
                    <img 
                        className='w-full h-full object-cover rounded-2xl group-hover:scale-110 transition-transform duration-500'
                        src={Imag} 
                        alt="Nainital destination" 
                    />
                </div>
                <div className='text-center'>
                    <h1 className='text-white text-xl font-bold mb-1'>Nainital</h1>
                    <p className='text-white text-opacity-80 mb-2'>Uttarakhand, India</p>
                    <div className='flex justify-center items-center'>
                        <span className='text-white font-bold text-lg bg-blue-500 bg-opacity-30 px-4 py-1 rounded-full'>
                            ₹2,000/-
                        </span>
                    </div>
                    <button className='mt-3 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100'>
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DestinationCard;