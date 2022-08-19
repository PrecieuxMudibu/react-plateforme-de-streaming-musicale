function ListChildren({songNumber, songName, songAlbum, songDuration}) {
    return (
        <div className="page__list-children font-size-19">
            <div className="page__list-first-column">{songNumber}</div>
            <div className="page__list-three-last-columns">
                {songName}
            </div>
            <div className="page__list-three-last-columns">
                {songAlbum}
            </div>
            <div className="page__list-three-last-columns">{songDuration}</div>
        </div>
    )
}

export default ListChildren
