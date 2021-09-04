// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

//1.0 pull 'main' from html CORRECT;
const mainEl = document.querySelector('main');

//1.1 set color to custom color
mainEl.style.backgroundColor = 'var(--main-bg)';


//1.2 setting 'main' content FIX
mainEl.innerHTML = '<h1>SEI Rocks!</h1>';

//1.3 providing class to 'main' CORRECT
mainEl.setAttribute('class', 'flex-ctr');

//2.0 pull 'nav' by ID
const topMenuEl = document.getElementById('top-menu');

//2.1 set height to 100%
topMenuEl.style.height = '100%';

//2.2 set background color to --top-menu-bg
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

//2.3 add class of flex-around 
topMenuEl.setAttribute('class', 'flex-around');

//3.1 *use foreach to: create 'a' element, *On the new element, add an href attribute with its value set to the hrefproperty of the "link" object, *Set the new element's content to the value of the textproperty of the "link" object, *Append the new element to the topMenuElelement.

// menuLinks.forEach(
//     document.createElement<a>
// )

for(let menuLink of menuLinks) {
    let aEl = document.createElement('a');
    aEl.setAttribute('href', menuLink.href);
    aEl.innerHTML = menuLink.text;   
    topMenuEl.append(aEl);
}

//menuLinks.forEach(menuLink => document.createElement<a>);

//console.log(topMenuEl);
//console.log(mainEl);
console.log(menuLinks);
