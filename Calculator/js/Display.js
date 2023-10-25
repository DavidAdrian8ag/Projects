class Display {
     constructor(displayPrevValue, displayPresValue) {
          this.displayPrevValue = displayPrevValue;
          this.displayPresValue = displayPresValue;
          this.calculator = new Calc();
          this.typeOper = undefined;
          this.preevValue = '';
          this.pressValue = '';
          this.signo = {
               sumar: '+',
               restar: '-',
               dividir: '/',
               multiplicar: 'x'
          }
     }
     delete() {
          this.pressValue = this.pressValue.toString().slice(0,-1);
          this.printValues();
     }
     deleteAll() {
          this.pressValue = '';
          this.preevValue = '';
          this.typeOper = undefined;
          this.printValues();
     }
     compute(type) {
          this.typeOper !== 'igualito' && this.calculate();
          this.typeOper = type;
          this.preevValue = this.pressValue || this.preevValue;
          this.pressValue = '';
          this.printValues();
     }
     addNumber(numbr) {
          if(numbr=== '.' && this.pressValue.includes('.')) return;
          this.pressValue = this.pressValue.toString() + numbr.toString();
          this.printValues();
     }
     printValues(){
          this.displayPresValue.textContent = this.pressValue;
          this.displayPrevValue.textContent = `${this.preevValue} ${this.signo[this.typeOper] ||''}`;
     };
     calculate() {
          const preevValue = parseFloat(this.preevValue);
          const pressValue = parseFloat(this.pressValue);
          if ( isNaN(pressValue) || isNaN(preevValue) ) return;
          this.pressValue = this.calculator[this.typeOper](preevValue, pressValue);
     }
}