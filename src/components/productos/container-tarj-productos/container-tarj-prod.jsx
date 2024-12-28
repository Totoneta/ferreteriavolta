import './container-tarj-prod.css'
import { TarjetaProducto } from './tarjeta-producto/tarjeta-producto'

export function ContainerTarjetasProductos({productosFiltrados}){
    
    return(
        
        <div className='container-tarj-prod'>

        {
            productosFiltrados.map((e) => (
                <TarjetaProducto key={e.id} img={e.img} titulo={e.titulo} precio={e.precio} marca={e.marca} descripcion={e.descripcion} stock={e.stock} />
            ))
        }

    </div>
    )
}