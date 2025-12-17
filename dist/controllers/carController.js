export const myCar = {
    make: "Toyota",
    model: "Corolla",
    engine: { type: "V6", horsepower: 300 },
    year: 2021
};
export function printCarInfo(car) {
    console.log(`Car: ${car.make} ${car.model}`);
    console.log(`Engine: ${car.engine.type}, ${car.engine.horsepower} HP`);
    if (car.year)
        console.log(`Year: ${car.year}`);
}
//# sourceMappingURL=carController.js.map