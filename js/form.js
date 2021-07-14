// "use strict";

// const reatingForm = document.getElementById("Form");
// const orders = document.getElementById("orders");

// // let rate = 0;

// function Star(name, prefctuerName, rview) {
//   this.name = name;
//   this.prefctuerName = prefctuerName;
//   this.rate = 0;
//   this.rview = rview;

//   Star.globalarr.push(this);
//   saveToLs();
// }

// Star.globalarr = [];

// reatingForm.addEventListener("submit", handleClick);
// function handleClick(event) {
//   event.preventDefault();
//   console.log(event.target);

//   const newName = event.target.name.value;
//   const prefctuerName = event.target.prefctuerName.value;
//   const rate = 0;
//   const rview = event.target.rview.value;

//   new Star(newName, prefctuerName, rview, rate);

//   console.log(Star.globalarr);

//   renderOrders();
// }

// // let rate = 0;

// // function submitRate(){
// // 	let name=document.getElementById('name').value;
// //     let prefctuerName=document.getElementById('prefctuerName').value;
// // 	let rview=document.getElementById('rview').value;
// // 	if(rate != 0 && name !="" && rview !="" && prefctuerName !=""){
// // 		let html=
// // 		"<h4>name: <label class='text-primary'>" + name + "</label></h4>"
// //         +"<h4>prefctuerName: <label class='text-primary'>" + prefctuerName + "</label></h4>"
// // 		+"<h4>rate: <label class='text-primary'>" + rate + "</label></h4>"
// // 		+"<h4>rview</h4>"
// // 		+"<p>"+rview+"</p>"
// // 		+"<hr style='border-top:1px solid #000;'/>";
// // 		document.getElementById('result').innerHTML+=html;
// //         document.getElementById('prefctuerName').value="";
// // 		document.getElementById('name').value="";
// // 		document.getElementById('rview').value="";
// // 	}
// // }

// // submitRate();

// function startRating(){
// 	rate=item.id[0];
// 	sessionStorage.star = rate;
// 	for(var i=0;i<5;i++){
// 		if(i<rate){
// 			document.getElementById((i+1)).style.color="yellow";
// 		}
// 		else{
// 			document.getElementById((i+1)).style.color="white";
// 		}
// 	}
// }

// function saveToLs() {
//   const convertedArr = JSON.stringify(Star.globalarr);

//   localStorage.setItem("Order", convertedArr);
// }

// function getFromLs() {
//   const data = localStorage.getItem("Order");
//   console.log(data);
//   const parsedOrder = JSON.parse(data);
//   console.log(parsedOrder);
//   if (parsedOrder) {
//     Star.globalarr = parsedOrder;

//     renderOrders();
//   }
// }

// function renderOrders() {

//     orders.textContent = '';

//   for (let i = 0; i < Star.globalarr.length; i++) {
//     let input = document.createElement("li");
//      orders.appendChild(input);
//     input.textContent = `${Star.globalarr[i].name}  ${Star.globalarr[i].prefctuerName} ${Star.globalarr[i].rview} ${Star.globalarr[i].rate} `;
//   }
// }

// let count = 0;

// function result() {
//   if (count != 0) {
//     document.getElementById("result").innerHTML =
//       "<h4>Rating: <label class='text-primary'>" +
//       count +
//       "</label></h4>" +
//       "<h4>Review</h4>" +
//       "<p>" +
//       document.getElementById("review").value +
//       "</p>";
//   } else {
//   }
// }

// this.rate = count;
// function startRating(item) {
//   count = item.id[0];
//   sessionStorage.star = count;
//   for (let i = 0; i < 5; i++) {
//     if (i < count) {
//       document.getElementById(i + 1).style.color = "yellow";
//     } else {
//       document.getElementById(i + 1).style.color = "black";
//     }
//   }
// }

// getFromLs();

// ==================== ehab =====================

"use strict";
let userReviw = [];
let userData = [];
let userStar;

let starValue;

function User(name, location, feed, stars) {
  this.name = name;
  this.location = location;
  this.feed = feed;
  this.stars = stars;
  userData.push(this);
  userReviw.push(this);
}

let button = document.getElementById("popupform");
button.addEventListener("click", show);
let div = document.getElementById("form1");
function show() {
  button.removeEventListener("click", show);
  let form = document.createElement("form");
  div.appendChild(form);
  let field = document.createElement("fieldset");
  form.appendChild(field);
  field.setAttribute("id", "fieldset");
  let legend = document.createElement("legend");
  field.appendChild(legend);
  legend.textContent = "SURVEY FORM";
  let label1 = document.createElement("label");
  field.appendChild(label1);
  label1.setAttribute("for", "first");
  label1.setAttribute("class", "label");
  label1.textContent = "Name ";
  let input1 = document.createElement("input");
  label1.appendChild(input1);
  input1.setAttribute("type", "text");
  input1.setAttribute("placeholder", "full name");
  input1.setAttribute("id", "first");

  let br1 = document.createElement("br");
  field.appendChild(br1);
  let label2 = document.createElement("label");
  field.appendChild(label2);
  label2.setAttribute("for", "second");
  label2.setAttribute("class", "label");
  label2.textContent = "location ";
  let input2 = document.createElement("input");
  label2.appendChild(input2);
  input2.setAttribute("type", "text");
  input2.setAttribute("placeholder", "Location");
  input2.setAttribute("id", "second");

  let br7 = document.createElement("br");
  field.appendChild(br7);
  let label6 = document.createElement("label");
  field.appendChild(label6);
  label6.setAttribute("for", "feedback");
  label6.setAttribute("class", "label6");
  label6.textContent = "Describe your PV system";
  let feedback = document.createElement("textarea");
  label6.appendChild(feedback);
  feedback.setAttribute("id", "feedback");
  feedback.setAttribute("placeholder", "add anything you like in here");

  let rate = document.createElement("p");
  field.appendChild(rate);
  rate.setAttribute("id", "rateid");
  rate.textContent = "How is your satisfaction about it";

  let stars = document.createElement("div");
  field.appendChild(stars);
  stars.setAttribute("class", "star-rating");
  let uno = document.createElement("ul");
  stars.appendChild(uno);
  uno.setAttribute("class", "stars");

  let li1 = document.createElement("li");
  uno.appendChild(li1);
  li1.setAttribute("class", "star");
  let i1 = document.createElement("i");
  li1.appendChild(i1);
  i1.setAttribute("class", "fa fa-star");

  let li2 = document.createElement("li");
  uno.appendChild(li2);
  li2.setAttribute("class", "star");
  let i2 = document.createElement("i");
  li2.appendChild(i2);
  i2.setAttribute("class", "fa fa-star");

  let li3 = document.createElement("li");
  uno.appendChild(li3);
  li3.setAttribute("class", "star");
  let i3 = document.createElement("i");
  li3.appendChild(i3);
  i3.setAttribute("class", "fa fa-star");

  let li4 = document.createElement("li");
  uno.appendChild(li4);
  li4.setAttribute("class", "star");
  let i4 = document.createElement("i");
  li4.appendChild(i4);
  i4.setAttribute("class", "fa fa-star");

  let li5 = document.createElement("li");
  uno.appendChild(li5);
  li5.setAttribute("class", "star");
  let i5 = document.createElement("i");
  li5.appendChild(i5);
  i5.setAttribute("class", "fa fa-star");

  const rates = document.querySelectorAll(".star");
  const output = document.querySelector(".output");
  for (let i = 0; i < rates.length; i++) {
    rates[i].starValue = i + 1;

    ["click", "mouseover", "mouseout"].forEach(function (e) {
      rates[i].addEventListener(e, showrating);
    });
  }
  function showrating(e) {
    let type = e.type;
    starValue = this.starValue;
    if (type === "click") {
      if (starValue >= 1) {
        new User(input1.value, input2.value, feedback.value, starValue);
        localStorage.setItem("user", JSON.stringify(userReviw));
      }
    }
    rates.forEach(function (elem, ind) {
      if (type === "click") {
        if (ind < starValue) {
          elem.classList.add("orange1");
        } else {
          elem.classList.remove("orange1");
        }
      }
      if (type === "mouseover") {
        if (ind < starValue) {
          elem.classList.add("yellow1");
        } else {
          elem.classList.remove("yellow1");
        }
      }
      if (type === "mouseout") {
        elem.classList.remove("yellow1");
      }
    });
  }
  let submet = document.createElement("button");
  field.appendChild(submet);
  submet.setAttribute("id", "submetb");
  submet.textContent = "submit";
  form.addEventListener("submit", handelsubmet);

  function handelsubmet(event) {
    event.preventDefault();
    console.log(event);

    window.location.reload();
  }
}

function userfeed() {
  let data = localStorage.getItem("user");

  let parsedData = JSON.parse(data);
  if (parsedData) {
    userReviw = parsedData;
    renderData();
  }
}
let reviws = document.getElementById("userList");
function renderData() {
  console.log("this is the reviw", userReviw);
  for (let i = 0; i < userReviw.length; i++) {
    let reviwsList = document.createElement("li");
    reviws.appendChild(reviwsList);

    reviwsList.setAttribute("id", "reviwfeed");
    reviwsList.textContent = `${userReviw[i].name} built a pv system in ${userReviw[i].location} and he gave his pv system this feedback ${userReviw[i].feed} and rated system with ${userReviw[i].stars} stars `;
  }
}
userfeed();
