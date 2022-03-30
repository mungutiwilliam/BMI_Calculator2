function cal (weight, height) {
      
      var result = weight/(height * height);
      //return result;

      

      if (result <= 18.5){
            return "Underweight";
      } else if(result > 18.5 && result <= 24.9){
            return "Normal weight";
      } else if(result > 24.9 && result <= 29.9){
            return "Overweight";
      } else {
            return "Obese";
      }
}


module.exports = {cal};