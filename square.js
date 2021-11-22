class Square {
    constructor(length){
        this.height = length
        this.width = length
    }

    static isValidSquare(width,height){
        return width === height;
    }
    
    static isAreaEqual(squareA, squareB) {
        const areaA = squareA.width * squareA.height;
        const areaB = squareB.width * squareB.height;
    
        return areaA === areaB
    }
}


let s1 = new Square(4)
let s2 = new Square(6)

console.log(Square.isValidSquare(10,10))
console.log(Square.isAreaEqual(s1,s2))

console.log(s1)
console.log(s2)