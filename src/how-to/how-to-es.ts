import { _howToSchema } from "./how-to";

export const howToSchema: _howToSchema = {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "¿Cómo convertir un PDF a CSV?",
    description: "Pasos para convertir un archivo PDF a CSV.",
    step: [
        {
            "@type": "HowToStep",
            name: "Paso 1",
            text: "Abre el convertidor de PDF a CSV en PDFEquips."
        },
        {
            "@type": "HowToStep",
            name: "Paso 2",
            text: "Arrastra y suelta el archivo PDF o haz clic en el botón 'Seleccionar archivos PDF' para subir tu PDF."
        },
        {
            "@type": "HowToStep",
            name: "Paso 3",
            text: "Haz clic en el botón 'Descargar archivo CSV convertido' para guardar el archivo convertido en tu dispositivo."
        }
    ]
};
