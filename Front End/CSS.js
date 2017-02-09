CSS

Inheritence in CSS

***** SECTION #1 ****

Center positions
Invisible/Disappear

Favorite CSS HACK 
//for when you wanna center something hori and vert, you can set parent position to relative, set its position to absolute, make all sides zero offset, and margin to auto!!

//an icon w/ pos absolute*/
	.icon{position: relative} /*parent element */
	.icon::after{				/*child pseudo element */
		Position: absolute;
		Top: 0;
		Right: 0;
		Left: 0;
		Bottom: 0;
		Margin: auto; //HERE
	}

Ways to make an element disappear
	// display: none
		//also hides the element but will not occupy space. It will not affect the layout of the document.
	// visibility: hidden
		//simply hides the element but it will occupy space and affect the layout of the document.
	// margin: -1000px
	// text-indent: -1000px

*** SHORT QUESTIONS ***

CSS is case insensitive.
face of font in CSS is changed by “font family” 
group selectors with space /*for*/ inside, and comma /*for*/ or
Selectors
	Child: > /*for*/ applying style to parent element that will go to children

Mobile design elements
	//columns and nav bar should be stacked

Conditional in CSS
	// <!—if [ IE 8] >
	// <style type=”text/css”> </style>
	// <! [end if] -->
	// style for when the browser is IE 8 


How do you serve your pages /*for*/ feature-constrained browsers?  What techniques/processes do you use?

 How would you approach fixing browser-specific styling issues?
 	// add a -webkit- prefix to properties that might not be supported in browsers like IE
 	// example: 
 	display: -webkit-flex
	-webkit-align-self: center
	-webkit-flex-grow: 1

	//fall back provided by modernizer for when a browser doesn’t support flex box

Attribute selector// Tag[attribute=value]{}  --> 
	input[type=submit]{ width: 120px; }
Form Input types //search, email, date, tel, number, range, color
Values /*of*/ the display property:// inline, block, flex, inline-flex
Diff btw classes and IDs // classes can include more than one element, syntax: .class{} #id{}
W3C is //World Wide Web Consortium.

advantages of CSS// Accessibility, Multiple Device Compatibility, Page will load fast, Maintenance is Easy

******* BIGGER QUESTIONS ***
SELECTORS
FLOATS
CLEARING FLOATS
FLEXBOX
GRIDS

Selectors 
  // browser matches a selection from RIGHT to left, and from child to parent
  
  // selectors can be of element by tag, class via .class, ID and via #id, or Compound selectors
  Ruleset // is used to identify that selectors can be attached with other selectors. It has two parts: Selector and Declaration
  Universal selector // * {  }

// div, p  - OR ps or divs
// div  p  - DESCENDENT selector: space, p elements inside <div> elements
// div > p - PARENT <p> immediate parent is a <div> element
// div + p - RIGHT AFTER ps immediately after divs
// div ~ p - BEFORE <p> elements before a <div> element

a[href^="https"] // a tags with href attr starts with “https”
a[href$=".pdf"] // a tags with href attr ends with ".pdf"
a[href*="css"] // a tags with href attr contains with ".pdf"

Units 
// cm - centimeters
// em - elements (i.e., relative to the font-size of the element; e.g., 2 em means 2 times the current font size)
// in - inches
// mm - millimeters
// pc - picas (1 pc = 12 pt = 1/6th of an inch)
// pt - points (1 pt = 1/72nd of an inch)
// px - pixels (1 px = 1/96th of an inch)

Describe Floats and how they work.
// It's a box that is taken out of the normal document flow, pulled to the left or right and let the following content flow along its side.

// They are still in the flow of the page, but whereas the elements used to be stacked vertically, now they're side by side. Very commonly used for things like navigations.

// Has an annoying collapsing effect on the parent container. Fixed by clearing the float in the container.


What are the various clearing techniques and which is appropriate /*for*/ what context?
 //Problem: If the parent container of the floated element isn’t as tall, must specifically be cleared

// 1. Empty div method: add a empty div with the "clear: both" style, but its not clear or efficient code
	<div style="clear:both;"></div>

// 2. Overflow Method
	overflow: hidden;  //on parent will expand it to contain the floats.
	// .container expands to the height of our floated elements, drawbacks of this method is the fact that any child content that pokes outside the container element is going to either get clipped (assuming a value of hidden) 

// 3. Clearfix/Psuedo Method
	// is a great fix, it makes the floating elements "self clear" but giving them the clearfix class="group" and the clearing the after pseudo element
	// Simple, effective, semantic, and easily reusable.
		.group:after { 
			content: ""; 
			visibility: hidden; 
			display: block; 
			height: 0; 
			clear: both;
		}
//bad // 1. Clear (clear: both) 
	// give a clear both style to the subsequent elements so they wont be next to floating elements, but instead below them
	// drawbacks: are that border isn’t adjusted so the floated element's parent container's border cuts through it
	// the style is dependent on the element's order, wont work if elements are later moved around 
	// Best use of tables, old school, not great for floats
	// not very semantic



Flexbox
	//concept is a collection of properties for adjusting layout based on screen size
	Flex container makes all children flex align items
	flex-direction
		// Main axis is horizontal with flex-direction row, cross axis is y-axis
		//  should be column for mobile to stck everything
	display: flex // creates context for children
	flex-grow: 1 (same as flex: 1) //ratio of equal to silbings, even spacing
	Justify-content: //flex-start is justify left/top, center, space-between, and space-around
	align-items //layout of items along cross axis
		//values are stretch, flex-start, flex-end, center and baseline
	align-self // how a single flex item is aligned on the cross axis
	Order // which elements are first, oridinal from lowest to highest, left to right, or top to bottom for flex-direction: columns
	 
	// Ex: Flex-direction: column and Justify-content: center; means it’s vertically centered
	

Grid system
	// I like to use bootstrap's grid system
	//Making it work--
		// 1. Reset box model: 
			.row, .column { box-sizing: border-box; }
			// since default padding and border is including in width/height which hinders responsiveness, enables fluid % widths
		// 2. Clear floating elements
			.row:before, .row:after {
			    content: " ";
			    display: table;
			}
		// 3. Make columns position relative for their inner elements, and float left, then they become block
		// 4. Gutters
		.column { margin-left: 1.6%; }
		// 5. set width of various columns, using grid of 12 across
			// it's the width of n columns + gutterSize*(n-1)
		// 6. then use media query to make sure all of the grid/columns are stacked vertically for small screens with a media query, giving them all width: atuo and float: none

Are you familiar with styling SVG?
 

***** MEDIUM QUESTIONS *****

	PSEUDO CLASSES
	PSEUDO ELEMENTS
	WAYS TO CENTER
	MEDIA QUERIES
	RESPONSIVE DESIGN
	RESPONSIVE v ADAPTIVE
	RELATIVE v ABSOLUTE POSITIONED
	CASCADING
	WAYS TO INTEGRATE CSS
	RESETTING v NORMALIZE
	

Pseudo /*class*/
	// Li:last-child{}   --> Conditionally target based on state or position
	// :hover
	// :focus
	// :active
	// :visited
	// li:nth-child(even)
	// li:nth-child(odd)
	// li:nth-child(an+b)		start at b, every a
	// 3n  --> is every 3rd element
	// :first-child

Describe pseudo-elements and discuss what they are used /*for*/ .
// pseudo-elements like ::before and ::after, and ::first-letter, ::first-line

// format the first letter of the text 
	// 	p::first-letter {
	// 	    color: #ff0000;
	// 	    font-size: xx-large;
	// }
// or add a quote background image before a paragraph without adding an empty div
	// h1::before {
	//     content: url(quote.gif);
	// }

Ways to center content that is block and inline?
	//Block level: declare width less than parent container, then declare margin-left and right: auto (aka MARGIN: 0 AUTO)

	//Inline or inline-block use *** TEXT ALIGN ***: center

Breakpoints
	// Definition A: any media query that adjusts layout at a certain width
	// Definition B: points at which your sites content will respond with a adjusted layout. key part of Responsive Design

	// **should be based on the content not device widths, major and minor breakpoints
	//example bigger header for large screens, vertically stacked nag for smaller

Have you used or implemented media queries or mobile specific layouts/CSS?
// and is "and", and or is comma for either or (&& v ||)
// Meadia features inside media queries (or rules) that you can set are:
	// min-width
	// max-width
	// orientation
	// resolution
 //**this style shold go at the bottom of style sheet
 //media types: handheld, print, or screen
 @media screen and (max-width: 870px){  body{ font-size: 16px} }
 @media screen and (orientation: portrait/landscape){
// to replace columns for mobile: clear floats to none (so no horiz stacking, only vertical) and container width: inherit to get the full width of the viewport
// for responsive images make them flexable and to scale by replacing fixed width, Img{ max-width: 100% } 

 media_type: 
// all | aural | braille | handheld | print |
//   projection | screen | tty | tv | embossed | speech
 media_feature: 
//    width | min-width | max-width
//   | height | min-height | max-height
//   | aspect-ratio | min-aspect-ratio | max-aspect-ratio
//   | color | min-color | max-color
//   | color-index | min-color-index | max-color-index
//   | monochrome | min-monochrome | max-monochrome
//   | resolution | min-resolution | max-resolution
//   | scan | grid

Responsive design
	// more sustainable way to make sites for multiple screen sizes
	// fluid images, fluid content, and media queries
	// as opposed to print design that used fixed px values
			// from photoshop to wireframes with relative sizes
	// media queries for switching from web to mobile and stacking columns.
	// em is a relative unit

 How is responsive design different from adaptive design?
	// adaptive is selectively optimized for context youre targeting, like a specific screen size
	// while Reponsive is more optimal since it is flexible and universal for all screen sizes and everything in between, it's a fluid site with series breakpoints

	//RWD stands for Responsive Web Design. This technique is used to display the designed page perfectly on every screen size and device. For example: Mobile, Tablet, desktop, laptop etc. You don't need to create a different page for each device.

Whats the difference between a relative, fixed, absolute and statically positioned element?
//	Static: default
//	Relative: within document flow
	// as though they are static, and then offset relative to where they would have been otherwise in the document flow like top: -.5em
// 	Absolute: outside of document flow, manual positioning
	// **Problem that it’s default set relative to the *window*, unless the parent element has a position: relative
// 	Fixed: stays relative to window, regardless of scrolling

Cascading, how is priority determined? Used to your advantage?
//specificity: Inline-Style, ID, class/pseudo, element

// The lowest priority is an external stylesheet, 
//which is overridden by style in the <head> section of the html file,
// which is overwritten by inline style in a tag, a
//nd then the inline with !important specified next to it

// 	Also within the external file, the 2nd declaration of the property will override the first/above
// it's advantageous because you can set the default at the top of the page, and get more specific/custom as you go down the stylesheet

Ways to Integrate CSS to a web page?
// three methods 

	// Inline method-- in a element tag
	// Embedded/Internal method --within the <head> section of the HTML page inside the <style> tag.
	// Linked/Imported/External method--control the styles of multiple documents from one file, reusable, <head> <link rel="stylesheet" type="text/css" href="mystyle.css"> </head>

Whats the difference between "resetting" and "normalizing" CSS? Which would you choose, and why?
// Reset removes all the default styling applied by the browser, zeros out all style, no margin or padding 

// Normalize is a base stylesheet, 
	//BENFITS: 
		// Preserves the helpful style 
		// AND helps make it consistent across the browsers, 
		// good starting point with useful default styles like for font, margins, and line height.
	// USAGE: in head tag <link rel=”stylesheet” href=”css/ normalize.css”>


***** BOX MODEL *****

Explain your understanding of the box model and how you would tell the browser in CSS to render your layout in different box models.

// For display purpose, every element in the page is considered a box. The box model refers to the specification of the box attributes such as the width, padding, border and margin.

// You can change the box model by setting the box-sizing property. Some values are: content-box (default), padding-box, and border-box)

	// Content-box: width & height includes content but not padding/border/margin

	// Padding-box: include up to padding

	// Border-box: include up to border, but not margin FOR GRID

// it defines the design and layout of elements of CSS

	// (Aside: margins touching other element's margins collapse to the larger one, not combined)


 What does * { box-sizing: border-box; } do? What are its advantages?
// emcompasses the padding and border into the width of a block element
//enables responsive design

*** OTHER****
 

Difference btw inline-block and block?
// Block elements stretch the entire width of their container
// Elements with display:inline-block are like display:inline elements, but they can have a width and a height. That means that you can use an inline-block element as a block while flowing it within text or other elements


 Describe z-index and how stacking context is formed.
// The z-index property specifies the stack order of an element.
// An element with greater stack order is always IN FRONT/ON TOP of an element with a lower stack order.

// It only works on **positioned** elements (position:absolute, position:relative, or position:fixed).

// z index of elements positioned absolute >>> than positioned fixed

// Auto: Sets the stack order equal to its parents. 
// Number: Orders the stack order. 
// Initial: Sets this property to its default value (0). 
// Inherit: Inherits this property from its parent element.

 What are some of the gotchas /*for*/ writing efficient CSS?
 // Avoid key selectors that match large numbers of elements (tag and universal selectors)
 // Prefer class and ID selectors over tag selectors
 // Avoid redundant selectors
 // Preferably don't use * (universal selector)

// collapsing margins
// using too many CSS files (>2)
// not naming classes generic enough to reuse and follow DRY principle
// Ignoring Browser Compatibility like not testing in IE
// Not Accounting for Smaller Browser Resolutions impact on your design

// not understanding how position:absolute; works in the context of other positioned elements, as in it's absolute relative to window unless parent position:relative
// Not knowing that floated elements should be placed before the content they float over

// Box-model sizes overflow their bounds when a width and height is declared, then padding or borders are applied.

// Ignoring frameworks that can help ensure cross broswer compatibility when you dont need heavy customization, Not using generic classes that you can reuse like .clear .right and .left for floats, using inline CSS can make changes/maintence impossible

 

What are your favourite image replacement techniques and which do you use when?
 //SEE BELOW:

 	Also an answer to :What are the different ways to visually hide content (and make it available only for screen readers)?
 // If you want to use a logo as a (background) image for an anchor tag, you can add a description that doesnt cover the image, by indenting the text out of view (Text-indent: -999px) so that screen readers can still indicate what the image looks like to those who are visually impaired
 // also can use the alt attribute of a img tag

 Explain CSS sprites, and how you would implement them on a page or site.
 //An image sprite is a collection of images put into a single image. 
 //--> By reducing the number of http server requests to lead each separate images, it reduces the loading time and saves bandwidth.

// let's say you want an image to change on :hover, changing the image would cause a delay since it wouldnt be preloaded (and would need a 2nd http request), so you could combine the two logos into one image, then offset the vertical position (by shifting the y-axis of the background-position: 0 -100px) so the 2nd image slides up and the 1st one exits the dimension of the image element
 

****** MORE OBSCURE ****
Cursor property 
 // it changes the user's cursor, example is 
 	//auto value of the cursor property makes it an I over a text area and a hand over a link, 
 	//crosshair +, 
 	//defult is an arrow, 
 	//pointer is pointing hand, 
 	//move or text makes it a "I", 

 Describe BFC(Block Formatting Context) and how it works.
 //It is the region in which the layout of block boxes occurs and in which floats interact with each other.
//created by either the root element, floats, absolutely positions elements, inline-blocks, flex boxes

 
********* MORE QUESTIONS *********
 
 How would you implement a web design comp that uses non-standard fonts?

// #1: use @font-face to render a font (uses src for hard resources)
// #2: can just link to a webfont as a stylesheet, use @import, or javascript

 What existing CSS frameworks have you used locally, or in production? How would you change/improve them?

//Definition: CSS frameworks are the preplanned libraries which makes easy and more standard compliant web page styling.


 How do you optimize your webpages for print?



 What are the advantages/disadvantages of using CSS preprocessors such as SASS, Compass, Stylus, LESS? Describe what you like and dislike about the CSS preprocessors you have used.

// Advantages
// - better oranization from nesting them
// - ability to define variables and mixins
// - have mathematical functions
// - joining multiple files
// - in some cases, cleaner syntaxes

// Disadvantages
// - mainly for designers not comfortable on the command line or programming concepts

 Have you ever worked with retina graphics? If so, when and what techniques did you use?
// Retina images:
// 	Must better pixel density on new iPads
// 	Doubling images size might slow things down
// 	@media screen and (min-device-pixel-ratio: 1.5){ }
// 	Save double size image as log@2x.png
// 	-webkit-backgroun-size:
// Background-size: original size	 w and h


 Is there any reason you'd want to use translate() instead of absolute positioning, or vice-versa? And why?





