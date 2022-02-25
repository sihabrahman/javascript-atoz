// Javascript data types
/*
 - boolean
 - null
 - undefined
 - number
 - string
 -symbol
*/

var message = "hello world";
var num = 100;
alert(typeof message);      //typeof checks the datatype of the given statement
alert(typeof num);

var num1 = '100';
var num2 = 100;
var bool = num1===num2;
alert(typeof bool);
alert(bool);                  //checking boolean datatype

//parseInt
//parseFloat
var num1 = parseInt('1234iaushdgasgfa');
alert(num1);

//string
var name = 'Sihab';
alert(name.length);             //.length shows the length of the string

var age = 25;
var string = age.toString();    //toString converts anything to string
alert(typeof string);