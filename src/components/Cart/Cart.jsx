import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import './Cart.css'

const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <>
                <h2>No hay productos en el carrito</h2>
                <Link to="/" className="btnProductoProductos"> Ver Productos </Link>
            </>
        )
    }
    return (
        <div>
            {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}
            <h3>Total: $ {total} </h3>
            <h3> Cantidad Total : {cantidadTotal}  </h3>
            <button onClick={() => vaciarCarrito()} className="btn vaciarCarrito"> Vaciar Carro</button>
            <Link to="/checkout" className="btn btnProducto"> Finalizar Compra </Link>
        </div>
    )
}

export default Cart