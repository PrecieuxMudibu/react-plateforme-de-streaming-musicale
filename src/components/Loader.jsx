import "../styles/loader.css"

function Loader() {
    return (
        <div class="col-3">
            <div class="snippet" data-title=".dot-overtaking">
                <div class="stage filter-contrast">
                    <div class="dot-overtaking"></div>
                </div>
                <h1 className="loader__title">Veuillez patienter.</h1>
            </div>
        </div>
    )
}

export default Loader
