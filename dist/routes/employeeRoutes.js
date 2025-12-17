const router = Router();
router.get("/", (req, res) => {
    res.json(employees);
});
router.get("/salaries", (req, res) => {
    res.json(getSalaries(employees));
});
export default router;
//# sourceMappingURL=employeeRoutes.js.map