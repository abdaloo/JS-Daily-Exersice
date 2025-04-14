//JavaScript Program to Solve Quadratic Equation
// ax^2+bx+c = 0
// Formula: x = -b+_(sqrt b^2 - 4ac)/2a;

let a = -3;
let b = 4;
let c = 2;

let discriminant = b*b - 4*a*c;

let root1 ;
let root2 ;

if(discriminant > 0){
    root1 = (-(b) + Math.sqrt(discriminant))/2*a;
    root2 = (-(b) - Math.sqrt(discriminant))/2*a;

    console.log(`The roots of quadratic equation are: ${root1.toFixed(2)} & ${root2.toFixed(2)}`);

}else if(discriminant == 0){
    root1 = root2 = -(b)/(2*a);
    console.log(`The roots of quadratic equation are: ${root1} & ${root2}`);
    
} else if(discriminant < 0){
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
    console.log(`The roots of quadratic equation are: ${realPart} + ${imagPart}i and ${realPart} + ${imagPart}i`);
}


