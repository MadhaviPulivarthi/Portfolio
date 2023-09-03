function sendEmail(){
    var name=document.querySelector('#name').value;
    var mail=document.querySelector('#email').value;
    var number=document.querySelector('#number').value;
    var message=document.querySelector('#message').value;
    var body="name :"+name+""+"mail:"+mail+""+"number :"+number+""+"message"+message+""
    

Email.send({
    // SecurityToken: "f25c2a25-3d13-4139-9b50-ff5b255bad2b",
    Host : "smtp.elasticemail.com",  
    Username : "bhanukundarapu55@gmail.com",
    Password : "92D9487728246FF305C7FE8E9175F2ED8530",
    To : 'bhanuchary765@gmail.com',
    From : 'bhanukundarapu55@gmail.com',
    Subject : "This is the subject",
    Body :body
}).then(
  message =>{
    if(message==='ok'){
        alert("Thank you for contacting")
    }
    else{
      alert("something went wrong")
    }
  }
);
console.log("succes");
}
sendEmail();