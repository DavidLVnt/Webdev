document.getElementById("calculate").addEventListener("click", calculateBMI);

function calculateBMI() {
    var heightF = parseFloat(document.getElementById("heightF").value);
    var heightI = parseFloat(document.getElementById("heightI").value);
    var weight = parseFloat(document.getElementById("weight").value);
    var height = heightF * 12 + heightI;


    var bmi =Math.round(((weight * 703) / (height * height)) * 10) / 10;
    if(bmi < 18.5)
               {
                   result = "Under Weight";
               }
               //if it is between 18.5 and 24.9, it is normal weight
               else if(bmi >= 18.5 && bmi <= 24.9)
               {
                   result = "Normal Weight";
               }
               //if it is between 25 and 29.9, it is over weight
               else if(bmi >= 25 && bmi <= 29.9)
               {
                   result = "over Weight";
               }
               //if it is greater than 30, it is obesity
               else if(bmi >= 30)
               {
                   result = "Obesity";
               }
               else 
               {
                   result = "N/A"
               }
               //display the table
               document.getElementById("result").innerHTML = '<p>Your Height: '+ heightF + '\'' + heightI+'\'\'</p>' + '<p>Your Weight: ' + weight +'</p>' + '<p>Your BMI: '+ bmi +'</p>' + '<p>' + result +'</p>';


}