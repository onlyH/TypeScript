var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by iMacbook on 2017/9/29.
 */
var name = "hello world";
var getName = function () {
    return "hello world";
};
console.log("hell " + name);
console.log("hell " + getName());
console.log("<div>\n<span>" + name + "</span>\n<span>" + getName + "</span>\n<div>xxx</div>\n</div>");
function test(temp, name, age) {
    console.log(temp);
    console.log(name);
    console.log(age);
}
var name = 'macbook';
var getAge = function () {
    return 18;
};
test("my name is " + name + ", i am " + getAge());
//参数类型：冒号来指定参数类型
var myname = 'hello';
var alias = 'xixi';
alias = 13; //error
var ali = 'haha';
ali = 12;
var age = 13;
var man = true;
function text() {
    return ""; //不需要任何返回值  error
}
function text(name) {
    return "";
}
text(12); //error
text("");
//自定义类型
var Person = (function () {
    function Person() {
    }
    return Person;
})();
var zhangsan = new Person();
zhangsan.age = 12;
zhangsan.name = 'zhangsan';
//默认参数：在参数声明后面用等号来指定参数的默认值
var name = 'zhang san';
function test(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
test('xxx', 'yyy', 'zzz');
function test(a, b, c) {
    if (c === void 0) { c = 'jj'; }
    console.log(a);
    console.log(b);
    console.log(c);
}
test('xxx', 'yyy');
//可选参数：在方法的参数声明后面用问号来表明此参数为可选参数
function test(a, b, c) {
    if (c === void 0) { c = 'jj'; }
    console.log(a);
    console.log(b);
    console.log(c);
}
test('xxx');
//rest and spread操作符：用来声明任何数量的方法参数
function fun1() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    args.forEach(function (arg) {
        console.log(arg);
    });
}
fun1(1, 2, 4);
fun1(6, 7, 8, 9, 5);
function func1(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
var args = [1, 2];
func1.apply(void 0, args);
var args2 = [7, 8, 9, 2, 12];
func1.apply(void 0, args2);
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
function getStock(stock) {
    while (true) {
        yield Math.random() * 100;
    }
}
var priceGenerator = getStock('IBM');
var limitPrice = 15;
var price = 100;
while (price > limitPrice) {
    price = priceGenerator.next().value;
    console.log("the generator return " + price);
}
console.log("buying at " + price);
//destructuring析构表达式：通过表达式将对象或数组拆解成任意数量的变量
function getstock() {
    return {
        code: 'IBM',
        price: 100
    };
}
var _a = getstock(), code = _a.code, price = _a.price;
console.log(code);
console.log(price);
function getstock() {
    return {
        code: 'IBM',
        price: 100
    };
}
var _b = getstock(), codex = _b.code, price = _b.price;
function getstock() {
    return {
        code: 'IBM',
        price: {
            price1: 200,
            price2: 100
        }
    };
}
var _c = getstock(), code = _c.code, price = _c.price;
function getstock() {
    return {
        code: 'IBM',
        price: {
            price1: 100,
            price2: 300
        },
        aaa: 'xixixi',
        bbb: 'hahaha'
    };
}
var _d = getstock(), code = _d.code, price2 = _d.price.price2;
console.log(code);
console.log(price2);
var array1 = [1, 2, 3, 4];
var number1 = array1[2], number2 = array1[3];
console.log(number1);
console.log(number2); //3,4
var array1 = [1, 2, 3, 4];
var number1 = array1[0], number2 = array1[1];
console.log(number1);
console.log(number2); //1,2
var array1 = [1, 2, 3, 4];
var number1 = array1[0], number2 = array1[1], others = array1.slice(2);
console.log(number1);
console.log(number2);
console.log(others);
/*
1
2
(2) [3, 4]
*/
var array1 = [1, 2, 3, 4];
function doSome(_a) {
    var number1 = _a[0], number2 = _a[1], others = _a.slice(2);
    console.log(number1);
    console.log(number2);
    console.log(others);
}
doSome(array1);
//箭头表达式：用来声明匿名函数，消除传统匿名函数的this指针问题
var sum = function (arg1, arg2) { return arg1 + arg2; };
var myArray = [1, 2, 3, 4, 5];
console.log(myArray.filter(function (value) { return value % 2 == 0; }));
function getStock(name) {
    this.name = name;
    setInterval(function () {
        console.log('name is :' + this.name);
    }, 1000);
}
var stock = new getstock('IBM'); //error
function getStock2(name) {
    var _this = this;
    this.name = name;
    setInterval(function () {
        console.log('name is :' + _this.name);
    }, 1000);
}
var stock = new getStock2('IBM');
//forEach(),for in,for of
var myArray = [1, 2, 3, 4];
myArray.desc = 'four number';
myArray.forEach(function (value) { return console.log(value); }); //1,2,3,4 forEach()忽略属性，不能break，
for (var n in myArray) {
    console.log(n);
} //0,1,2,3,desc
for (var n in myArray) {
    console.log(myArray[n]); //1,2,3,4 值
}
for (var _i = 0; _i < myArray.length; _i++) {
    var n = myArray[_i];
    if (n > 2)
        break;
    console.log(n);
} //1,2
//如果用在字符串上，就会把字符串的每一个值打出来
for (var _e = 0, _f = 'four munber'; _e < _f.length; _e++) {
    var n = _f[_e];
    console.log(n);
}
//类class，typescript的核心，大部分代码都是写在类里面的
var person = (function () {
    function person() {
        console.log('haha');
    }
    person.prototype.eat = function () {
        console.log('im eating');
    };
    return person;
})();
var p1 = new person(); //实例化
p1.name = 'lee';
p1.eat();
var p2 = new person();
p2.name = 'join';
p2.eat();
//访问控制符：private，public，protected
//类的构造函数 costructor，实例化的时候调用一次
var person = (function () {
    function person(name) {
        this.name = name;
    }
    person.prototype.eat = function () {
        console.log(this.name);
    };
    return person;
})();
var p1 = new person('lee');
p1.eat();
var p2 = new person('jion');
p2.eat();
var person = (function () {
    function person(name) {
        this.name = name;
    }
    person.prototype.eat = function () {
        console.log(this.name);
    };
    return person;
})();
var p1 = new person('lee');
p1.eat();
var p2 = new person('join');
p2.eat();
//类的继承，extends，super
var person = (function () {
    function person(name) {
        this.name = name;
    }
    person.prototype.eat = function () {
        console.log(this.name);
    };
    return person;
})();
var jack = (function (_super) {
    __extends(jack, _super);
    function jack() {
        _super.apply(this, arguments);
    }
    jack.prototype.work = function () {
    };
    return jack;
})(person);
var e1 = new jack('rose');
var p1 = new person('lee');
p1.eat();
var p2 = new person('join');
p2.eat();
var person = (function () {
    function person(name) {
        this.name = name;
        console.log('haha');
    }
    person.prototype.eat = function () {
        console.log('i am eating');
    };
    return person;
})();
var Employee = (function (_super) {
    __extends(Employee, _super);
    function Employee(name, code) {
        _super.call(this, name); //必须引入父元素
        console.log('xixi');
        this.code = code;
    }
    Employee.prototype.work = function () {
        _super.prototype.eat.call(this);
        this.dowork();
    };
    Employee.prototype.dowork = function () {
        console.log('i am working');
    };
    return Employee;
})(person);
var e1 = new Employee('rose', '1');
e1.work();
/*
 haha
 xixi
 i am eating
 i am working
 */
//泛型：参数化的类型，一般用来限制集合的内容
var person = (function () {
    function person(name) {
        this.name = name;
        console.log('haha');
    }
    person.prototype.eat = function () {
        console.log('i am eating');
    };
    return person;
})();
var Employee = (function (_super) {
    __extends(Employee, _super);
    function Employee(name, code) {
        _super.call(this, name); //必须引入父元素
        console.log('xixi');
        this.code = code;
    }
    Employee.prototype.work = function () {
        _super.prototype.eat.call(this);
        this.dowork();
    };
    Employee.prototype.dowork = function () {
        console.log('i am working');
    };
    return Employee;
})(person);
var works = []; //<person>数组的泛型，规定了数组里只能放person
works[0] = new person('zhang yang');
works[1] = new Employee('zhang', '2');
var e1 = new Employee('rose', '1');
e1.work();
var person = (function () {
    function person(config) {
        this.config = config;
    }
    return person;
})();
var p1 = new person({
    name: 'zhangsan',
    age: 18
});
var Sheep = (function () {
    function Sheep() {
    }
    Sheep.prototype.eat = function () {
        console.log('i eat gress');
    };
    return Sheep;
})();
var Tiger = (function () {
    function Tiger() {
    }
    Tiger.prototype.eat = function () {
        console.log('i an meat');
    };
    return Tiger;
})();
var prop2; //不对外暴露
function func1() {
}
exports.func1 = func1;
function func2() {
}
var calzz1 = (function () {
    function calzz1() {
    }
    return calzz1;
})();
exports.calzz1 = calzz1;
var clazz2 = (function () {
    function clazz2() {
    }
    return clazz2;
})();
//第二个模块
console.log(exports.prop1);
func1();
new clazz2();
//一个模块既可以对外暴露他的属性方法和类，也可以export别人的属性方法和类
//注解annotation：为程序的元素（类，方法，变量）加上更直观更明了的说明，这些说明信息与程序的业务逻辑无关，而是供指定的工具或框架使用
//类型定义文件（*.d.ts）用来定义文件来帮助开发者在typescript中使用已有的js的工具包，eg：jquery
工具;
github.com / typings / typings;
//# sourceMappingURL=hello.js.map