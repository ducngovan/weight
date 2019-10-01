function get_BMI() {
    let weight, height, bmi;
    weight = parseInt(document.getElementById('weight').value);
    height = parseInt(document.getElementById('height').value);
    bmi = (weight / (height * height));
    document.getElementById('result').value = bmi;
    if (bmi < 18.5) {
        document.getElementById('get_result').innerHTML = "Underweight";
    } else if (18.5 <= bmi < 25) {
         document.getElementById('get_result').innerHTML = "Normal";
    } else if (25 <= bmi < 30) {
        document.getElementById('get_result').innerHTML = "Overweight";
    } else {
        document.getElementById('get_result').innerHTML = "Obese";
    }

}
    // console.log("ok");
