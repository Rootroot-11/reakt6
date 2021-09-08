export default function GenreBadge({array}) {

    return (
        <div>
            Genres:
            {
                array && array.map((genre, i) => <i key={genre?.id || i}> - {genre?.name} -</i>)
            }
        </div>
    );
}