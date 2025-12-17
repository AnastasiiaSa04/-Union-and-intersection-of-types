export type Engine = { type: string; horsepower: number };
export type Car = { make: string; model: string; engine: Engine; year?: number };

export const myCar: Car = {
  
  make: "Mazda",
  model: "CX-5",
  engine: { type: "V8", horsepower: 300 },
  year: 2023
};

export function printCarInfo(car: Car): void {
  console.log(`Car: ${car.make} ${car.model}`);
  console.log(`Engine: ${car.engine.type}, ${car.engine.horsepower} HP`);
  if (car.year) console.log(`Year: ${car.year}`);


}
