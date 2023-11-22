import teacherModel from "../../model/teacher.js";

const TeacherController = {
  create: async (req, res) => {
    try {
      const { firstName, lastName, designation, university } = req.body;

      const teacher = await teacherModel.create({
        firstName,
        lastName,
        designation,
        university,
      });

      return res.status(201).json({
        message: "Teacher created",
        teacher,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Teacher not created",
      });
    }
  },

  getAll: async (req, res) => {
    const teachers = await teacherModel.findAll({
      where: {
        firstName: "Azhar1",
      },
    });
    res.json({
      teachers,
    });
  },
  getSingle: async (req, res) => {
    try {
      const { id } = req.params;
      const teacher = await teacherModel.findOne({
        where: {
          id,
        },
      });
      if (!teacher) {
        return res.status(404).json({
          message: "Teacher not found",
        });
      }

      res.json({
        teacher,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Teacher bad happened",
      });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const teacher = await teacherModel.findOne({
        where: {
          id,
        },
      });
      if (!teacher) {
        return res.status(404).json({
          message: "Teacher not found",
        });
      }

      await teacher.destroy();
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
      const { firstName, lastName, designation, university } = req.body;

      const teacher = await teacherModel.findOne({
        where: {
          id,
        },
      });
      if (!teacher) {
        return res.status(404).json({
          message: "Teacher not found",
        });
      }

      teacher.firstName = firstName;
      teacher.lastName = lastName;
      teacher.designation = designation;
      teacher.university = university;
      await teacher.save();

      res.json({
        message: "Teacher Updated",
        student,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Something bad happened",
      });
    }
  },
};

export default TeacherController;
