/**
 * Created by iMacbook on 2017/9/29.
 */
var name = `hello world`;

var getName = function () {
    return "hello world"
}

console.log(`hell ${name}`);
console.log(`hell ${getName()}`);

console.log(`<div>
<span>${name}</span>
<span>${getName}</span>
<div>xxx</div>
</div>`);

function test(temp, name, age) {
    console.log(temp);
    console.log(name);
    console.log(age);
}
var name = 'macbook';
var getAge = function () {
    return 18;
}

test(`my name is ${name}, i am ${getAge()}`);
//参数类型：冒号来指定参数类型
var myname:string = 'hello';
var alias = 'xixi';
alias = 13;   //error

var ali:any = 'haha';
ali = 12;

var age:number = 13;

var man:boolean = true;

function text():void {
    return "";    //不需要任何返回值  error
}

function text(name:string):string {
    return "";
}
text(12);//error
text("");


//自定义类型
class Person {
    name:string;
    age:number;
}

var zhangsan:Person = new Person();
zhangsan.age = 12;
zhangsan.name = 'zhangsan';

//默认参数：在参数声明后面用等号来指定参数的默认值
var name:string = 'zhang san';

function test(a:string, b:string, c:string) {
    console.log(a);
    console.log(b);
    console.log(c);

}
test('xxx', 'yyy', 'zzz');


function test(a:string, b:string, c:string = 'jj') {
    console.log(a);
    console.log(b);
    console.log(c);

}
test('xxx', 'yyy');

//可选参数：在方法的参数声明后面用问号来表明此参数为可选参数

function test(a:string, b?:string, c:string = 'jj') {
    console.log(a);
    console.log(b);
    console.log(c);

}
test('xxx');

//rest and spread操作符：用来声明任何数量的方法参数
function fun1(...args){
    args.forEach(function (arg) {
        console.log(arg)
    })
}

fun1(1,2,4);
fun1(6,7,8,9,5);

function func1(a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);
}
var args = [1,2];
func1(...args);

var args2 = [7,8,9,2,12];
func1(...args2);
//1
//2
//undefined
//7
//8
//9
//undefined



//generator函数，控制函数的执行过程，手工暂停和恢复代码执行  --babel
/*
function* do(){
    console.log('star');
    yield;
    console.log('finish');
}
var func1 = do();
func1.next();
func1.next();
    */


function* getStock(stock){
    while(true){
        yield Math.random()*100;
    }
}
var priceGenerator = getStock('IBM');
var limitPrice = 15;
var price = 100;
while(price>limitPrice){
    price = priceGenerator.next().value;
    console.log(`the generator return ${price}`);
}
console.log(`buying at ${price}`);

//destructuring析构表达式：通过表达式将对象或数组拆解成任意数量的变量

function getstock(){
    return{
        code:'IBM',
        price:100
    }
}
var {code,price} = getstock();
console.log(code);
console.log(price);


function getstock(){
    return {
        code:'IBM',
        price:100
    }
}
var {code:codex,price} = getstock();

function getstock(){
    return{
        code:'IBM',
        price:{
            price1:200,
            price2:100
        },
    }
}

var {code,price} = getstock();


function getstock(){
    return{
        code:'IBM',
        price:{
            price1:100,
            price2:300
        },
        aaa:'xixixi',
        bbb:'hahaha'
    }
}
var {code,price:{price2}} = getstock();
console.log(code);
console.log(price2);

var array1 = [1,2,3,4];
var [ , , number1,number2] = array1;
console.log(number1);
console.log(number2);//3,4


var array1 = [1,2,3,4];
var [number1,number2, , ,] = array1;
console.log(number1);
console.log(number2);//1,2

var array1 = [1,2,3,4];
var [number1,number2,...others] = array1;
console.log(number1);
console.log(number2);
console.log(others);
/*
1
2
(2) [3, 4]
*/

var array1 = [1,2,3,4];
function doSome([number1,number2,...others]){
    console.log(number1);
    console.log(number2);
    console.log(others);
}
doSome(array1);

//箭头表达式：用来声明匿名函数，消除传统匿名函数的this指针问题
var sum = (arg1,arg2) => arg1+arg2;

var myArray = [1,2,3,4,5];
console.log(myArray.filter(value => value%2 == 0));


function getStock(name:string){
    this.name = name;
    setInterval(function () {
        console.log('name is :' + this.name);
    },1000)
}
var stock = new getstock('IBM');//error



function getStock2(name:string){
    this.name = name;
    setInterval(() =>{
        console.log('name is :' + this.name);
    },1000)
}
var stock = new getStock2('IBM');

//forEach(),for in,for of
var myArray = [1,2,3,4];
myArray.desc = 'four number';

myArray.forEach(value =>console.log(value));//1,2,3,4 forEach()忽略属性，不能break，

for(var n in myArray){//属性名字，键值对的键的名字，下标，
    console.log(n);
}//0,1,2,3,desc

for(var n in myArray){
    console.log(myArray[n])//1,2,3,4 值
}

for(var n of myArray){
    if(n >2) break;
    console.log(n);
}//1,2

//如果用在字符串上，就会把字符串的每一个值打出来
for(var n of 'four munber'){
    console.log(n)
}

//类class，typescript的核心，大部分代码都是写在类里面的
class person{
    constructor(){console.log('haha')}
    public name;        //属性
    public eat(){    //方法
    console.log('im eating');
    }
}
var p1 = new person();//实例化
p1.name = 'lee';
p1.eat();

var p2 = new person();
p2.name = 'join';
p2.eat();

//访问控制符：private，public，protected

//类的构造函数 costructor，实例化的时候调用一次

class person{
    constructor(name:string){
        this.name = name;
    }
    name;
    eat(){
        console.log(this.name)
    }
}
var p1 = new person('lee');
p1.eat();
var p2 = new person('jion');
p2.eat();

class person{
    constructor(public name:string){

    }
    eat(){
        console.log(this.name);
    }
}
var p1 = new person('lee');
p1.eat();
var p2 = new person('join');
p2.eat();

//类的继承，extends，super
class person{
    constructor(public name:string){

    }
    eat(){
        console.log(this.name);
    }
}
class jack extends person{
    code:string;
    work(){

    }
}
var e1 = new jack('rose')
var p1 = new person('lee');
p1.eat();
var p2 = new person('join');
p2.eat();

class person{
    constructor(public name:string){
    console.log('haha')
    }
    eat(){
        console.log('i am eating');
    }
}
class Employee extends person{
   constructor(name:string,code:string){
       super(name);  //必须引入父元素
       console.log('xixi');
       this.code = code;
   }
    code:string;
    work(){
        super.eat();
        this.dowork();
    }
    dowork(){
        console.log('i am working')
    }
}
var e1 = new Employee('rose','1')
e1.work();
/*
 haha
 xixi
 i am eating
 i am working
 */

//泛型：参数化的类型，一般用来限制集合的内容
class person{
    constructor(public name:string){
        console.log('haha')
    }
    eat(){
        console.log('i am eating');
    }
}
class Employee extends person{
    constructor(name:string,code:string){
        super(name);  //必须引入父元素
        console.log('xixi');
        this.code = code;
    }
    code:string;
    work(){
        super.eat();
        this.dowork();
    }
    dowork(){
        console.log('i am working')
    }
}
var works: Array<person> = [];//<person>数组的泛型，规定了数组里只能放person
works[0] = new person('zhang yang');
works[1] = new Employee('zhang','2');

var e1 = new Employee('rose','1')
e1.work();

//接口interface：用来建立某种代码约定，使得其他开发者在调用某个方法或创建新的类时必须遵循接口所定义的代码约定
interface IPerson{
    name: string;
    age: number;
}
class person{
    constructor(public config: IPerson) {

    }
}
var p1 = new person({
    name: 'zhangsan',
    age:18
})



interface Animal{
    eat();
}
class Sheep implements Animal{
    eat() {
        console.log('i eat gress')
    }
}
class Tiger implements Animal{
    eat() {
        console.log('i an meat')
    }
}
//模块：可以帮助开发者将代码分割为可重用的单元，开发者可以自己决定将模块中的哪个资源（类，方法，变量）暴露出去供外部使用，哪些资源只在模块内使用
//一个文件就是一个模块，两个关键字，export，import
//第一个模块
export var prop1;//对外暴露

var prop2;//不对外暴露

export function func1(){

}

function func2(){

}

export  class calzz1{

}

class clazz2{

}

//第二个模块
console.log(prop1);
func1();

new clazz2();

//一个模块既可以对外暴露他的属性方法和类，也可以export别人的属性方法和类

//注解annotation：为程序的元素（类，方法，变量）加上更直观更明了的说明，这些说明信息与程序的业务逻辑无关，而是供指定的工具或框架使用

//类型定义文件（*.d.ts）用来定义文件来帮助开发者在typescript中使用已有的js的工具包，eg：jquery

工具：github.com/typings/typings