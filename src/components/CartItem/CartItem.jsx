/* eslint-disable react/prop-types */
import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import './CartItem.css'

// eslint-disable-next-line react/prop-types
const CartItem = ({ item, cantidad }) => {
    const { eliminarProducto } = useContext(CarritoContext);

    return (
        <div className="contenedorCartItem">
            <h4> {item.nombre} </h4>
            <p> Cantidad: {cantidad} </p>
            <p> Precio: {item.precio}  </p>
            <button onClick={() => eliminarProducto(item.id)} className="btnProductoItem"> Eliminar </button>
            <hr />
        </div>
    )
}

export default CartItem