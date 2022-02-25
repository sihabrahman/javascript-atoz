//operators
//unary operator
var age = 30;
age++;      //postfix
console.log(age);

var age2 = 30;
--age2;     //prefix
console.log(age2);

var str1 = '01';
var str2 = '1.1';
var str3 = 'zzz';

str1 = +str1;
console.log(str1);

str2 = -str2;
console.log(str2);

str3 = +str3;
console.log(str3);

//boolean - logical operator
var age = 20;

if(age >= 18 && age <= 21){             //logical AND
    console.log('Eligible');
}

var a = 15;
var b = 20;

if(a >= 10 || b <= 21){             //logical OR
    console.log('Eligible');
}

console.log(!a > 2);                //logical NOT


//mathematical operator
var val1 = 5*10;
console.log(val1);

var val2 = 20/5;
console.log(val2);

var val3 = 10%3;
console.log(val3);

var name = 'Sihab';
var age = 25;

var info = "my name is "+ name + ", I'm "+age;
console.log(info);

var num1 = 10;
var num2 = '10';
var total = num1 + num2;                //toString()
console.log(total);

var num3 = 10;
var num4 = '5';
var total = num3 - num4;                //number
console.log(total);


//equality operator
console.log('1' == 1);
console.log(1 != 1);
console.log(false == 1);
console.log(true == 1);

//identically equal operators
console.log('1' === 1);
console.log('1' !== 1);

//conditional/ternery operator

// variable = expression ? true : false;
var num1 = 100;
var num2 = 50;

var result = num1 > num2 ? 'Right' : 'Wrong';
console.log(result);