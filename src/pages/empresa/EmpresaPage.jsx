import { Aside } from '../../components/empresa/aside/aside'
import { SobreNosotros } from '../../components/empresa/sobre-nos/sobre-nos'
import './EmpresaPage.css'

export function EmpresaPage (){


    return(
        <section className='empresa-container'>
            <SobreNosotros />
            <Aside />
        </section>
    )
}