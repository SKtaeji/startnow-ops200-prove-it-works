// class Mortgage {
//     constructor(principal, interest, term, period) {
//       this.principal = principal;
//       this.interest = interest;
//       this.term = term;
//       this.period = period;
//       console.log("Mortgage is created")
//     }
  
//     monthlyPayment() {
//       console.log("monthlyPayment will be calculated here");
      
//       // this getter should return the result of your monthly payment calculation
//       // used in a previous assignment.
//       var principal = this.principal;
//       var period = this.period;
//       var interest = this.interest / 100 / 12;
//       var term = this.term * 12;
//       var num = interest * (Math.pow(1 + interest, term));
//       var den = Math.pow(1 + interest, term) - 1;
//       var quo = num / den;
//       var result = principal * quo;

//       return result;
//     }
//   }

class Mortgage {
  constructor() {
    console.log("Mortgage is created")
  }

  monthlyPayment(principal, interest, term) {
    console.log("monthlyPayment will be calculated here");
    
    // this getter should return the result of your monthly payment calculation 
    var actualInterest = interest / 100 / 12;
    var actualTerm = term * 12;
    var num = principal * (actualInterest * (Math.pow(1 + actualInterest, actualTerm)));
    var den = (Math.pow(1 + actualInterest, actualTerm) - 1);
    var result = (num / den).toFixed(2);
    return parseFloat(result);
  }
}


  module.exports = Mortgage;