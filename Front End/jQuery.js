jQuery

// how to change the style of a DOM element, multiple properties at same time
// how to select an element by starts with, ends with, contains
    // as well as inside of/children, after/followed by, and nth element
// methods on elements 
  

  .value(str)                     // form value
  .innerHTML("<p>Hi</p>")         // nested HTML
  .text()                         // cant add tag tho
  .css({property: "value", ...})  // sets the style, 
   "text-weight" or textWeight     //dash props need quotes or camel case
    .css("propertyName")          // gets the css property value
  .attr("src","file.png")         // sets the attribute of element
    .attr("src")                  // gets the value of the attribute
  .hide(300ms)                    // delete, parameter is ms for how long it takes to go away
  .show(300ms)    
  .slideUp() .slideDown()  .fadeToggle() .toggle()             
  .append()   
  .prepend()
  .before("<p>Hi</p>")      
  .after("<p>Hi</p>") 
  .remove()
  .replaceWIth()
  .each(function(index){})    //can iterate over all items in a list for example
  .text()                    //get text out of element
  $(this) inside a click funtion
  .addClass(classStr)
  .toggleClass(classStr)
  .removeProp()  
  .removeAttr()

//Javascript Tutorial For Beginners LearnCode.academy
  .addEventListenser('click',func)
  .parentNode
  this.previousElementSibling
  input.setSelectionRange(0, input.value.length)
  this.querySelectorAll()
  this.querySelector("input")

//SELECTORS
// ^= starts with, used with attribute selectors
// $= ends with, good for suffices
// *= contains
// email^="mailto:" for email addresses
// x:has(y) targets the x tags with y tags inside it 
// selects all list items that dont contain the word and
 li:not(:contains(and))


// TRICK
// make sure script is at end of body, not in head
// either wrap everything with window.onload() or with $(document).read(function(){ /*everything*/ }) or $(function(){})
// If you have the script src="file.js" nested in the head tag, you might get an error if you dont wrap your js file in a window.onload() function, otherwise when you try to .click off of an element before the DOM is loaded it will be null

 .value //gives you the currently-set value of a form element (input, select, textarea) 

 .innerHTML // builds an HTML string based on the DOM nodes the element contains.


// END OF SUMMARY

$("#ID") is the same as document.getElementById("ID);
$(".class") same as document.getElementByClassName("ID)

document.getElementById("name").value = document.getElementById("name").value.toUpperCase()


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







