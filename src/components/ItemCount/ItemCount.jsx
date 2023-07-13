/* eslint-disable react/prop-types */
import { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({ inicial, stock, funcionAgregar }) => {
    const [contador, setContador] = useState(inicial);


    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }

    return (
        <>
            <div className="contenedorBotones">
                <button onClick={decrementar} className="botonDoble"> - </button>
                <p> {contador} </p>
                <button onClick={incrementar} className="botonDoble"> + </button>
            </div>
            <button onClick={() => funcionAgregar(contador)} className="btnProducto"> Al Carrito </button>
        </>
    )
}



export default ItemCount