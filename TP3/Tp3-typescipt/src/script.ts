//ex2
let name:string;
let age:number;
let isAdmin:boolean;

let scores:number[];
let etudiant:[nom:string,age:number]
enum Role{
    user="User",
    admin="Admin",
    superAdmin="SuperAdmin"
}
//ex3

let id:(number|string);
type A=string |number;
type B=boolean |number[];
type C=A & B;

type status="pending" |"done" |"canceled"

let x:unknown;
if ((typeof x )=="string"){
    console.log((x as string).length);

}

//ex4
interface user{
    id:number;
    name:string;
    email?:string;
    readonly  isAdmin:boolean;
}
let user1:user={
    id:1,
    name:"jack",
    email:"jack@gmail.com",
    isAdmin:false,
}
interface Admin  extends user{
    permissions:string;
}
let admin1:Admin={
    id:2,
    name:"Rayen",
    isAdmin:true,
    permissions:"unlimited"
}
//ex5
function add(a:number,b:number):number{
    return a+b}

//fonction fleché
const addF =(a:number,b:number) =>a+b;

function greet(name:string,age?:number){
    if (typeof age == "number"){
        console.log("merci pour indiquer votre age ${age}"+ name)

    }
    else{
        console.log(name);
    }
}
//

const power =(base:number,exp:number=2)=>base**exp

function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: any, b: any): any {
    return a + b;
}
//ex6
class Person{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
    greet(){
        console.log('helloooo' + this.name);

}}

class Student extends Person{
    school:string;
    constructor (name:string,age:number,school:string){
        super(name,age),
        this.school=school;
    }
}
abstract class Shape{
    abstract area():number;
}

class Circle extends Shape{
    rayon:number;
    constructor(rayon:number){
        super();
        this.rayon=rayon;
    }
    area():number{
        let a:number =Math.PI*this.rayon
        return a
    }

}
class Rectangle extends Shape{
    height:number;
    width:number;
    constructor(height:number,width:number){
        super();
        this.height=height;
        this.width=width;
    }
    area(){
        return this.height*this.width
    }
}

interface Drivable{
    drive():void;

}
class Car implements Drivable{
    drive(){
        console.log("classe Car impliments Drivable")
    }
}
//ex7  Generiques

function identity<T>(value: T):T{
    return value;
}
function getFirst<T>(arr: T[]):T | undefined{
    return arr[0];
}
class Repository<T>{
    repo:T[]=[];
    add(a:T):void{
        this.repo.push(a);
    }
    remove(a:T):void{
        this.repo=this.repo.filter(e=>e != a);
    }
    getAll():T[]{
        return this.repo;
    }
} 
//4. Crée une interface générique ApiResponse<T> avec les propriétés data: T et error?: string.
interface ApiResponse<T> { 
    data: T,
    error?: string
};

