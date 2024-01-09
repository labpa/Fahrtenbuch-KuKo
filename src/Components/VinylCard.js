const VinylCard = ({record}) => {
    return(
        <div>
            <h3>{record.artist}</h3>
            <p>{record.album}</p>
            <p>{record.year}</p>
        </div>
    )

}

export default VinylCard;
