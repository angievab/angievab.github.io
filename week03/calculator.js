let calculator = {
    sum() {
      return this.num_a + this.num_b;
    },
  
    mul() {
      return this.num_a * this.num_b;
    },
  
    read() {
      this.num_a = +prompt('first num?', 0);
      this.num_b = +prompt('second num?', 0);
    }
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );