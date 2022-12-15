// function doSomething(){
//     console.log('Something Happened!');
// }

// addEventListener('click', doSomething);
//the event object
// function doSomething(event){
//     console.log(event.type);
// }
//the event target
// function doSomething(event){
//     console.log(event.target);
// }
//coordinates of an event
// function doSomething(event){
//     console.log(`screen: (${event.screenX},${event.screenY}), page: (${event.pageX},${event.pageY}), client: (${event.screenX},${event.screenY})`)
// }
//mouse events
const clickParagraph = document.getElementById('click');

clickParagraph.addEventListener('click',() => console.log('click') );
clickParagraph.addEventListener('mousedown',() => console.log('down') );
clickParagraph.addEventListener('mouseup',() => console.log('up') );

// const dblclickParagraph = document.getElementById('dblclick');
// dblclickParagraph.addEventListener('dblclick', highlight);

// function highlight(event){
//     event.target.classList.toggle('highlight');
// }

// const mouseParagraph = document.getElementById('mouse');
// mouseParagraph.addEventListener('mouseover', highlight);
// mouseParagraph.addEventListener('mouseout', highlight);

// mouseParagraph.addEventListener('mousemove', () =>  console.log('You Moved!') );
// //keyboard events
// addEventListener('keydown',highlight);

// addEventListener('keyup', (event) => console.log(`You stopped pressing the key on ${new Date}`));
// addEventListener('keypress', (event) => console.log(`You pressed the ${event.key} character`));

// ///modifier 
// addEventListener('keydown', (event) => console.log(`You pressed the ${event.key} character`));

// addEventListener('touchend', () => console.log('Touch stopped');

// //remove event listeners
// const onceParagraph = document.getElementById('once');
// onceParagraph.addEventListener('click', remove);

// function remove(event) {
//     console.log('Enjoy this while it lasts!');
//     onceParagraph.style.backgroundColor = 'pink';
//     onceParagraph.removeEventListener('click',remove);
// }
// //stippoing default behavior 
// const brokenLink = document.getElementById('broken');

// brokenLink.addEventListener('click',(event) => {
//     event.preventDefault();
//     console.log('Broken Link!');
// });

// //Bubbling
// ulElement = document.getElementById('list');
// liElement = document.querySelector('#list li');

// ulElement.addEventListener('click', (event) =>
// console.log('Clicked on ul') );

// liElement.addEventListener('click', (event) =>
// console.log('Clicked on li') );

// //Capturing
// ulElement.addEventListener('click', (event) =>
// console.log('Clicked on ul'),true);

// liElement.addEventListener('click', (event) =>
// console.log('Clicked on li'),true);

// // capturing

// ulElement.addEventListener('click', (event) =>
// console.log('Clicked on ul'),true);

// liElement.addEventListener('click', (event) =>
// console.log('Clicked on li'),true);

// // bubbling

// ulElement.addEventListener('click', (event) =>
// console.log('Clicked on ul'),false );

// liElement.addEventListener('click', (event) =>
// console.log('Clicked on li'),false );

// //stopping bubbling phase
// liElement.addEventListener('click', (event) => {
//     console.log('clicked on li');
//     event.stopPropagation(); }, false);