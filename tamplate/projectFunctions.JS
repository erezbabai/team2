var i = 0;
var submitContactTxt = 'Your request has been sent! We will contact you ASAP.';
var speed = 50;
var deg= 2;
// -----------------------------------contactUs----------------------

function contactFormSend(){
  var contactInputs = document.getElementById('myInputs');
  var backToHomeCon = document.getElementById('backToHomeContact');

  contactInputs.style.display = "none";
  typeWriter();
  backToHomeCon.style.display = "block";

}

function typeWriter() {
     

  if (i < submitContactTxt.length) {
      document.getElementById("ConfirmMessage").innerHTML += submitContactTxt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
      }
      
    }



// -----------------------------------paymentFunction----------------------


function paymentEnd(){
  var payEndLable = document.getElementById('paymentEndLable');
  var allInputsPayment = document.getElementById('allPaymentInputs');
  var payLable = document.getElementById('paymentLable');
  var backToHomeCon = document.getElementById('backToHomePayment');
  var backToMenuBut = document.getElementById('backToMenu');


    payEndLable.style.display = "block";
    allInputsPayment.style.display = "none";
    payLable.style.display = "none";
    backToHomeCon.style.display = "block";
    backToMenuBut.style.display = "none";


    }


// -----------------------------------logInFunction----------------------

var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function loadingUser() {
  var load = document.getElementById('loader');
  var Mycontain1 = document.getElementById('containerlogInID');
  var Mycontain2 = document.getElementById('containerSign');
  var Mycontain3 = document.getElementById('containerCan');

      load.style.display = "block";
      Mycontain1.style.display = "none";
      Mycontain2.style.display = "none";
      Mycontain3.style.display = "none";
      setTimeout(() => { location.replace("userHomePage.html"); }, 3000);

      
    }

    
const activePage = window.location.pathname;

const navLinks = document.querySelectorAll('nav a').forEach(link => {   
  console.log(activePage);
    if(link.href.includes(`${activePage}`)){
      link.classList.add('active');
    }
  });


// -----------------------------------end logInFunction----------------------

  
// -----------------------------------signUp Function----------------------

      
 
var check1 = function(){
  if (document.getElementById('psw').value ==
  document.getElementById('confirm_password').value) { 
  document.querySelector('#submitContact').disabled = false;
  document.getElementById('matched').textContent= 'Match';


} else {
   document.querySelector('#submitContact').disabled = true;
   document.getElementById('matched').textContent= 'Not Match';



}
}
var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");



// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
// Validate lowercase letters
var lowerCaseLetters = /[a-z]/g;
if(myInput.value.match(lowerCaseLetters)) {
  letter.classList.remove("invalid");
  letter.classList.add("valid");
} else {
  letter.classList.remove("valid");
  letter.classList.add("invalid");
}

// Validate capital letters
var upperCaseLetters = /[A-Z]/g;
if(myInput.value.match(upperCaseLetters)) {
  capital.classList.remove("invalid");
  capital.classList.add("valid");
} else {
  capital.classList.remove("valid");
  capital.classList.add("invalid");
}

// Validate numbers
var numbers = /[0-9]/g;
if(myInput.value.match(numbers)) {
  number.classList.remove("invalid");
  number.classList.add("valid");
} else {
  number.classList.remove("valid");
  number.classList.add("invalid");
}

// Validate length
if(myInput.value.length >= 8) {
  length.classList.remove("invalid");
  length.classList.add("valid");
} else {
  length.classList.remove("valid");
  length.classList.add("invalid");
}

}

var dtToday = new Date();
      var month = dtToday.getMonth() + 1;
      var day = dtToday.getDate();
      var year = dtToday.getFullYear();
      var maxYear = year - 18;
      if(month < 10)
          month = '0' + month.toString();
      if(day < 10)
          day = '0' + day.toString();

      var maxDate = maxYear + '-' + month + '-' + day;
      var minYear = year - 80;
      var minDate = minYear + '-' + month + '-' + day;
      document.querySelectorAll("#txtDate")[0].setAttribute("max",maxDate);

      document.querySelectorAll("#txtDate")[0].setAttribute("min",minDate);

      function SignUpEnd(){
        var getDetailsSignUp = document.getElementById('getDetails');
        var signInConfirmBut = document.getElementById('signInConfirm');

        getDetailsSignUp.style.display = "none";
        signInConfirmBut.style.display = "block";

        



      }

// -----------------------------------end signUp Function----------------------

// -----------------------------------about us map  Function----------------------

      let map;
      // Initialize and add the map
      function initMap() {
        // The location of Uluru
        const tlv = { lat: 32.09956781703534, lng: 34.774063172134504 };
        const beersheba= { lat: 31.23926535269584, lng: 34.7909099763604 };
        const mid= { lat: 31.61206658050883 , lng: 34.7905};
        // The map, centered at Uluru
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 6.8,
          center: mid,
        });
        // The marker, positioned at Uluru
        const marker = new google.maps.Marker({
          position: tlv,
          map: map,
        });
        const marker1 = new google.maps.Marker({
          position: beersheba,
          map: map,
        }); 
       
      }
      window.initMap = initMap;

   