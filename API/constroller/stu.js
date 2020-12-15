const { createModel, listModel } = require(process.cwd() + "/models/stu.js");

const create = async (req, res) => {
  let postData = req.body;
  let rs = await createModel(postData);
  if (rs) {
    res.send({
      meta: {
        state: 200,
        msg: "success",
      },
      data: rs,
    });
  } else {
    res.send({
      meta: {
        state: 500,
        msg: "Error",
      },
      data: null,
    });
  }
};

/**
 * @api {get} /stu 学生模块列表
 * @apiName getdata
 * @apiGroup stu
 *
 * @apiParam {Number} page(当前页),size(显示条数).
 *
 * @apiSuccess {String} mate 状态码，提示数据.
 * @apiSuccess {String} data 数据.
 */
const list = async (req, res) => {
  let getdata = req.query;
  let skip = (parseInt(getdata.page) - 1) * parseInt(getdata.size);
  let data = await listModel(skip, parseInt(getdata.size));

  res.send({
    meta: {
      state: 200,
      msg: "success",
    },
    data: data,
  });
};

module.exports = { create, list };
