define({ "api": [
  {
    "type": "get",
    "url": "/stu",
    "title": "学生模块列表",
    "name": "getdata",
    "group": "stu",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>(当前页),size(显示条数).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mate",
            "description": "<p>状态码，提示数据.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>数据.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "constroller/stu.js",
    "groupTitle": "stu"
  }
] });
