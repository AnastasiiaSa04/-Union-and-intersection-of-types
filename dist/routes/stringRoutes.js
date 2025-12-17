const router = Router();
router.post("/concat", (req, res) => {
    const { str1, str2 } = req.body;
    if (typeof str1 !== "string" || typeof str2 !== "string") {
        return res.status(400).send("Both str1 and str2 must be strings");
    }
    res.json({ result: concatStrings(str1, str2) });
});
export default router;
//# sourceMappingURL=stringRoutes.js.map