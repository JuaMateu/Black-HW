const itemDetail = ({ item }) => {
    return (

        // <div className="card w-96 glass">
        //     <figure ><img className='h-56' src={item.image} alt="car!" /></figure>
        //     <div className="card-body">
        //         <h2 className="card-title">{item.title}</h2>
        //         <p className="h-40 line-clamp-1">{item.description}</p>
        //         <div className="card-actions justify-end">
        //             <button className="btn btn-primary">Ver más</button>
        //         </div>
        //     </div>
        // </div>
        <div className="card w-96 mx-auto max-h-[500px] bg-base-100 shadow-xl">
            <figure className="h-40"><img className="w-full p-5" src={item.image} alt={item.title} /></figure>
            <div className="card-body">
                <h2 className="card-title truncate">
                    {item.title}
                    {/* <div className="badge badge-secondary">NEW</div> */}
                </h2>
                <p className="h-28 line-clamp-1">{item.description}</p>

                <div className="card-actions justify-end">
                    <button className="btn btn-primary mt-3">Ver más</button>
                    {/* <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div> */}
                </div>
            </div>
        </div>

    )
}

export default itemDetail