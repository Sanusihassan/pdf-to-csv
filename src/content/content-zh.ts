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
    title: "将PDF转换为CSV",
    seoTitle: "在线将PDF转换为CSV - 免费PDF到CSV转换器 | PDFEquips",
    description: "从PDF文件中提取数据并以CSV格式保存",
    type: ".pdf",
    to: "/pdf-to-csv",
    features: [
      {
        title: "精准转换",
        description: "PDFEquips 提供高度精准的 PDF 转换为 CSV 服务，确保您的数据在 CSV 格式中正确保留。"
      },
      {
        title: "快速处理",
        description: "我们的 PDF 转 CSV 转换器旨在快速处理文件，让您在几秒钟内获得转换后的 CSV。"
      },
      {
        title: "强大的功能",
        description: "该工具可以处理不同大小和复杂性的各种 PDF 文件，确保每次都能进行强大而可靠的转换。"
      }
    ]
  },
};

export const downloadFile = {
  titles: {
    "pdf-to-csv": ["PDF 文件已转换为 CSV！", "PDF 文件已转换为 CSV！"],
  },

  btnText: {
    "pdf-to-csv": ["下载转换后的 PDF 文件", "下载转换后的 PDF 文件"],
  },

  backto: {
    "pdf-to-csv": "返回到 PDF 到 CSV",
  },
};


export const edit_page: _edit_page = {
  edit_page_titles: {
    pdf_to_csv: "PDF 转 CSV 选项",
  },
  loader_text: "请稍等...",
  add_more_button: "添加更多文件",
  action_buttons: {
    pdf_to_csv: "转换为 CSV",
  },
  pages: "页",
  page: "页",
};

export const tools: _tools = {
  select: "选择",
  or_drop: "或将文件拖放到此处",
  files: "文件",
  drop_files: "在此处拖放文件",
};

export const footer: _footer = {
  brand: "PDFEquips",
  terms: "条款",
  conditions: "条件",
  privacy_policy: "隐私政策",
};

export const errors: _errors = {
  EMPTY_FILE: {
    message: "文件为空，请选择一个有效的文件。",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "文件太大。请选择一个更小的文件，或使用我们的压缩PDF工具来减小文件大小。",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  NOT_SUPPORTED_TYPE: {
    message: "文件不是受支持的类型。",
    types: {
      PDF: "请选择一个有效的PDF文件。",
      JPG: "请选择一个有效的JPEG图片文件。",
      DOC: "请选择一个有效的Word文档文件。",
      DOCX: "请选择一个有效的Word文档文件。",
      XLS: "请选择一个有效的Excel电子表格文件。",
      XLSX: "请选择一个有效的Excel电子表格文件。",
      PPT: "请选择一个有效的PowerPoint演示文稿文件。",
      PPTX: "请选择一个有效的PowerPoint演示文稿文件。",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message: "文件已损坏，无法处理。请选择一个有效的文件。",
    code: "ERR_FILE_CORRUPT",
  },
  MISSING_FONTS: {
    message: "文件缺少字体。请确保所有字体都嵌入在PDF文件中。",
    code: "ERR_MISSING_FONTS",
  },
  INVALID_IMAGE_DATA: {
    message: "文件包含无效的图像数据。请确保所有图像格式正确。",
    code: "ERR_INVALID_IMAGE_DATA",
  },
  SECURITY_RISK: {
    message: "文件存在安全风险，无法处理。请选择一个有效的文件。",
    code: "ERR_SECURITY_RISK",
  },
  MAX_FILES_EXCEEDED: {
    message: "您已超出允许的最大文件数。请删除一些文件并重试。",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message: "未选择任何文件。请选择至少一个文件。",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message: "发生未知错误。请稍后重试或联系支持人员。",
    code: "ERR_UNKNOWN",
  },
  ERR_NETWORK: {
    message: "网络错误，请检查您的互联网连接并重试。",
    code: "ERR_NETWORK",
  },
  ERR_UPLOAD_COUNT: {
    message: "请至少上传两个文件以合并。",
    code: "ERR_UPLOAD_COUNT",
  },
};
