// Q.5-1
for (i=1; i<=10; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}
console.log("");


// Q.5-2
for (i=10; i>=0; i--){
    if(i % 2 == 1){
        console.log(i);
    }
}
console.log("");


// Q.5-3
let sum = 0;

for (i=0; i<=10; i++){
    sum += i
}
console.log(sum);
console.log("");


// Q.5-4
let add = 0;

for (i=1; i<=20; i++){
    if(i % 3 == 0 || i % 5 == 0){
        add +=i
    }
}
console.log(add);
