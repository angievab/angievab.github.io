//Going Global
// x = 6;  // global variable created

// window.x // same variable can be accessed as a property of the window object

// both variables are exactly the same
// window.x === x;

// va a lanzar error por no estar definido
// if (x) { 
//     // do something
// }

// However, if the variable is accessed as a property of the window object,
// then the code will still work, as window.x will simply return false,
// meaning the block of code will not be evaluated:
// if (window.x) {
//     //do something
//     }

// The window.alert() method will pause the execution of the program and 
// display a message in a dialog box. The message is provided as an argument 
// to the method, and undefined is always returned:
//  window.alert('Hello');
// << undefined

// <!-- The window.confirm() method will stop the execution of the program and display
//  a confirmation dialog that shows the message provided as an argument, 
//  and giving the options of OK or Cancel. It returns the boolean values
//   of true if the user clicks OK, and false if the user clicks Cancel: -->
//   window.confirm('Do you wish to continue?');
// //<< undefined

// <!-- The window.prompt() method will stop the execution of the program. 
// It displays a dialog that shows a message provided as an argument, 
// as well as an input field that allows the user to enter text. 
// This text is then returned as a string when the user clicks OK. 
// If the user clicks Cancel, null is returned: -->
// window.prompt('Please enter your name:');

// <!-- browser history 
// he window.history property can be used to access information about 
// any previously visited pages in the current browser session. 
// The window.history.length property shows how many pages have
//  been visited before arriving at the current page.

//  The window.history.go() method can be used to go to a specific page, where 0 is the current page:
//  window.history.go(1); // goes forward 1 page
// window.history.go(0); // reloads the current page
// window.history.go(-1); // goes back 1 page
// the window.history.forward() and window.history.back() methods that can be used to navigate 
// forwards and backwards by one page respectively, just like using the browser’s forward and back buttons. -->

// <!-- Controlling Windows
// A new window can be opened using the window.open() method. This takes the URL of 
// the page to be opened as its first parameter, the window title as its second parameter, 
// and a list of attributes as the third parameter.
// const popup = window.open('https://sitepoint.com','
// SitePoint','width=400,height=400,resizable=yes');

// The close() method can be used to close a window, assuming you have a reference to it:
// popup.close();

// It is also possible to move a window using the window.moveTo() method. 
// This takes two parameters that are the X and Y coordinates of the screen 
// that the window is to be moved to:
// window.moveTo(0,0); // will move the window to the top-left corner of the screen

// You can resize a window using the window.resizeTo() method. 
// This takes two parameters that specify the width and height of the resized window’s dimensions:
// window.resizeTo(600,400); -->

// <!-- Creating Cookies
// To create a cookie, you assign it to JavaScript’s 
// “cookie jar”, using the document.cookie property, like so:
// document.cookie = 'name=Superman';

// The document.cookie property acts like a special type of string. 
// Assigning another cookie to it won’t overwrite the entire property,
//  it will just append it to the end of the string. 
//  document.cookie = 'hero=true';

// document.cookie = 'city=Metropolis';

// A cookie’s value can be changed by reassigning it to
// document.cookie using the same name but a different value.
//  document.cookie = 'name=Batman'

// document.cookie = 'city=Gotham'

// To see the current contents of the cookie jar, simply enter document.cookie:

// const cookies = document.cookie.split("; ");
// for (crumb of cookies){
//     const [key,value] = crumb.split("=");
//     console.log(`The value of ${key} is ${value}`);
// }
// //<< The value of name is Batman
// //The value of hero is true
// //The value of city is Gotham

// Cookies are session cookies by default. This means they are deleted once 
// a browser session is finished (when the user closes the browser tab or window). 
// Cookies can be made persistent ― that is, lasting beyond the browser session ― 
// by adding "; expires=date" to the end of the cookie when it’s set, where date 
// is a date value in the UTC String format Day, DD-Mon-YYYY HH:MM:SS GMT. 
// The following example sets a cookie to expire in one day’s time:

// const expiryDate = new Date(); 
// const tomorrow = expiryDate.getTime() + 1000 * 60 * 60 * 24;
// expiryDate.setTime(tomorrow);

// document.cookie = `name=Batman; expires=${ expiryDate.toUTCString()}`;

// Adding the string ; secure to the end of a cookie will ensure it’s 
// only transmitted over a secure HTTPS network:
// document.cookie = 'name=Batman; secure';

// To remove a cookie, you need to set it to expire at a time in the past:
// document.cookie = 'name=Batman; expires=Thu, 01 Jan 1970 00:00:01 GMT'; -->