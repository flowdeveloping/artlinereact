import { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

//Importamos el Hook useContext: 
import { useContext } from 'react'
//Importamos el CarritoContext
import { CarritoContext } from '../../context/CarritoContext'



// eslint-disable-next-line react/prop-types
const ItemDetail = ({ id, nombre, precio, img, stock }) => {
    //1) Creamos un estado con la cantidad de productos agregados. 
    const [agregarCantidad, setAgregarCantidad] = useState(0);

    /// useContext

    const {agregarProducto} = useContext(CarritoContext);

    ////

    //2) Creamos una función manejadora de la cantidad: 

    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);
        //console.log("Productos agregados: " + cantidad);

        //Acá voy a crear un objeto con el item y la cantidad:
        const item = {id, nombre, precio};
        agregarProducto(item, cantidad);
    }

    return (
        <div className='contenedorItem'>
            <h2>{nombre} </h2>
            <h3>${precio} </h3>
            <h3>ID: {id} </h3>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <img src={img} alt={nombre} />
            {
                //Acá empleamos la lógica de montaje y desmontaje del componente
            }
            {
                agregarCantidad > 0 ? (<Link to="/cart" className="btnProducto"> Terminar Compra</Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
            }
        </div>
    )
}

export default ItemDetail