document.querySelector("#myForm").addEventListener("submit", appliedJobs);
var allJobs = JSON.parse(localStorage.getItem("allJobs")) || [];

function appliedJobs() {
  event.preventDefault();
  var obj = {
    company: document.querySelector("#companyName").value,
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
    role: document.querySelector("#selectBox").value,
    salary: document.querySelector("#salary").value,
  };

  allJobs.push(obj);
  localStorage.setItem("allJobs", JSON.stringify(allJobs));
  alert("Added Successfully");

    document.querySelector("#companyName").value='';
    document.querySelector("#name").value='';
    document.querySelector("#email").value='';
    document.querySelector("#selectBox").value='';
    document.querySelector("#salary").value='';
}
