import { CategoriaIndex } from './categoria-3x1-3x1/categoria-index'
import './index-categorias.css'
import {categorias} from './../../../data/categorias-data'

export function IndexCategorias() {

    return (
        <section className='ie-container'>
            {

                categorias.map((e) => {
                    return <CategoriaIndex key={e.id} id={e.id} nombre={e.nombre} descripcion={e.descripcion} url={e.url} img={e.img} />
                })

            }
        </section>
    )
}