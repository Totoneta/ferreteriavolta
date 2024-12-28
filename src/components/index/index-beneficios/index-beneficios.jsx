import './index-beneficios.css'

export function IndexBeneficios() {

    return (
        <section className='servicios-container'>

            <div className='servicios-item'>
                <img src='/svg/casco-construccion.svg' alt='Elemento de Ferretería' />
                <h3>SEGURIDAD</h3>
                <p>Proveemos productos de ferretería e iluminación con los más altos estándares de seguridad.</p>
            </div>

            <div className='servicios-item'>
                <img src='/svg/escudo-mas.svg' alt='Escudo de seguridad' />
                <h3>COMPROMISO</h3>
                <p>Nos comprometemos a brindar un servicio excepcional y personalizado siempre.</p>
            </div>

            <div className='servicios-item'>
                <img src='/svg/foco-luz.svg' alt='Foco de luz' />
                <h3>EFECTIVIDAD</h3>
                <p>Ofrecemos soluciones efectivas para optimizar tus procesos de compra y ahorrar tiempo.</p>
            </div>

        </section>
    )
}