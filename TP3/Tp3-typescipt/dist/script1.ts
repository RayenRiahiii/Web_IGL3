/* Exercice 1 */
// hello.ts
console.log("Hello TypeScript!");

/* Exercice 2 */
// 1.
let name: string = "Alice";
let age: number = 30;
let isAdmin: boolean = true;

// 2.
let scores: number[] = [10, 20, 30];

// 3.
let student: [string, number] = ["Bob", 22];

// 4.
enum Role { User, Admin, SuperAdmin }
let myRole: Role = Role.Admin;

/* Exercice 3 */
// 1.
let id: number | string = "abc123";

// 2.
type A = { a: number };
type B = { b: string };
type AB = A & B;
let ab: AB = { a: 1, b: "test" };

// 3.
type Status = "pending" | "done" | "canceled";
let status: Status = "pending";

// 4.
let unknownValue: unknown = "hello";
if (typeof unknownValue === "string") {
    let len = (unknownValue as string).length;
    console.log(len);
}

/* Exercice 4 */
// 1.
interface User {
    id: number;
    name: string;
    email?: string;
    readonly isAdmin: boolean;
}

// 2.
const user1: User = {
    id: 1,
    name: "Alice",
    isAdmin: true
};

// 3.
interface Admin extends User {
    permissions: string[];
}

/* Exercice 5 */
// 1.
function add(a: number, b: number): number {
    return a + b;
}

// 2.
function greet(name: string, age?: number): void {
    if (age !== undefined) {
        console.log(`Hello ${name}, you are ${age} years old.`);
    } else {
        console.log(`Hello ${name}!`);
    }
}

// 3.
function power(base: number, exp: number = 2): number {
    return Math.pow(base, exp);
}

// 4.
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: any, b: any): any {
    return a + b;
}

/* Exercice 6 */
// 1.
class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    }
}

// 2.
class Student extends Person {
    school: string;
    constructor(name: string, age: number, school: string) {
        super(name, age);
        this.school = school;
    }
}

// 3.
abstract class Shape {
    abstract area(): number;
}

class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
        super();
        this.radius = radius;
    }
    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    width: number;
    height: number;
    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }
    area(): number {
        return this.width * this.height;
    }
}

// 4.
interface Drivable {
    drive(): void;
}

class Car implements Drivable {
    drive() {
        console.log("Driving...");
    }
}

/* Exercice 7 */
// 1.
function identity<T>(value: T): T {
    return value;
}

// 2.
function getFirst<T>(arr: T[]): T {
    return arr[0];
}

// 3.
class Repository<T> {
    private items: T[] = [];
    add(item: T): void {
        this.items.push(item);
    }
    remove(item: T): void {
        this.items = this.items.filter(i => i !== item);
    }
    getAll(): T[] {
        return this.items;
    }
}

// 4.
interface ApiResponse<T> {
    data: T;
    error?: string;
}