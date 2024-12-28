import './filtros-categorias.css'

export function FiltrosCategorias({ filactivos, preciorango, setFilActivos, setFilPorNombre, setPrecioRango }) {

    const AgregarFiltro = (e) => {
        const filtro = e.target.innerText.toUpperCase();
        if (!filactivos.includes(filtro)) {
            setFilActivos([...filactivos, filtro]);
        }
    };

    const PrecioRango = (e) => {
        setPrecioRango(e.target.value)
    }

    const HandleSubmit = (e) => {
        e.preventDefault()
    }

    const NombreProductoBuscar = (e) => {
        setFilPorNombre(e.target.value.toUpperCase());

    }

    const EliminarFilActivo = (index) => {
        setFilActivos(filactivos.filter((_, i) => i !== index));
    };

    return (
        <aside className='filtros-cat-container'>

            <form onSubmit={HandleSubmit} className='categoria-texto'>
                <input onChange={NombreProductoBuscar} type='text' placeholder='Buscar Producto' />
                <button type='submit'>Buscar</button>
            </form>

            <div className='categoria-opciones'>
                <h3>CATEGORÍAS</h3>
                <ul className='cat-opc-list'>
                    <li className='cat-opc-item' onClick={AgregarFiltro} >Materiales Electricos</li>
                    <li className='cat-opc-item' onClick={AgregarFiltro} >Iluminacion</li>
                    <li className='cat-opc-item' onClick={AgregarFiltro} >Ferreteria</li>
                    <li className='cat-opc-item' onClick={AgregarFiltro} >Herramientas</li>
                    <li className='cat-opc-item' onClick={AgregarFiltro} >Industria</li>
                    <li className='cat-opc-item' onClick={AgregarFiltro} >Accesorios</li>
                    <li className='cat-opc-item' onClick={AgregarFiltro} >Varios</li>
                </ul>
            </div>

            <div className='categorias-activas'>
                <h3>FILTROS ACTIVOS</h3>
                <ul className='cat-act-list'>

                    {
                        filactivos.map((filtro, index) => (
                            <li key={index} className='cat-act-item'>
                                {filtro}
                                <button onClick={() => EliminarFilActivo(index)}>Eliminar</button>
                            </li>
                        ))
                    }

                </ul>
            </div>

            <div className='categoria-rango-precio'>
                <h3>RANGO DE PRECIO</h3>
                <input onChange={PrecioRango} type="range" min={0} max={500000} />
                <p>${preciorango}</p>
            </div>

        </aside>
    )
}