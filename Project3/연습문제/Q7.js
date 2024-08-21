// Q.7-1
for(i=1; i<=5; i++){
    let row = "";
    for(j=0; j<=5; j++){
        row = row + "*";
    }
    console.log(row);
}

// Q.7-2
for (i=1; i<=5; i++){

    let row = "";

    for(j=0; j<i; j++){
        row = row + "*";
    }

    console.log(row);

}