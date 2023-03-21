// Regular Ball Super Ball
// https://www.codewars.com/kata/53f0f358b9cb376eca001079

class Ball {
    constructor(ballType = "regular") {
      this.ballType = ballType;
    }
  }
  
  const ball1 = new Ball();
  const ball2 = new Ball("super");