function validates() {
   let firstName;
   firstName = document.getElementById("firstName").value;
   let lblError;
   let regName = /^[a-zA-Z ]{2,30}$/;
   firstName = firstName.trim();
   if (firstName == "") {
      document.getElementById("lblError").innerHTML = "first name field cannot be blank!";
   } else if (!regName.test(firstName)) {
      document.getElementById("lblError").innerHTML = "name should contain alphabets only";
   } else if (!(isNaN(firstName))) {
      document.getElementById("lblError").innerHTML = "Enter a valid name";
   } else {
      document.getElementById("lblError").innerHTML = "";
   }

   let lastName;
   lastName = document.getElementById("lastName").value;
   let lblError1;
   lastName = lastName.trim();
   if (lastName == "") {
      document.getElementById("lblError1").innerHTML = "last name field cannot be blank!";
   } else if (!regName.test(lastName)) {
      document.getElementById("lblError1").innerHTML = "name should contain alphabets only";
   } else if (!(isNaN(lastName))) {
      document.getElementById("lblError1").innerHTML = "Enter a valid name";
   } else {
      document.getElementById("lblError1").innerHTML = "";
   }

   let address;
   address = document.getElementById("address").value;
   let lblError2;
   address = address.trim();
   if (address == "") {
      document.getElementById("lblError2").innerHTML = "address field cannot be blank!";
   } else {
      document.getElementById("lblError2").innerHTML = "";
   }

   let phNo;
   phNo = document.getElementById("phNo").value;
   let lblError3;
   let maxLength = phNo.length;
   if (phNo == "") {
      document.getElementById("lblError3").innerHTML = "phone number field cannot be blank!";
   } else if (isNaN(phNo)) {
      document.getElementById("lblError3").innerHTML = "should contain digits only";
   } else if (maxLength < 10 || maxLength > 10) {
      document.getElementById("lblError3").innerHTML = "Number should contain atmost 10 digits";
   } else {
      document.getElementById("lblError3").innerHTML = "";
   }

   const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
   let email;
   email = document.getElementById("email").value;
   let lblError4;
   if (email == "") {
      document.getElementById("lblError4").innerHTML = "email field cannot be blank!";
   } else if (!emailRegex.test(email)) {
      document.getElementById("lblError4").innerHTML = "invalid email id";
   } else {
      document.getElementById("lblError4").innerHTML = "";
   }

   let passw = /^[a-zA-Z0-9!@#$%^&*]$/;
   passWord = document.getElementById("passWord").value;
   let lblError5;
   if (passWord == "") {
      document.getElementById("lblError5").innerHTML = "password field cannot be blank!";
   } else if (passw.test(passWord)) {
      document.getElementById("lblError5").innerHTML = "input a strong password";
   } else if (passWord.length <= 8) {
      document.getElementById("lblError5").innerHTML = "password should contain at least 8 characters";
   } else {
      document.getElementById("lblError5").innerHTML = "";
   }
   let confirmPassord;
   confirmPassord = document.getElementById("confirmPassword").value;
   let lblError6;
   if (passWord == "") {
      document.getElementById("lblError6").innerHTML = "password field cannot be blank!";
      return false;
   } else if (confirmPassord == passWord) {
      document.getElementById("lblError6").innerHTML = "enter the same password as above";
   } else {
      document.getElementById("lblError6").innerHTML = "";
   }
}