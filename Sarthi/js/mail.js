const firebaseConfig = {
    apiKey: "AIzaSyC2oqkkuHdwdMo7swfVS3bnpuodhVYr_Uo",
    authDomain: "sarthi-29089.firebaseapp.com",
    databaseURL: "https://sarthi-29089-default-rtdb.firebaseio.com",
    projectId: "sarthi-29089",
    storageBucket: "sarthi-29089.appspot.com",
    messagingSenderId: "228650324882",
    appId: "1:228650324882:web:97c73ec6f1959aac26a74b"
};

//initialize the firebase
firebase.initializeApp(firebaseConfig);
//refernece your database
var booknowdb = firebase.database().ref('Sarthi')

document.getElementById('sarthi').addEventListener("submit",submitForm)

function submitForm(e){
    e.preventDefault();

    var name = getElementVal('name');
    var number = getElementVal('number');
    var emailid = getElementVal('emailid');
    var date = getElementVal('date');

   save(name, number, emailid, date);
   //enable alert
   document.querySelector('.alert').style.display = 'block';
   //remove the alert
   setTimeout(() => {
    document.querySelector('.alert').style.display = 'none';
   },3000);
   //reset the form
   document.getElementById('sarthi').reset();
}

const save = (name, number, emailid, date) => {
    var newContact = booknowdb.push();

    newContact.set({
        name : name,
        number : number,
        emailid : emailid,
        date : date,
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
}

