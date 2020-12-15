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
const model = db.model("api", {
  name: { type: String, default: "wu" },
  age: { type: Number , default: 18},
  sex: { type: String , default: "男"},
});

// 四、创建实例操作（CURD）

// 增 --------------------------------
const insertObj = new model({
    name: "张三",
    age: 30,
    sex:"男"
});
//方法1：insertObj.save((err) => db.close())
//方法2（推荐）
insertObj
  .save()
    .then((res) => {
      console.log(res)
    return res;
  })
  .catch((err) => {
    console.log("插入失败" + err);
    return false;
  });

// 删 --------------------------------
//方法1：model.remove/deleteOne/deleteMany(条件对象, (err) => db.close())
//方法2（推荐）
// model
//   .deleteOne(条件对象)
//   .then((res) => {
//     return res.deletedCount;
//   })
//   .catch((err) => {
//     console.log("删除失败" + err);
//     return false;
//   });

// 改 --------------------------------
//方法1：model.update/updateOne/updateMany(条件对象, 数据对象, (err) => db.close())
//方法2（推荐）
// model
//   .updateOne(条件对象, 数据对象)
//   .then((res) => {
//     return res.nModified;
//   })
//   .catch((err) => {
//     console.log("修改失败" + err);
//     return false;
//   });

// 查 --------------------------------
//方法1：model.find/findOne(条件对象, 要显示的字段数据对象, (err, result) => db.close())
//方法2（推荐）
// model
//   .findOne(条件对象)
//   .then((res) => {
//     return res;
//   })
//   .catch((err) => {
//     console.log(err);
//     return false;
//   });
