import express from "express";
import adminRoutes from "./routes/adminRoutes.js";
import carRoutes from "./routes/carRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import employeeRoutes from "./routes/employeeRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
import stringRoutes from "./routes/stringRoutes.js";
const app = express();
app.use(express.json());
// Роуты
app.use("/api/admin", adminRoutes);
app.use("/api/car", carRoutes);
app.use("/api/product", productRoutes);
app.use("/api/employee", employeeRoutes);
app.use("/api/student", studentRoutes);
app.use("/api/string", stringRoutes);
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map