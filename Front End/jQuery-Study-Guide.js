  *** jQUERY METHODS *****
  .val(str)                     // gives you the currently-set value of a form element (input, select, textarea) 
  .innerHTML("<p>Hi</p>")         // nested HTML, which builds an HTML string based on the DOM nodes the element contains.
  .text()                         // gets text out of element
  .text('new content')            // sets the content within tag
                                  // cant add tag tho, unlike innerHTML
  .css({property: "value", ...})  // sets the style, 
   "text-weight" or textWeight    //dash props need "" or camel case
  .css("color","red")			  // just prop, value
  .css("propertyName")            // gets the css property value
  
  .attr("src","file.png")         // sets the attribute of element
  .attr("src")                    // gets the value of the attribute
  .data("price")				  // same as .attr('data-price')
  
  .find()                         // instead of looking through entire HTML body, it looks only within the element it's called on
  .filter('')					  // like find, but returns an array?
  
  .hasClass()					  // for control flow of edits with a group of DOM elements
  .addClass()
  .removeClass()
  .toggleClass()
  
  .animate({'top':'-10px'}, 'slow')		 // optional 2nd argument, of ms or description of speed: fast/slow
  .is(selector) //boolean
  .not()      //boolean
  event.preventDefault()		// for links with href="#", prevents navigation to top of page

  ******* METHOD CHAINING *******
  Ex: .first().parent().next().prev()
  //walk up and down the DOM
  
  .prev()
  .next()
  .siblings()
  .parent()
  .closest('.classList') // more specific than parent, find the 1st element UP the DOM tree w/class =list, aka nearest parent

  --> $("ul").children('li')  SAME as   $("ul > li")
  --> $(this).first()         SAME as   $(this:first)
  --> $(this).last()          SAME as   $(this:last) //pseudo element
   
  .find('selector').filter(':first').addClass('')
  
  ******* TRAVERSING the DOM*******
  two parts: selector and traversal (find or filter within the selector DOM element results)
    $("#destination").find('li')
  
  *** SPEED IT UP ***
   1. limit queries across the DOM to make it faster
   2. search within a container using .find()
  

  *** EVENTS ***
  Event delegation
  $('.vacation button').on('click', function callback(){}) //NOT GOOD
  $('.vacation').on('click', 'button', function callback(){}) //2nd arg is specified 

  ***** LOADING THE JQUERY FILE *****
  // make sure the jQuery script tag is @ end of BODY section, not in head. First srcipt tag to load the jquery library, then script with your jquery code.
  // either wrap everything with 
  1. window.onload(/* all jQuery */) 
  2. $(document).ready(function(){ /*everything*/ }) 
  3. $(function(){})

  // If you import the script src="file.js" from within the head tag, you might get an error if you dont wrap your js file in a window.onload() function, otherwise when you try to .click off of an element before the DOM is loaded it will be null and error.

 **** USING DATA- HTML5 attribute *****
//Suggestion
use the data-something attribute to DRY up your code by 
element.addEventListenser('click',functionXYZ)
function functionXYZ(){
  var element = this.attribute[data-something]
  element.className=''
}

  $('.className').on('click',function(){
    var panelID = $(this).attr('data-panelId')
    $('#'+panelID).toggle()
  })

//<p data-price="$399">
$(p).data("price") //gives 399


  ******* SELECTORS  *******
  " " // space is add another condition, like combining id selector with descendent tag
  ,  // comma is or selector

  >  // child selector, direct descendent
  +  // followed by 
  ^= // starts with, used with attribute selectors
  	$("img[alt^='NTT']")
  $= // ends with, good for suffices
  	$("a[href$='pdf']")
  *= // contains
  	$("a[href*='text']")

  $("li:nth-child(3)") //3rd element
  $(email^="mailto:") // for email addresses
  $(x:has(y)) // targets the x tags with y tags inside it 
  $(li:not(:contains(and))) // selects all list items that dont contain the word and

  ContentSelector:
  $("a:contains(gravida)") // Select every a element that contains 'gravida'

  AttributeSelector:
  	tag[attr] // selects a tag element that has a specific attribute specified
  	$('li[name]') //list items with name attributes
  	$('input[type='text']')

  ******* Adding content ******* 
  .innerHTML()
  .text()
  .append()   
  .prepend()                      // to the beginnging of matching container
  .prependTo()						// flip order
  .before("<p>Hi</p>")            // before the matching element
  .after("<p>Hi</p>") 


  ******* Annimations  *******
  .hide(300ms)                    // delete, parameter is ms for how long it takes to go away
  .show(300ms)    
  .slideUp() .slideDown()  .fadeToggle() .toggle()

  .remove()
  .replaceWIth()
  .each(function(index, element){})//can iterate over all items
  $(this) inside a click funtion
  .addClass(classStr)
  .toggleClass(classStr)
  .removeProp()  
  .removeAttr()
  $("#destination li") // are all the nested list items
  $("#destination > li") // is just the children, not grandchildren

//Javascript Tutorial For Beginners LearnCode.academy
  .addEventListenser('click',func) //SAME AS on('click',function)???
  .parentNode
  this.previousElementSibling
  input.setSelectionRange(0, input.value.length)
  this.querySelectorAll()
  this.querySelector("input")

  **** OLD WAY v NEW WAY ***** $(".class") and $("#class")
  document.getElementById('id')
  document.getElementByClassName('class')
  document.getElementByTagName('tag')
  document.querySelectorAll('.class #id tag') //think applies to both tag, id, and class, SAME AS $('')


 
