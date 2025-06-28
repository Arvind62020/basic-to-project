import DestinationCard from "./DistinationCard";
import NatureImag from '../assets/Nature-img.jpg';

function CardsList(){
    return(
        <>
        <div className=" text-white mb-4 text-center p-10">
            <h1 className="text-3xl font-bold">Our Toure Plans</h1>
         <p className="text-base ">Get you Drem Destination with less price from market</p>
        </div>
         <div className=" text-white mb-4 p-4">
            <h1 className="text-3xl font-bold">Mountain Trips</h1>
         <p className="text-base ">12 activities</p>
    </div>
    <section className="relative mb-16">
  {/* Background Image - hidden on mobile, shown on md+ screens */}
  <div className="hidden md:block absolute inset-0 -z-10">
    <img 
      src={NatureImag} 
      alt="Mountain background"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/20"></div>
  </div>

  {/* Content - same on all screens */}
  <div className="p-4 md:p-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <DestinationCard />
      <DestinationCard />
      <DestinationCard />
      <DestinationCard />
    </div>
  </div>
</section>
    
    <div className=" text-white mb-4 p-4">
            <h1 className="text-3xl font-bold">National Parks</h1>
         <p className="text-base ">10 activities</p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <DestinationCard />
        <DestinationCard />
        <DestinationCard />
        <DestinationCard />
    </div>
    

        </>
    )
}
export default CardsList;