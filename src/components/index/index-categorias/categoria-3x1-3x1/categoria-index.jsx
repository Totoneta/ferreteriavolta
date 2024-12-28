import { Link } from 'react-router-dom'
import './categoria-index.css'

export function CategoriaIndex({ id, url, nombre, descripcion, img }) {

    return (
        <Link className='tarjeta-index-container' to={url}>
                <picture className='tarjeta-index-pic'>
                    <img className='t-i-img-fondo' src={img} alt={nombre} />
                </picture>
                <div className='t-i-text' >
                    <h3>{nombre}</h3>
                    <p>{descripcion}</p>
                </div>
        </Link>
    )
}