import productModel from "../model/product.js";
import studentModel from "../model/student.js";
import teacherModel from "../model/teacher.js";

const dbInit = async () => {
  await studentModel.sync({
    alert: true,
    force: false,
  });
  await teacherModel.sync({
    alert: true,
    force: false,
  });
  await productModel.sync({
    alert: true,
    force: false,
  });
};

export default dbInit;
