export interface Employee { name: string; salary: number }

export const employees: Employee[] = [
  { name: "Anastasiia", salary: 3000 },
  { name: "Max", salary: 3500 },
  { name: "Filior", salary: 2800 }
];

export function getSalaries(empArray: Employee[]): number[] {
  return empArray.map(emp => emp.salary);
}
