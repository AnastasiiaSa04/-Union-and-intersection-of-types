import { student, printStudentInfo } from "../controllers/studentController.ts";
const router = express.Router();
router.get("/", (req, res) => {
    res.json(student);
});
router.get("/info", (req, res) => {
    printStudentInfo(student);
    res.send("Student info printed to console");
});
export default router;
//# sourceMappingURL=studentRoutes.js.map