import express from "express";
import {
  createStudent,
  getAllStudents,
  getStudentByRegNo,
  updateStudent,
  deleteStudent,
} from "../controllers/studentController.js";

const router = express.Router();

router.post("/students", createStudent);
router.get("/students", getAllStudents);
router.get("/students/:regNo", getStudentByRegNo);
router.put("/students/:regNo", updateStudent);
router.delete("/students/:regNo", deleteStudent);

export default router;
