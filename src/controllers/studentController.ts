export interface Person { firstName: string; lastName: string }
export interface Student extends Person { grade: number }

export const student: Student = {
  firstName: "Alex",
  lastName: "Xander",
  grade: 90
};

export function printStudentInfo(s: Student): void {
  console.log(`Student: ${s.firstName} ${s.lastName}, Grade: ${s.grade}`);
}
