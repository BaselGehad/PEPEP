let showAllHours = document.querySelector(".show");
let semester = document.querySelector(".semester");
let semesters = document.querySelector(".semesters");
let add = document.querySelectorAll("span");
let total = [];
let result = 0;
let links = document.querySelector(".links");
let bars = document.querySelector(".fa-bars");
let plus = document.querySelector(".fa-plus");
let home = document.querySelector(".home");
let allCourses = document.querySelector(".allcourses");
let homeLand = document.querySelector(".homeland");
let gpaParent = document.querySelector(".gpap");
let gpaLink = document.querySelector(".gpa");
let aboutLink = document.querySelector(".about");
let aboutParent = document.querySelector(".aboutp");
let developerLink = document.querySelector(".developer");
let developerParent = document.querySelector(".developerp");
// ________________________________________________________________________________________
// All Courses =>
add.forEach(function (a) {
  a.addEventListener("click", function () {
    // save the index of chosen a in tha array
    if (a.textContent === "+") {
      // theIndexArray.push(Array.from(add).indexOf(a));
      a.textContent = "-";
      a.parentElement.classList.add("active");
      total.unshift(parseInt(a.dataset.num));
      result += total[0];
    } else {
      // theIndexArray.shift(Array.from(add).indexOf(a));
      a.textContent = "+";
      a.parentElement.classList.remove("active");
      total.unshift(parseInt(a.dataset.num));
      result -= total[0];
    }
    // window.localStorage.theIndex = theIndexArray;
    showAllHours.textContent = `أنهيت - ${result} -  ساعات `;
    window.localStorage.myTotal = result;
    window.navigator.vibrate(40);
  });
});
if (window.localStorage.myTotal) {
  showAllHours.textContent = `أنهيت - ${window.localStorage.myTotal} - ساعات`;
} else {
  showAllHours.textContent = `أنهيت - 0 - ساعات`;
}
bars.addEventListener("click", function () {
  bars.style.display = "none";
  plus.style.display = "block";
  links.style.top = "60px";
  window.navigator.vibrate(20);
});
plus.addEventListener("click", function () {
  plus.style.display = "none";
  bars.style.display = "block";
  links.style.top = "-100vh";
  window.navigator.vibrate(20);
});
// _________________________________________________________________________________________
// links =>
allCourses.addEventListener("click", function () {
  semesters.style.display = "flex";
  // --------------
  links.style.top = "-100vh";
  plus.style.display = "none";
  bars.style.display = "block";
  // --------------
  homeLand.style.display = "none";
  gpaParent.style.display = "none";
  aboutParent.style.display = "none";
  developerParent.style.display = "none";
  // --------------
  window.navigator.vibrate(20);
});
// ----------------------------------------------------------------------------------------------
home.addEventListener("click", function () {
  // --------------
  homeLand.style.display = "flex";
  // --------------
  links.style.top = "-100vh";
  plus.style.display = "none";
  bars.style.display = "block";
  // --------------
  semesters.style.display = "none";
  gpaParent.style.display = "none";
  aboutParent.style.display = "none";
  developerParent.style.display = "none";
  // --------------
  window.navigator.vibrate(20);
});
// ----------------------------------------------------------------------------------------------
gpaLink.addEventListener("click", function () {
  gpaParent.style.display = "block";
  // --------------
  links.style.top = "-100vh";
  plus.style.display = "none";
  bars.style.display = "block";
  // --------------
  window.navigator.vibrate(20);
  // --------------
  semesters.style.display = "none";
  homeLand.style.display = "none";
  aboutParent.style.display = "none";
  developerParent.style.display = "none";
});
// -------------------------------------------------------------------------------------------------
aboutLink.addEventListener("click", function () {
  aboutParent.style.display = "flex";
  // --------------
  window.navigator.vibrate(20);
  // --------------
  links.style.top = "-100vh";
  plus.style.display = "none";
  bars.style.display = "block";
  // --------------
  semesters.style.display = "none";
  homeLand.style.display = "none";
  gpaParent.style.display = "none";
  developerParent.style.display = "none";
});
// -------------------------------------------------------------------------------------------------
developerLink.addEventListener("click", function () {
  developerParent.style.display = "flex";
  // --------------
  links.style.top = "-100vh";
  plus.style.display = "none";
  bars.style.display = "block";
  // --------------
  window.navigator.vibrate(20);
  // --------------
  semesters.style.display = "none";
  homeLand.style.display = "none";
  gpaParent.style.display = "none";
  aboutParent.style.display = "none";
});
// links.
// _________________________________________________________________________________________
// _________________________________________________________________________________________
// GPA =>
// buttons
let addToGpa = document.getElementById("addtogpa");
let clearAllGpa = document.getElementById("clearallgpa");
// -------------
let gpaCalculation = document.querySelector(".gpacalculation");
let gpaShow = document.querySelector(".gpap .container .showgpa");
let points = 0;
let hours = 0;
let gpaContainer = document.querySelectorAll(".gpap .container");
let note = document.querySelector(".note");
addToGpa.addEventListener("click", function () {
  clearAllGpa.style.display = "flex";
  clearAllGpa.parentElement.style.justifyContent = "space-between";
  // vibration -------------------
  window.navigator.vibrate(40);
  let subject = document.createElement("div");
  let hoursNum = document.getElementById("hours").cloneNode(true);
  let grade = document.getElementById("grade").cloneNode(true);
  let gradelable = document.createElement("label");
  let hourslable = document.createElement("label");
  let deleteSubject = document.createElement("button");
  deleteSubject.textContent = "-";
  deleteSubject.classList.add("deletesubject");
  subject.classList.add("subject");
  hoursNum.classList.add("hoursnum");
  grade.classList.add("grade");
  hoursNum.style.display = "block";
  grade.style.display = "block";
  gpaParent.children[1].append(subject);
  subject.appendChild(gradelable);
  subject.appendChild(grade);
  subject.appendChild(hourslable);
  subject.appendChild(hoursNum);
  subject.appendChild(deleteSubject);
  hourslable.textContent = "Hours";
  gradelable.textContent = "Grade";
  gradelable.classList.add("gradelable");
  hourslable.classList.add("hourslable");
  function calculationGpa() {
    Array.from(gpaContainer[1].children).map(function (a) {
      if (a.className === "subject") {
        switch (a.children[1].value) {
          case "A":
            points += parseFloat(a.children[3].value) * 4;
            hours += parseFloat(a.children[3].value);
            break;
          case "A-":
            points += parseFloat(a.children[3].value) * 3.7;
            hours += parseFloat(a.children[3].value);
            break;
          case "B+":
            points += parseFloat(a.children[3].value) * 3.3;
            hours += parseFloat(a.children[3].value);
            break;
          case "B":
            points += parseFloat(a.children[3].value) * 3;
            hours += parseFloat(a.children[3].value);
            break;
          case "B-":
            points += parseFloat(a.children[3].value) * 2.7;
            hours += parseFloat(a.children[3].value);
            break;
          case "C+":
            points += parseFloat(a.children[3].value) * 2.3;
            hours += parseFloat(a.children[3].value);
            break;
          case "C":
            points += parseFloat(a.children[3].value) * 2;
            hours += parseFloat(a.children[3].value);
            break;
          case "C-":
            points += parseFloat(a.children[3].value) * 1.7;
            hours += parseFloat(a.children[3].value);
            break;
          case "D+":
            points += parseFloat(a.children[3].value) * 1.3;
            hours += parseFloat(a.children[3].value);
            break;
          case "D":
            points += parseFloat(a.children[3].value) * 1;
            hours += parseFloat(a.children[3].value);
            break;
          case "F":
            points += 0;
            hours += parseFloat(a.children[3].value);
            break;
        }
      }
    });
    gpaShow.textContent = `GPA = ${(points / hours).toFixed(2)}`;
    hours = 0;
    points = 0;
  }
  calculationGpa();
  grade.onchange = () => {
    calculationGpa();
  };
  hoursNum.onchange = () => {
    calculationGpa();
  };
  // ------------------------
  deleteSubject.onclick = () => {
    window.navigator.vibrate(40);
    // gpaCalculation.style.display = "flex";
    // gpaShow.style.display = "none";
    deleteSubject.parentElement.remove();
    calculationGpa();
  };
});
clearAllGpa.addEventListener("click", function () {
  window.navigator.vibrate(40);
  clearAllGpa.style.display = "none";
  clearAllGpa.parentElement.style.justifyContent = "center";
  gpaShow.textContent = `GPA = 0`;
  Array.from(gpaContainer[1].children).map(function (a) {
    if (a.className === "subject") {
      a.remove();
    }
  });
});
// GPA.
// _________________________________________________________________________________________