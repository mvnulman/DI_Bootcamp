function beer(){
    let start = prompt ("how much beeer on the wall");
    while (isNaN(start)) {
        start = prompt ("how much beeer on the wall");
    }
    let off = 1;
    let itthem = "it";
    while (start > 0) {             
        console.log(`${start} bottles of beer on the wall, ${start} bottles of beer on the wall, ${start} bottles of beer, Take ${off} down, pass ${itthem} around`)
        itthem = `them`;
        start = start-off;
        off++; 
    }
    console.log("and you owe the bartender some money...")
}
beer()