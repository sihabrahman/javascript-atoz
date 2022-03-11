// function total(one, two){
//     return one + two;
// }

// var result = total(5, 6);
// var result2 = total(100, 50);
// alert(result);
// alert(result2);

// function nameCheck(name){
//     if (name == 'Sihab'){
//         return 'Hola Sihab';
//     } else{
//         return 'Hvem er eu?';
//     }
// }

// var result3 = nameCheck('Shihab');
// alert(result3);

/*
Arguments are not necessary and can be any data type or none,
Array like object represents arguments internally [].
You can access each arguments using bracket notation
determine number of arguments using Arraylength property
*/

function sayHi(name, something, opinion){
    return arguments[0] + arguments[1] + arguments[2]; 
}

alert(sayHi('Sihab ', 'working on', ' JS'));

function shopping(item1, item2){
    if(arguments.length >= 2){
        alert('Cart is full');
    } else{
        alert('You can add one more item');
    }
}
shopping('Bread', 'Milk');
