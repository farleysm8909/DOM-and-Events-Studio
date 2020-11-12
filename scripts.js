// Write your JavaScript code here.
// Remember to pay attention to page loading!

//1: window load
window.addEventListener("load", function(){
  //2: when take off button is clicked
  let takeOffBtn = document.getElementById("takeoff");
  takeOffBtn.addEventListener("click", function(event) {
    //2a: Window confirm lets user know shuttle is ready for takeoff
    let result = window.confirm("Confirm that the shuttle is ready for takeoff");
    if (result) {
      //2b: flight status change
      document.getElementById("flightStatus").innerHTML("Shuttle in flight.");
      //2c: bkgd color change
      document.getElementById("shuttleBackground").style.backgroundColor = "blue";
      //2d: shuttle height increase
      document.getElementById("spaceShuttleHeight").innerHTML += 10000; //23.4.3
    }
  });
});