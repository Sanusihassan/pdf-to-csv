import { _howToSchema } from "./how-to";

export const howToSchema: _howToSchema = {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "Comment convertir un PDF en CSV ?",
    description: "Étapes pour convertir un fichier PDF en CSV.",
    step: [
        {
            "@type": "HowToStep",
            name: "Étape 1",
            text: "Ouvrez le convertisseur PDF en CSV sur PDFEquips."
        },
        {
            "@type": "HowToStep",
            name: "Étape 2",
            text: "Faites glisser et déposez le fichier PDF ou cliquez sur le bouton 'Sélectionner les fichiers PDF' pour télécharger votre PDF."
        },
        {
            "@type": "HowToStep",
            name: "Étape 3",
            text: "Cliquez sur le bouton 'Télécharger le fichier CSV converti' pour enregistrer le fichier converti sur votre appareil."
        }
    ]
};
