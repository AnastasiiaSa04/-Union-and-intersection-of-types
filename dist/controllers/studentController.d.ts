export interface Person {
    firstName: string;
    lastName: string;
}
export interface Student extends Person {
    grade: number;
}
export declare const student: Student;
export declare function printStudentInfo(s: Student): void;
//# sourceMappingURL=studentController.d.ts.map