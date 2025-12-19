
emailjs.init("Sjj2Kg0aFYBCSoApd");

document.getElementById("interviewForm").addEventListener("submit", function(e){
  e.preventDefault();

  emailjs.sendForm("service_ocnqm4i",   // 🔴 EmailJS Service ID
      "template_g5dkt08",  // 🔴 EmailJS Template ID
    this).then(
    () => {
      document.getElementById("msg").innerHTML = "Form Submitted Successfully ✅";
      document.getElementById("msg").className = "text-success fw-bold";

      // ✅ RESET FORM
      document.getElementById("interviewForm").reset();
    },
    (error) => {
      document.getElementById("msg").innerHTML = "Error ❌ Form Not Submitted";
      document.getElementById("msg").className = "text-danger fw-bold";
      console.log(error);
    }
  );
});



