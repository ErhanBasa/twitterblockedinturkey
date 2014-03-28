// Window Width
var width = window.innerWidth;

// Create Function
function createBird() {
  
  // Get Random X-Position at Window
  var birdCord = Math.floor((Math.random()*width)+1);

  // Create New Element
  var newDiv = document.createElement("div");
  newDiv.className = "twitter";
  newDiv.style.left = birdCord;
  
  // When Click
  newDiv.onclick = function() {
    document.body.setAttribute("class", "unactive")
  };

  // Append Body
  document.body.insertBefore(newDiv);

}

// Runner
setInterval(function(){
  createBird()
},2000);