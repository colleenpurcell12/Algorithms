 
  .hover(onFuncHandler, offFuncHandler) //combo of .mouseover() .mouseout()
  .onclick(func)
  .on(event, data, function)
  .attr("attribute","value")

// If the event we are capturing is the onclick event, the type will be 'click', and if the event is onkeypress, then type will be 'keypress'.

e.type //could be 'click' or 'keypress' if it's an onclick or a onkeypress event
e.target //element the event happend on 

//how to attach an event

documenet.getElementById("button").on("click",data, handlerFunc)
//data is an object, that might have a message property for ex which can be acessed by e.data.propNameMessage

//simplier but less versitile
documenet.getElementById("button").onclick(handlerFunc)

$("#logo").mouseover(function(){
	$("#logo").attr("src","file.png")
})
$("#logo").mouseoff(function(){
	$("#logo").attr("src","file.png")
})

//combine the mouse over and mouse off but giving the .hover(onFunc, offFunc)
$("#h2").hover(function(){
	$("#h2").css("color","green")
}, function (){
	$("#h2").css("color","black")
})

// Perform an action on double click
  $("#logo2").dblclick(function() {
    $("#logo2").attr("src", "ntt-logo-plastic.png");
  });

  // Get the document x and y position on click
  $(document).click(function(e) {
    $("#mClickXPos").val(e.pageX);
    $("#mClickYPos").val(e.pageY);
  });

  // Get the x and y as the mouse moves
  // Use screenX and screenY to get x and y for the screen
  $(document).mousemove(function(e) {
    $("#mMoveXPos").val(e.screenX);
    $("#mMoveYPos").val(e.screenY);
  });

// EVENTS!!
$(document).click(function(e){
	$("input[type=text]").val(e.target.textContent)
})


  // Show key pressed on the keyboard
  // You can also use keydown() and keyup()
  $(document).keypress(function(e){
 
    // e.which returns the keycode which we convert into
    // the key with fromCharCode
    var keyPressed = String.fromCharCode(e.which)//get the keyboard key pressed
    $("#keyPressed").val(keyPressed);
  });

//Form elements 
.blur //clicked into (focus) and then click out off
.change //changed an input element value
.focus
.select


Very general event handling
docElement.on("typeEvent", messageStr, handlerFunc)



// We can assign events with on and pass the event to
  // track, an argument to pass and the function to call
  // You can attach multiple events by seperating them with
  // a space ex. "mouseover keypress"
 
  function showWhatTouched(e){
    alert(e.data.message);
  }
 
  var bsMsg = { message:"Best Selling Touched" };
 
  var teMsg = { message:"Track Events Touched" };
 
  $("#bestSelling").on("mouseover", bsMsg, showWhatTouched);
 
  $("#trackEvents").on("mouseover", teMsg, showWhatTouched);
 














MORE from front end masters:
// browser event driven, single threaded
// 3 ways to add node.onclick, node.attachEvent, and 
// template for event handlers (due to global events)

function (e)
	e =  e || event // event global variable
	var target =  e.target || e.srcElement;
}

//tricking down (descend the tree until the target) v bubbling (up through parent until it's canceled)




//