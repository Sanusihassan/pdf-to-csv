import { _howToSchema } from "./how-to";

export const howToSchema: _howToSchema = {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "如何将PDF转换为CSV？",
    description: "将PDF文件转换为CSV的步骤。",
    step: [
        {
            "@type": "HowToStep",
            name: "步骤 1",
            text: "打开PDFEquips上的PDF到CSV转换器。"
        },
        {
            "@type": "HowToStep",
            name: "步骤 2",
            text: "拖放PDF文件或点击'选择PDF文件'按钮上传您的PDF。"
        },
        {
            "@type": "HowToStep",
            name: "步骤 3",
            text: "点击'下载转换后的CSV文件'按钮，将转换后的文件保存到您的设备。"
        }
    ]
};
