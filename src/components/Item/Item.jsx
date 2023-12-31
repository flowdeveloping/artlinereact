import './Item.css'
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const Item = ({ id, nombre, precio, img, stock }) => {
    return (
        <div className='cardProducto'>
            <img className='imgProducto' src={img} alt={nombre} />
            <h3>{nombre} </h3>
            <p> $ {precio} </p>
            <p>ID: {id} </p>
            <p>Stock {stock} </p>
            
            <Link to={`/item/${id}`} className="btnProductoitem"> Ver Detalles</Link>
        </div>
    )
}

export default Item