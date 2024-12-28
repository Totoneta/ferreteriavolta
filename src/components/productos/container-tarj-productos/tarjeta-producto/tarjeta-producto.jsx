import { Link } from 'react-router-dom'
import './tarjeta-producto.css'

export function TarjetaProducto({ stock, titulo, precio, descripcion, marca }) {


    return (
        <Link className='tarjeta-producto-container'>
            <img src='/img/index-categorias/accesorios.jpg' alt='' />
            <div className='tarjeta-producto-texto'>
                <div className='producto-tit-desc-prec'>
                    <h3>{titulo.toUpperCase()}</h3>
                    <span>${precio}</span>
                    <br />
                    <span>{stock?'En Stock':'Sín Stock'}</span>

                </div>
                <div className='producto-cat-mar-mod-med'>
                    <h4>Marca: {marca.toUpperCase()}</h4>
                    <span>Descripción: {descripcion}</span>
                </div>
            </div>
        </Link>
    )
}