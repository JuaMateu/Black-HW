import { Link } from "react-router-dom";

const itemDetail = ({  img, title, description, price, id }) => {
    return (
        
        <div className="card w-96 mx-auto max-h-[500px] bg-base-100 shadow-xl">
            <figure className="h-40"><img className="w-full p-5 object-fill" src={img} alt={img} /></figure>
            <div className="card-body">
                    {/* <div className="badge badge-secondary">NEW</div> */}
                <h2 className="card-title truncate">
                    {title}
                </h2>
                <p className="h-20 max-h-20 truncate line-clamp-1">{description}</p>
                <h3 className="ml-auto">{`$ ${price}`}</h3>
                <div className="card-actions justify-end">
                    <Link to={`/item/${id}`}>
                        <button className="btn btn-primary mt-3">Ver más</button>
                    </Link>
                    {/* <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div> */}
                </div>
            </div>
        </div>

    )
}

export default itemDetail