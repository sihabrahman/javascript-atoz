// if else

var num = 100;

if (num > 50){
    alert("greater");
}else{
    alert("false");
}

var n = 25;

if (n >= 26){
    alert('greater');
}else if(n <= 24){
    alert('smaller');
}else{
    alert('equal');
}

// do while
// do while statement creates a loop that executes a block of code
// at least once, before checking if the condition is true
// then it will repeat the loop as long as the condition is true.

var num = 0;

do{
    num ++;
    console.log('Number: ',num);
}while(num<5);

// while
// evaluate the condition, only then code inside the loop execute

var num = 0;

while(num < 2){
    num ++;
    console.log('Num: ',num);
}

// for loop

for(var initialization; condition; postLoopExpression){statement}

for( var i = 0; i < 5; i++ ){
    console.log(i);
}

// for in

var person = {
    name: 'Sihab',
    age: 25,
    address: 'Dhaka'
};

for(item in person){
    console.log(item);
}

// break and continue

var num = 0;

for(var i = 0; i < 10; i++){
    if(i === 5){
        break;
    }
    num ++;
}

console.log(num);

var num = 0;

for(var i = 0; i < 10; i++){
    if(i === 5){
        continue;
    }
    num ++;
}

console.log(num);

var num = 0;

outerLabel: for(var i = 0; i < 10; i++){
    for(var j = 0; j < 10; j++){
        if(i == 5 && j == 5){
            continue outerLabel;            //continue
        }
        num ++;
    }
}
console.log(num);

var num = 0;

outerLabel: for(var i = 0; i < 10; i++){
    for(var j = 0; j < 10; j++){
        if(i == 5 && j == 5){
            break outerLabel;               //break
        }
        num ++;
    }
}
console.log(num);

// Switch

//each case in switch statement checks if expression is equal to the value
// without break statement, code execution falls through to default case

var i = 100;

switch(i){
    case 10:
        alert('10');
        break;
    case 20:
        alert('20');
        break;    
    default:
        alert('Nothing');
}

var i = 'hello mate';

switch(i){
    case 'hi':
        alert('Hi');
        break;
    case 'hello':
        alert('Hello');
        break;    
    default:
        alert('Nothing');
}