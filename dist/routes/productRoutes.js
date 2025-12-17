const router = Router();
router.post("/discount", (req, res) => {
    const { name, price, discount } = req.body;
    if (typeof name !== "string" || typeof price !== "number" || typeof discount !== "number") {
        return res.status(400).send("Invalid data");
    }
    const newPrice = calculateDiscount({ name, price }, discount);
    res.json({ name, originalPrice: price, discount, newPrice });
});
export default router;
//# sourceMappingURL=productRoutes.js.map