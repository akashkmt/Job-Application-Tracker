var appliedJobs = JSON.parse(localStorage.getItem("allJobs")) || [];

var bookmarkedJobs = JSON.parse(localStorage.getItem("bookmarkedJobs")) || [];

function displayData(appliedJobs) {
  document.querySelector("#tableBody").innerHTML = "";
  appliedJobs.forEach(function (job) {
    var row = document.createElement("tr");

    var td1 = document.createElement("td");
    td1.innerText = job.company;

    var td2 = document.createElement("td");
    td2.innerText = job.name;

    var td3 = document.createElement("td");
    td3.innerText = job.email;

    var td4 = document.createElement("td");
    td4.innerText = job.role;

    var td5 = document.createElement("td");
    td5.innerText = job.salary;

    var td6 = document.createElement("td");
    td6.innerText = "Bookmark";
    td6.style.color = "blue";
    td6.style.cursor = "pointer";

    td6.addEventListener("click", function () {
      bookmarkedJobs.push(job);
      localStorage.setItem("bookmarkedJobs", JSON.stringify(bookmarkedJobs));
      alert("Bookmarked Successfully");
    });
    row.append(td1, td2, td3, td4, td5, td6);
    document.querySelector("#tableBody").append(row);
  });
}

window.addEventListener("load", function () {
  displayData(appliedJobs);
});

var copyJobs = JSON.parse(JSON.stringify(appliedJobs));

function sortName() {
  var value = document.querySelector("#nameSort").value;
  if (value == "") {
    displayData(appliedJobs);
  }
  if (value == "Ascending") {
    copyJobs.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      } else if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
    displayData(copyJobs);
  }
  if (value == "Descending") {
    copyJobs.sort(function (a, b) {
      if (a.name > b.name) {
        return -1;
      } else if (a.name < b.name) {
        return 1;
      }
      return 0;
    });
    displayData(copyJobs);
  }
}

function sortSalary() {
  var value = document.querySelector("#salarySort").value;
  if (value == "") {
    displayData(appliedJobs);
  }
  if (value == "Ascending") {
    copyJobs.sort(function (a, b) {
      return a.salary - b.salary;
    });
    displayData(copyJobs);
  }
  if (value == "Descending") {
    copyJobs.sort(function (a, b) {
      return b.salary - a.salary;
    });
    displayData(copyJobs);
  }
}

function filterJobs() {
  var value = document.querySelector("#filterRole").value;
  if (value == "") {
    displayData(appliedJobs);
  } else {
    var filteredJobs = appliedJobs.filter(function (job) {
      if (job.role == value) {
        return true;
      }
      return false;
    });
    displayData(filteredJobs);
  }
}
