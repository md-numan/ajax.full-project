


// create.html



function main (input){
    const lines = input.split("");
    const point1 = lines[0].split("");
    const point2 = lines[1].split("");
    const x1 = Number(point1[0]);
    const y1= Number(point1[1]);
    const x2 = Number(point2[0]);
    const y2 = Number(point2[1]);


    const deltaX = x2 - x1;
    const deltaY = y2 - y1;
    const distance = Math.sqrt(deltaX*deltaX + deltaY*deltaY);
    console.log(`Distance: ${distance.toFixed(2)}`)
}
