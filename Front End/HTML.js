HTML.js

document load event and document ready event?
// ready means DOM is ready,
// while load means the page fully loaded, includes images and all content

Comment <!-- Here-->

What does a doctype do?
//Instruct the browser to render the page.

//The <!DOCTYPE> declaration must be the very first thing in your HTML document, before the <html> tag.
// it's not an HTML tag; it is an instruction to the web browser about the version of HTML that the page is written in.


Whats the difference between full standards mode, almost standards mode and quirks mode?
// In full standards mode, the behavior is the behavior described by the HTML and CSS specifications. aka the css box model.
// In almost standards mode, there are only a very small number of quirks implemented.
// quirks is a mode that differs arcoss browsers

Whats the difference between HTML and XHTML?
	// XHTML is an extended, stricter version of HTML
	// In HTML for example is that start tags arent alwasy required, cas insensitive, attributes do no need to be quoted, attr can be empty, must include HTML5 DOCTYPE.
	//
Are there any problems with serving pages as application/xhtml+xml?
// The XHTML page must be well formed. If you forgot to close an element and the browser doesnt closed it, it'll cause an error. And some old browsers dont support it

How do you serve a page with content in multiple languages?
** see below **

What kind of things must you be wary of when design or developing for multilingual sites?
// 1.You must have translated/localized pages on the server for each language you intend to support.
// 2. Your server must recognize the browser’s language request.
// 3. Files for the localized pages must have a naming convention so the server has a way of locating them
// 4. A back up, generic page for when you cant accomodate the requested langage

What are data- attributes good for?
	// intended to store custom data private to the page or application, for which there are no more appropriate attributes or elements.
	// storing extra information on standard, semantic HTML elements 
	// makes it easier to acess them with JS
	var article = document.getElementById('cars');
	article.dataset.columns // "3"
	article.dataset.indexNumber // "12314"
	article.dataset.parent // "cars"
	// use attribute selectors for style in CSS article[data-columns='3'] {


Consider HTML5 as an open web platform. What are the building blocks of HTML5?
// more semantic text markup.
// new form elements.
// vedio and audio.
// new javascript API.
// canvas and SVG.
// new communication API.
// geolocation API.
// web worker API.

Describe the difference between a cookie, sessionStorage and localStorage.
// Local Storage
	//**** persistant 
	// stores data with no expiration date
	//two types
		// 'default' = stores things in name/value pairs
		// Web SQL (aka Web Database) = uses a SQL database

// Session Storage 
	// non persistent, stores data for one session
	// scoped only to the current window (stores data for one session)

// Cookies = the old school way of doing session stories. Stores name/value pairs per domain.

// Web Storage is more secure and faster. The data is not included with every server request, but used ONLY when asked for. It is also possible to store large amounts of data, without affecting the website's performance.


Describe the difference between <script>, <script async> and <script defer>.


Why is it generally a good idea to position CSS <link>s between <head></head> and JS <script>s just before </body>? Do you know any exceptions?


What is progressive rendering?


Have you used different HTML templating languages before?






