export default {
  "entity": {
    "id": "9770849d-cf89-452f-b0a5-51dec6557209",
    "name": "周总理的讲话",
    "internal": false,
    "type": "imgs",
    "official": false,
    "author": "周恩来",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives22/main/9770849d-cf89-452f-b0a5-51dec6557209/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives22/main/9770849d-cf89-452f-b0a5-51dec6557209/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives22/main/9770849d-cf89-452f-b0a5-51dec6557209/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives22/main/9770849d-cf89-452f-b0a5-51dec6557209/4.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "周总理的讲话",
        "authors": [
          "周恩来"
        ],
        "page_start": 1,
        "page_end": 4,
        "ocr": {
          "use_onnx": true,
          "det_model_dir": "./paddle/onnx/ch_PP-OCRv4_det_infer.onnx",
          "rec_model_dir": "./paddle/onnx/ch_PP-OCRv4_rec_infer.onnx"
        },
        "dates": [
          {
            "year": 1966,
            "month": 10,
            "day": 18
          }
        ]
      }
    ],
    "ocr": {
      "use_onnx": true,
      "det_model_dir": "./paddle/onnx/ch_PP-OCRv4_det_infer.onnx",
      "rec_model_dir": "./paddle/onnx/ch_PP-OCRv4_rec_infer.onnx"
    }
  },
  "parser_id": "automation",
  "path": "9770849d-cf89-452f-b0a5-51dec6557209",
  "resource_type": "book",
  "version": 2
}