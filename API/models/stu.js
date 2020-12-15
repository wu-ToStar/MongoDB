//一、导入模块
const mongoose = require("mongoose");
// 二、连接数据库
const db = mongoose.createConnection(
  "mongodb://localhost:27017/myapp",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log("---------------------------------------");
      console.log("数据库连接失败：", err);
      console.log("---------------------------------------");
      return;
    }
    console.log("数据库连接成功");
  }
);

// 三、设置数据模型（声明是哪个集合，限制字段个数和字段类型）
const model = db.model("stu", {
  name: { type: String, default: "wu" },
  age: { type: Number, default: 18 },
  sex: { type: String, default: "男" },
});

// 四、创建实例操作（CURD）

const createModel = (postData) => {
  const insertObj = new model(postData);
  return insertObj
    .save()
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {
      console.log("插入失败" + err);
      return false;
    });
};

const listModel = (skipnum,limitnum) => {
  return model
    .find().skip(skipnum).limit(limitnum)
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {  
      console.log("查询失败" + err);
      return [];
    });
};
module.exports = { createModel, listModel };
