import { _howToSchema } from "./how-to";

export const howToSchema: _howToSchema = {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "PDF को CSV में कैसे बदलें?",
    description: "PDF फाइल को CSV में बदलने के कदम।",
    step: [
        {
            "@type": "HowToStep",
            name: "चरण 1",
            text: "PDFEquips पर PDF को CSV में बदलने वाला कनवर्टर खोलें।"
        },
        {
            "@type": "HowToStep",
            name: "चरण 2",
            text: "PDF फाइल को खींचें और छोड़ें या 'PDF फाइलें चुनें' बटन पर क्लिक करें और अपनी PDF अपलोड करें।"
        },
        {
            "@type": "HowToStep",
            name: "चरण 3",
            text: "कनवर्ट की गई फाइल को अपने डिवाइस पर सहेजने के लिए 'कनवर्ट की गई CSV फाइल डाउनलोड करें' बटन पर क्लिक करें।"
        }
    ]
};
