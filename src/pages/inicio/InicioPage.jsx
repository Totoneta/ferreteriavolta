import { IndexCategorias } from "../../components/index/index-categorias/index-categorias";
import { IndexBeneficios } from "../../components/index/index-beneficios/index-beneficios";
import { IndexStart } from "../../components/index/index-start/index-start";

export function InicioPage() {

    return (
        <>
            <IndexStart img={'/img/logo-volta/Volta-pal-logo.png'} descripcion={'SOMOS UNA EMPRESA DEDICADA A LA VENTA DE ARTÍCULOS DE ILUMINACION Y FERRETERÍA.'} />
            <IndexCategorias />
            <IndexBeneficios />
        </>
    )
}