import DestinationCard from "./DistinationCard";

function CardsList(){
    return(
        <>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
    <DestinationCard />
    <DestinationCard />
    <DestinationCard />
    <DestinationCard />
    <DestinationCard />
    <DestinationCard />
    <DestinationCard />
    <DestinationCard />
</div>
        </>
    )
}
export default CardsList;