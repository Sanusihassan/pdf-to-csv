import type {
  tool as _tool,
  web2pdftool as _web2pdftool,
  tools as _tools,
  edit_page as _edit_page,
  footer as _footer,
  errors as _errors,
  downloadFile as _downloadFile,
  landing_page as _landing_page,
} from "../../content";

export const tool: _tool = {
  PDF_to_CSV: {
    title: "PDF को CSV में बदलें",
    seoTitle:
      "ऑनलाइन PDF को CSV में बदलें - मुफ्त PDF से CSV परिवर्तक | PDFEquips",
    description: "PDF फाइलों से डेटा निकालें और CSV प्रारूप में सहेजें",
    type: ".pdf",
    to: "/pdf-to-csv",
    features: [
      {
        title: "सटीक रूपांतरण",
        description: "PDFEquips एक अत्यंत सटीक PDF से CSV रूपांतरण सेवा प्रदान करता है, यह सुनिश्चित करता है कि आपका डेटा CSV प्रारूप में सही तरीके से संरक्षित हो।"
      },
      {
        title: "तेज़ प्रसंस्करण",
        description: "हमारा PDF से CSV कनवर्टर फाइलों को तेजी से प्रोसेस करने के लिए डिज़ाइन किया गया है, जिससे आप कुछ ही सेकंड में अपने कनवर्ट किए गए CSV को प्राप्त कर सकते हैं।"
      },
      {
        title: "मजबूत कार्यक्षमता",
        description: "यह उपकरण विभिन्न आकारों और जटिलताओं की PDF फाइलों को संभालने के लिए बनाया गया है, जिससे हर बार मजबूत और विश्वसनीय रूपांतरण सुनिश्चित होता है।"
      }
    ]
  },
};

export const downloadFile = {
  titles: {
    "pdf-to-csv": [
      "PDF फ़ाइलें CSV में परिवर्तित की गई हैं!",
      "PDF फ़ाइल CSV में परिवर्तित की गई है!",
    ],
  },

  btnText: {
    "pdf-to-csv": [
      "परिवर्तित PDF फ़ाइलें डाउनलोड करें",
      "परिवर्तित PDF फ़ाइल डाउनलोड करें",
    ],
  },

  backto: {
    "pdf-to-csv": "PDF से CSV पर वापस जाएं",
  },
};

export const edit_page: _edit_page = {
  edit_page_titles: {
    pdf_to_csv: "PDF से CSV विकल्प",
  },
  loader_text: "कृपया प्रतीक्षा करें...",
  add_more_button: "अधिक फ़ाइलें जोड़ें",
  action_buttons: {
    pdf_to_csv: "CSV में बदलें",
  },

  pages: "पृष्ठों",
  page: "पृष्ठ",
};

export const tools: _tools = {
  select: "चुनें",
  or_drop: "या फ़ाइलें यहां छोड़ें",
  files: "फाइलें",
  drop_files: "फ़ाइलें यहाँ खींचें",
};

export const footer: _footer = {
  brand: "PDFEquips",
  terms: "शर्तें",
  conditions: "उपयोग की शर्तें",
  privacy_policy: "गोपनीयता नीति",
};

export const errors: _errors = {
  EMPTY_FILE: {
    message: "फ़ाइल खाली है। कृपया एक मान्य फ़ाइल चुनें।",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "फ़ाइल बहुत बड़ी है। कृपया एक छोटी फ़ाइल चुनें या हमारा कंप्रेस-पीडीएफ़ उपकरण उपयोग करके फ़ाइल का आकार कम करें।",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  NOT_SUPPORTED_TYPE: {
    message: "फ़ाइल एक समर्थित प्रकार नहीं है।",
    types: {
      PDF: "कृपया एक मान्य पीडीएफ़फ़ाइल चुनें।",
      JPG: "कृपया एक मान्य जेपेग छवि फ़ाइल चुनें।",
      DOC: "कृपया एक मान्य वर्ड दस्तावेज़ फ़ाइल चुनें।",
      DOCX: "कृपया एक मान्य वर्ड दस्तावेज़ फ़ाइल चुनें।",
      XLS: "कृपया एक मान्य एक्सेल स्प्रेडशीट फ़ाइल चुनें।",
      XLSX: "कृपया एक मान्य एक्सेल स्प्रेडशीट फ़ाइल चुनें।",
      PPT: "कृपया एक मान्यपावरपॉइंट प्रस्तुति फ़ाइल चुनें।",
      PPTX: "कृपया एक मान्य पावरपॉइंट प्रस्तुति फ़ाइल चुनें।",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message:
      "फ़ाइल का डाटा भ्रष्ट है और इसे प्रसंस्करण नहीं किया जा सकता है। कृपया एक मान्य फ़ाइल चुनें।",
    code: "ERR_FILE_CORRUPT",
  },
  MISSING_FONTS: {
    message:
      "फ़ाइल में फ़ॉन्ट गुम हैं। कृपया सुनिश्चित करें कि पीडीएफफ़ाइल में सभी फ़ॉन्ट एम्बेड हैं।",
    code: "ERR_MISSING_FONTS",
  },
  INVALID_IMAGE_DATA: {
    message:
      "फ़ाइल में अवैध छवि डेटा है। कृपया सुनिश्चित करें कि सभी छवियाँ सही ढंग से फ़ॉर्मेटेड हैं।",
    code: "ERR_INVALID_IMAGE_DATA",
  },
  SECURITY_RISK: {
    message:
      "फ़ाइल में सुरक्षा जोखिम हो सकता है और इसे प्रसंस्करण नहीं किया जा सकता है। कृपया एक मान्य फ़ाइल चुनें।",
    code: "ERR_SECURITY_RISK",
  },
  MAX_FILES_EXCEEDED: {
    message:
      "आपने अनुमति दी हुई अधिकतम फ़ाइलों की संख्या पार कर दी है। कृपया कुछ फ़ाइलें हटाएं और पुनः प्रयास करें।",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message: "कोई फ़ाइल चयनित नहीं की गई है। कृपया कम से कम एक फ़ाइल चुनें।",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message:
      "एक अज्ञात त्रुटि हुई है। कृपया बाद में पुनः प्रयास करें या सहायता से संपर्क करें।",
    code: "ERR_UNKNOWN",
  },
  ERR_NETWORK: {
    message:
      "नेटवर्क में त्रुटि हो गई है। कृपया अपना इंटरनेट कनेक्शन जांचें और पुनः प्रयास करें।",
    code: "ERR_NETWORK",
  },

  ERR_UPLOAD_COUNT: {
    message: "कृपया फ्यूजन करने के लिए कम से कम दो फ़ाइलें अपलोड करें।",
    code: "ERR_UPLOAD_COUNT",
  },
};
