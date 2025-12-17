export type Engine = {
    type: string;
    horsepower: number;
};
export type Car = {
    make: string;
    model: string;
    engine: Engine;
    year?: number;
};
export declare const myCar: Car;
export declare function printCarInfo(car: Car): void;
//# sourceMappingURL=carController.d.ts.map