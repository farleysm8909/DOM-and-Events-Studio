// Write your JavaScript code here.
// Remember to pay attention to page loading!

//1: window load
window.addEventListener("load", function(){
  //variables
  let flightStatus = document.getElementById("flightStatus");
  let bg = document.getElementById("shuttleBackground");
  let shuttleHeight = document.getElementById("spaceShuttleHeight");

  //2: when take off button is clicked
  let takeOffBtn = document.getElementById("takeoff");
  takeOffBtn.addEventListener("click", function(event) {
    //2a: Window confirm lets user know shuttle is ready for takeoff
    let result = window.confirm("Confirm that the shuttle is ready for takeoff");
    if (result) {
      //2b: flight status change
      flightStatus.innerHTML = "Shuttle in flight";
      //2c: bkgd color change
      bg.style.backgroundColor = "blue";
      //2d: shuttle height increase
      shuttleHeight.innerHTML = 10000; //23.4.3
    }
  });

  //3: when land button is clicked
  let landBtn = document.getElementById("landing");
  landBtn.addEventListener("click", function(event) {
    //3a: window alert
    window.alert("The shuttle is landing. Landing gear engaged.");
    //3b: flight status change
    flightStatus.innerHTML = "The shuttle has landed";
    //3c: bkgd color change
    bg.style.backgroundColor = "green";
    //3d: shuttle height change
    shuttleHeight.innerHTML = 0;
  });

  //4: when abort mission is clicked
  let abortBtn = document.getElementById("missionAbort");
  abortBtn.addEventListener("click", function(event) {
    //4a
    let response = window.confirm("Confirm that you want to abort the mission.");
    if (response) {
      flightStatus.innerHTML = "Mission aborted";  //4b
      bg.style.backgroundColor = "green"; //4c
      shuttleHeight.innerHTML = 0;  //4d
    }
  });

  //5: when the up, down, right and left buttons are clicked
  let up = document.getElementById("up");
  let down = document.getElementById("down");
  let left = document.getElementById("left");
  let right = document.getElementById("right");
  let rocket = document.getElementById("rocket");
  rocket.style.position = "absolute";
  rocket.style.left = "0px";
  rocket.style.bottom = "0px";

  up.addEventListener("click", function() {
    movement = parseInt(rocket.style.bottom) + 10 + 'px';
    rocket.style.bottom = movement;
    shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000;
  });

  down.addEventListener("click", function() {
    movement = parseInt(rocket.style.bottom) - 10 + 'px';
    rocket.style.bottom = movement;
    shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) - 10000;
  });

  left.addEventListener("click", function() {
    movement = parseInt(rocket.style.left) - 10 + 'px';
    rocket.style.left = movement;
  });

  right.addEventListener("click", function() {
    movement = parseInt(rocket.style.left) + 10 + 'px';
    rocket.style.left = movement;
  });
});