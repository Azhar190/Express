import studentModel from "../../model/student.js";

const StudentController = {
  create: async (req, res) => {
    try {
      const { firstName, lastName, Email, Contact } = req.body;

      // const student = new studentModel();
      // student.firstName = firstName;
      // student.lastName = lastName;
      // student.Email = Email;
      // student.Contact = Contact;
      // await student.save();

      const student = await studentModel.create({
        firstName,
        lastName,
        Email,
        Contact,
      });

      return res.status(201).json({
        message: "Student created",
        student,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Student not created",
      });
    }
  },

  getAll: async (req, res) => {
    const students = await studentModel.findAll({
      where: {
        firstName: "Azhar1",
      },
    });
    res.json({
      students,
    });
  },
  getSingle: async (req, res) => {
    try {
      const { id } = req.params;
      const student = await studentModel.findOne({
        where: {
          id,
        },
      });
      if (!student) {
        return res.status(404).json({
          message: "Student not found",
        });
      }

      res.json({
        student,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Something bad happened",
      });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const student = await studentModel.findOne({
        where: {
          id,
        },
      });
      if (!student) {
        return res.status(404).json({
          message: "Student not found",
        });
      }

      await student.destroy();
      res.json({
        message: "Student deleted successfully",
      });
    } catch (error) {
      return res.status(500).json({
        message: "Something bad happened",
      });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { firstName, lastName, Email, Contact } = req.body;

      const student = await studentModel.findOne({
        where: {
          id,
        },
      });
      if (!student) {
        return res.status(404).json({
          message: "Student not found",
        });
      }

      student.firstName = firstName;
      student.lastName = lastName;
      student.Email = Email;
      student.Contact = Contact;
      await student.save();

      res.json({
        message: "Student Updated",
        student,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Something bad happened",
      });
    }
  },
};

export default StudentController;
