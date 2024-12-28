import './index-start.css'

export function IndexStart({img, descripcion}) {

    return (
        <section className='index-start'>
            <picture className="logo-index-container">
                <img src="/img/index-start/index-start.jpg" alt='Fondo Inicio' />
            </picture>
            <div className='is-text'>
                <img src={img} alt='Logo Volta' /> 
                <p>{descripcion}</p>
            </div>
        </section>
    )
} 