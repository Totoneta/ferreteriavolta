import './footer.css'
import { Link } from 'react-router-dom'

export function Footer() {

    return (
        <footer className='footer'>
            <div className='nosotros'>
                <h4>CONTACTO</h4>
                <ol className='nosotros-list'>
                    <li className='nosotros-item'><img src='/img/logo-redes-sociales/logo-de-facebook.png' alt='Logo de Facebook' /><Link to='#'>Facebook</Link></li>
                    <li className='nosotros-item'><img src='/img/logo-redes-sociales/logo-de-whatsapp.png' alt='Logo de Whatsapp' /><Link to='#'>WhatsApp</Link></li>
                    <li className='nosotros-item'><img src='/img/logo-redes-sociales/logo-instagram.png' alt='Logo de Instagram'/><Link to='#'>Instagram</Link></li>
                </ol>
            </div>

            <picture className='logo-footer'>
                <img src='/img/logo-volta/Volta-pal-logo.png' alt='Logo Volta'/>
            </picture>

        </footer>
    )
}