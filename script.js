class Rectangle {
	constructor(width, height){
		this.width = width;
		this.height = height;
	}
	height(){
		return this.height
	}
	width(){
		return this.width;
	}
	getArea(){
		return this.height * this.width;
	}
}

class Square extends Rectangle {
	constructor(width){
		super(width, width);
	}
	getPerimeter(){
		return 4*this.width;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
