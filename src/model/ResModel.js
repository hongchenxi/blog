/**
 * @description res 数据模型
 * @author ifxi
 */

class BaseModel {
  constructor({ code, msg, data }) {
    this.code = code
    if (data) {
      this.data = data
    }
    if (msg) {
      this.msg = msg
    }
  }
}

class SuccessModel extends BaseModel {
  constructor(data = {}) {
    super({ code: 0, data })
  }
}

class ErrorModel extends BaseModel {
  constructor({ code, msg }) {
    super({ code, msg })
  }
}

module.exports = {
  SuccessModel,
  ErrorModel,
}
