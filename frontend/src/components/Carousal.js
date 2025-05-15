import React from 'react'

export default function Carousal() {
    return (
        <>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{objectFit:"contain"}}>


                <div className="carousel-inner " id='carousal'>
                    <div className="carousel-caption d-none d-md-block" style={{"zIndex" : "10"}}>
                        <form className="d-flex" >
                            <input className="form-control me-2 bg-dark text-white" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success  bg-success text-white" type="submit">Search</button>
                        </form>
                    </div>
                    <div className="carousel-item active">
                        <img src="/images/sandwitch.jpeg" className="d-block w-100" style={{filter : "brightness(30%)",objectFit: "cover",height: "500px"}} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/images/burger.jpeg" className="d-block w-100" style={{filter : "brightness(30%)",objectFit: "cover" ,height: "500px"}} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/images/pizza.jpeg" className="d-block w-100" style={{filter : "brightness(30%)",objectFit: "cover",height: "500px"}} alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </>
    )
}
