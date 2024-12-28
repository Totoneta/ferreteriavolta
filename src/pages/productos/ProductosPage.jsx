//import { ContainerTarjetasProductos } from '../../components/productos/container-tarj-productos/container-tarj-prod'
import { ContainerTarjetasProductos } from '../../components/productos/container-tarj-productos/container-tarj-prod'
import { FiltrosCategorias } from '../../components/productos/filtros-categorias/filtros-categorias'
import { productos } from './../../data/productos'
import './ProductosPage.css'
import { useEffect, useState } from 'react'

export function ProductosPage() {

    const [filactivos, setFilActivos] = useState([])
    const [preciorango, setPrecioRango] = useState(0)
    const [filpornombre, setFilPorNombre] = useState('');
    const [productosFiltrados, setProductosFiltrados] = useState(productos);




    useEffect(() => {
        const filtrarProductos = () => {
            let productosFiltrados = productos;
            
            // Filtro por nombre
            if (filpornombre) {
                productosFiltrados = productosFiltrados.filter(producto =>
                    producto.titulo.toUpperCase().includes(filpornombre)
                );
            }

            // Filtro por rango de precio
            productosFiltrados = productosFiltrados.filter(producto =>
                producto.precio >= preciorango
            );

            // Filtros activos
            if (filactivos.length > 0) {
                productosFiltrados = productosFiltrados.filter(producto =>
                    filactivos.includes(producto.categoria)
                );
            }


            setProductosFiltrados(productosFiltrados);
        };

        filtrarProductos();
    }, [filactivos, preciorango, filpornombre]);

    return (
        <main className='productos-page-container'>

            <FiltrosCategorias filactivos={filactivos} preciorango={preciorango} filpornombre={filpornombre} productosFiltrados={productosFiltrados} setFilActivos={setFilActivos} setFilPorNombre={setFilPorNombre} setPrecioRango={setPrecioRango} setProductosFiltrados={setProductosFiltrados} />

            <ContainerTarjetasProductos productosFiltrados={productosFiltrados} setProductosFiltrados={setProductosFiltrados} />

        </main>

    )
}