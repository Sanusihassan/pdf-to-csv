import { _howToSchema } from "./how-to";

export const howToSchema: _howToSchema = {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "How to Convert a PDF to CSV?",
    description: "Steps to convert a PDF file to CSV.",
    step: [
        {
            "@type": "HowToStep",
            name: "Step 1",
            text: "Open the PDF to CSV converter on PDFEquips."
        },
        {
            "@type": "HowToStep",
            name: "Step 2",
            text: "Drag and drop the PDF file or click the 'Select PDF Files' button to upload your PDF."
        },
        {
            "@type": "HowToStep",
            name: "Step 3",
            text: "Click the 'Download Converted CSV file' button to save the converted file to your device."
        }
    ]
};
