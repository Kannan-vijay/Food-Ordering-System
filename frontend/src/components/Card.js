import React from 'react'

export default function Card(props) {
    const options = props.options;
    const priceOptions = Object.keys(options);
    return (
        <>
            <div className="card mt-3 bg-dark text-white" style={{ "width": "18rem" }}>
                <img src={props.imgsrc} className="card-img-top" alt="..."  />
                <div className="card-body">
                    <h5 className="card-title">{props.foodname}</h5>
                    <div className='container w-100'>
                        <select className='m-2 h-100 bg-success rounded'>
                            {   Array.from(Array(6) , (e,i) =>{
                                return (
                                    <option key={i+1} value={i+1}> {i+1}</option>
                                )
                            })}
                        </select>
                        <select className='m-2 h-100 bg-success rounded'>
                            {priceOptions.map((data)=>{
                                return <option key={data} value={data}>{data}</option>
                            })}
                        </select>
                        <div className='d-inline h-100 fs-5'>
                            Total Price
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
