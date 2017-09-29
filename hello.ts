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


