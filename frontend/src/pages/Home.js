import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'


export default function Home() {
    const [foodItems, setFooditems] = useState([]);
    const [foodCategory, setFoodCategory] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    async function fetchFoodData() {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URI}/foods/fooddata`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                },
            });

            if (!response.ok) {
                throw new Error("Failed to fetch food data");
            }

            const data = await response.json();
            console.log("Server Response:", data);

            setFooditems(data.foodItems);
            setFoodCategory(data.foodCategory);

        } catch (error) {
            console.error("Error fetching food data:", error.message);
        }
    }
    useEffect(() => {
        fetchFoodData();
    }, []);


    return (
        <>
            <div>
                <Navbar />
            </div>

            <div>
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{ objectFit: "contain" }}>


                    <div className="carousel-inner " id='carousal'>
                        <div className="carousel-caption d-none d-md-block" style={{ "zIndex": "10" }}>
                            <form className="d-flex" >
                                <input className="form-control me-2 bg-dark text-white" type="search" 
                                placeholder="Search" aria-label="Search" onChange={(e)=>setSearchValue(e.target.value)} />
                                <button className="btn btn-outline-success  bg-success text-white" type="submit">Search</button>
                            </form>
                        </div>
                        <div className="carousel-item active">
                            <img src="/images/sandwitch.jpeg" className="d-block w-100" style={{ filter: "brightness(30%)", objectFit: "cover", height: "500px" }} alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="/images/burger.jpeg" className="d-block w-100" style={{ filter: "brightness(30%)", objectFit: "cover", height: "500px" }} alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="/images/pizza.jpeg" className="d-block w-100" style={{ filter: "brightness(30%)", objectFit: "cover", height: "500px" }} alt="..." />
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

            </div>
            <div className='container'>
                {
                    foodCategory.length > 0 ? foodCategory.map((data) => {
                        return (
                            <div className='row mb-3'>
                                <div key={data._id} className='fs-3 m-3'> {data.CategoryName} </div>
                                <hr />
                                {
                                    foodItems.length > 0 ?
                                        foodItems.filter((item) => (item.CategoryName === data.CategoryName && item.name.toLowerCase().includes(searchValue.toLowerCase())) )
                                            .map((filteredItems) => {
                                                return (
                                                        <div className='col-12 col-md-6 col-lg-3' key={filteredItems._id}>
                                                            <Card 
                                                            foodname = {filteredItems.name}
                                                            imgsrc = {filteredItems.img}
                                                            options = {filteredItems.options[0]}
                                                            description = {filteredItems.description}
                                                            />
                                                        </div> 

                                                )
                                            })
                                        : <div>No Food In this Category</div>
                                }
                            </div>

                        )
                    }) : <div> No Categories Found</div>
                }

            </div>
            <div>
                <Footer />
            </div>

        </>

    )
}
