import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'calculator';
  operator: string
  numberSeven = "7"
  firstOperand = ""
  secondOperand = ""
  errorMessage = ""
  displayValue = ""
  operations = ['+', '-', '*','/','!','p']
  constructor() {
    this.operator = ""
  }

  calculate() {
    console.log('Calculate() triggered')
    if (this.operator != "") {
      let first = parseFloat(this.firstOperand)
      console.log("firstOperand.....", this.firstOperand);
      console.log("first..... ", first);
      
      let second = parseFloat(this.secondOperand)
      console.log("secondOperand.....", this.secondOperand);
      console.log("second.....", second);


      switch (this.operator) {
        case '+':
          this.displayValue = `${this.displayValue}=${first + second}`
          this.clearEverything()
          break;
        
        case '-':
          this.displayValue = `${this.displayValue}=${first - second}`
          this.clearEverything()
          break;
        
        case '*':
          this.displayValue = `${this.displayValue}=${first * second}`
          this.clearEverything()
          break;
        
        case '/':
          this.displayValue = `${this.displayValue}=${first / second}`
          this.clearEverything()
          break;
    
        case '!':
          var num:number = first; 
          var factorial:number = 1; 
          while(num >=1) { 
              factorial = factorial * num; 
              num--; 
          } 
          this.displayValue = `${this.displayValue}=${factorial}`
          this.clearEverything()
          break;
        
        case 'p':
          var num:number = first; 
          var flag:number = 0;
          var i:number = 2;
          while(num>i) { 
              if(num%i==0){
                flag = 1;
                break;
              }
              i++;
          } 
          
          if(flag == 0){
            this.displayValue = `${this.displayValue}=${'Prime'}`
          }else{
            this.displayValue = `${this.displayValue}=${'Not Prime'}`
          }
          this.clearEverything()
          break;  
        
        default:
          break;
      }
    } 
    
    else {
      this.errorMessage = "Please Add Operator"
    }
  }
  
  adddot(value: string){
    console.log("dot is clicked");
      if( this.secondOperand != ""){
        this.secondOperand = `${this.secondOperand}${'.'}`
        console.log("secondOperand", this.secondOperand);
      }else{
        this.firstOperand = `${this.firstOperand}${'.'}`
      }
      this.displayValue = `${this.firstOperand}${this.operator}${this.secondOperand}`
  }

  addNumber(value: number) {
    this.errorMessage = ""
    if (this.operator != "") {
      this.secondOperand += value
      this.displayValue = `${this.firstOperand}${this.operator}${this.secondOperand}`
    } 
    else {
      this.firstOperand += value
      this.displayValue = this.firstOperand
    }
    console.log('first', this.firstOperand)
    console.log('second', this.secondOperand)
  }

  addOperator(operator: string) {
    if (this.operator != "") {
      this.displayValue = `${this.displayValue.substring(1, this.displayValue.length - 1)}${operator}`
    } else {
      this.displayValue = `${this.displayValue}${operator}`
    }
    this.operator = operator
  }

  
  private clearEverything() {
    this.firstOperand = ""
    this.secondOperand = ""
    this.operator = ""
  }

  
  clearAll(){
    this.displayValue="";
    this.firstOperand = ""
    this.secondOperand = ""
    this.operator = ""
  }


clear(){
  console.log("button clicked");
  if( this.secondOperand != ""){
    this.secondOperand = this.secondOperand.slice(0, - 1);
    console.log("secondOperand", this.secondOperand);
  }
  else if(this.operator){
    this.operator = this.operator.slice(0, - 1);
    console.log("this.operator", this.operator);
  }else{
    this.firstOperand = this.firstOperand.slice(0, - 1);
    console.log("this.firstOperand ", this.firstOperand );
  }
  this.displayValue = `${this.firstOperand}${this.operator}${this.secondOperand}`
  }
}
