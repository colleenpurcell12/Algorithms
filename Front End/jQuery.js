
//***** Summary of content:
  // how to change the style of a DOM element, multiple properties at same time
  // how to select an element by starts with, ends with, contains
      // as well as inside of/children, after/followed by, and nth element
  // methods on elements 
  ///*****
  
  //you can use $(this) inside a on click function to get the entire HTML of the clicked 
  


// Remove a /*class with*/ this.className = ""

$("#ID") is the same as document.getElementById("ID")
$(".class") same as document.getElementByClassName("ID")

document.getElementById("name").value = 
  document.getElementById("name").value.toUpperCase()


document.getElementById("clear").onclick = function(){
	document.getElementById("name").value = ""

}

document.getElementById("name").style.color = red

Style:
$("#ID").css("width", 500)
$("#ID").css("margin", "auto")

Multiple arguments

$("#p_two").css({
	"width": 500;
	"margin", "auto";
})

Compound selectors all linked inside the table

$("#tableData a").css("color","red")

//+ followed by
$("em + a")

//em elements inside paragraphs, children elements
$("p > em")

//3rd element 
$("#lists > li:nth-child(3)")

//list items with name attributes
$('li[name]').html("now the list items says this!") //innerHTML

//an input tag with type attribute of text, change it's value to Colleen
$('input[type='text']').val("Colleen") //value

//a link with a ref that contains google
$("a[href*='text']").css("font-weight","bolder")

//^= starts with 
$("img[alt^='NTT']").css({"border-color": "black",
             "border-width":"1px",
             "border-style":"solid"});

 //link url starts with 
  $("a[href^='http://g']").css("color", "cyan");
 //email address starts with:
  $("a[href^='mailto:']").css("color", "yellow");


//chaining
.width(500).height(350

//$= start from the end like suffix
  // Target items that end with ($=) a value
  $("a[href$='pdf']").css("color", "red");
 
//style rows of a table
  // Select the odd (1,3,5) and even (0,2,4) items
  $("#tableData tr:even").css("background-color", "#FFFDD0");
  $("#tableData tr:odd").css("background-color", "#F0F8FF");
 
  // Select the first matching element
  $("#tableData tr:first").css({"background-color" : "#001A57", "color" : "white"});
 
  // Select the last matching element
  $("#tableData tr:last").css("background-color", "#FFC0DB");
 
  // Select the elements that don't contain 'and' in them
  $("#oListTypes li:not(:contains(and))").css("color", "red");
 
  // Select every a element that contains 'gravida'
  $("a:contains(gravida)").css("color", "blue");
 
  // Select every p element that contains a i element
  // and hide it
  $("p:has(i)").hide();



// Display the text between the matching p element
  alert($("p:has(i)").html());
 
  // Change the text in the matching p element and show it
  // .text() works the same but it doesn't recognize html
  // elements
  $("p:has(i)").html("<i>Some normal text</i>").show();
 
  // Append adds text at the end of an element
  $("p:has(i)").append(" I go at the end");
 
  // Prepend adds text at the beginning of an element
  $("p:has(i)").prepend("I go at the beginning ");
 
  // Add a new element before the targeted one
  $("p:has(i)").before("<p id='before_p'>A new paragraph before</p>");
 
  // Add a new element after the targeted one
  $("p:has(i)").after("<p id='after_p'>A new paragraph after</p>");
 
  // When the element with the id 'after_p' is clicked
  // remove it from the document
  $("#after_p").click(function() {
    $(this).remove();
  });

 
  // Replace an element with another on click
  $("#before_p").click(function() {
    $(this).replaceWith('<p>I\'m the new paragraph</p>');
  });
 
  // Perform a different action on each matching element
  $("#oListIndent li").each(function(index) {
 
    // Get the value in the input element
    var inputListStuff = $("#listStuff").val();
 
    // Assign a new value to the input element
    // $(this).text() gets the value for each individual
    // li element
    $("#listStuff").val(inputListStuff + ", " + $(this).text());
 
  });







