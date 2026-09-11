// onionring.js is made up of four files - onionring-widget.js (this one!), onionring-index.js, onionring-variables.js and onionring.css
// it's licensed under the cooperative non-violent license (CNPL) v4+ (https://thufie.lain.haus/NPL.html)
// it was originally made by joey + mord of allium (蒜) house, last updated 2020-11-24

// === ONIONRING-WIDGET ===
//this file contains the code which builds the widget shown on each page in the ring. ctrl+f 'EDIT THIS' if you're looking to change the actual html of the widget

var tag = document.getElementById(ringID); //find the widget on the page

const unistyle = `<style>
  @font-face {
	font-family: 'winlike';
	src: url('../unpkg.com/98.css%400.1.21/dist/ms_sans_serif.woff2');
	font-weight: 400;
	font-style: normal;
}

#we_bring{
	font-family: winlike;
	font-size: 11px!important;
	-webkit-font-smoothing: none;
	color: black; 
	image-rendering: pixelated;
	font-style: normal;
	font-weight: normal;
	padding: 0;
	margin: 0;
	text-shadow: none;
	line-height: 1;
}
#we_bring > div > div > a {
    display: flex;
    justify-content: center;
    margin-bottom: -9px!important;
    text-align: -webkit-center;
}
#we_bring div{
	margin-block: 0;
	margin-inline: 0;
	font-size: 11px;
	line-height: 1;
}
#we_bring a{
font-family: winlike;
text-decoration: underline;
	color: #000099;
	font-style: normal;
	font-weight: normal;
	font-size: 11px;
	padding: 0;
	margin: 0;
	text-shadow: none;
	background-image: none;
	background-color: transparent;
}
#we_bring img{
	padding: 0;
	margin: 0;
	border-radius: 0;
}
#we_bring a:active{
	color: red;
	font-style: normal;
	font-weight: normal;
	font-size: 11px;
	padding: 0;
	margin: 0;
	text-shadow: none;
	background-image: none;
}
#we_bring a:hover{
color: #000099;
outline: none;
	background-image: none;
	font-style: normal;
	font-weight: normal;
	font-size: 11px;
	padding: 0;
	margin: 0;
	text-shadow: none;
}
#we_bring a:visited{
	color: #990099;
	font-style: normal;
	font-weight: normal;
	font-size: 11px;
	padding: 0;
	margin: 0;
	text-shadow: none;
	background-image: none;
}
#we_bring .winbut{
	    
	    position: relative;
	    left: 165px;
	    top: 9px;
	    text-align: left;
}
  </style>`; //whats the onionring.css keep ur stuff in one place 

thisSite = window.location.host; //get the url of the site we're currently on
thisIndex = null;
conterindex = null;

// go through the site list to see if this site is on it and find its position
for (i = 0; i < wsites.length; i++) {
	if (wsites[i].includes(thisSite)) { //4 custom linking
		thisIndex = i;
		break; //when we've found the site, we don't need to search any more, so stop the loop
	}
}
if (thisIndex == null){
	for (i = 0; i < contrsites.length; i++) {
		  if (contrsites[i].includes(thisSite)) { //alt list if i deny lol
		    conterindex = i;
		    break; //when we've found the site, we don't need to search any more, so stop the loop
		  }
	}
}

function we_brandosite() {
  otherSites = wsites.slice(); //create a copy of the sites list
  otherSites.splice(thisIndex, 1); //remove the current site so we don't just land on it again
  randomIndex = Math.floor(Math.random() * otherSites.length);
  location.href = otherSites[randomIndex];
}

if (thisIndex == null && conterindex == null) {
  tag.insertAdjacentHTML('afterbegin', unistyle + `
<div style="width: 188px; height: 94px; background: url('../brooklynights.nekoweb.org/we_bring/window.png'); overflow: hidden">
								<div class="winbut"><img src="https://brooklynights.nekoweb.org/we_bring/but.png" onmousedown="this.src = 'https://brooklynights.nekoweb.org/we_bring/but1.png'" onmouseup="this.src = 'https://brooklynights.nekoweb.org/we_bring/but.png'" onclick="window.open('https://brooklynights.nekoweb.org/we_bring')"></div>
								<div style="width: 100%; text-align: center; margin-top: 15px"><a target='_top' style="display: inline;" href='https://brooklynights.nekoweb.org/we_bring'><img src="../brooklynights.nekoweb.org/we_bring/flag.png"></a><br>
								<div style="margin-top: 7px">wait a bit, ur not listed yet. <a href='javascript:void(0)' target='_top' onclick='we_brandosite()'>random</a></div>
								</div>
							</div>
  `);
}
else if (thisIndex != null) {
  previousIndex = (thisIndex-1 < 0) ? wsites.length-1 : thisIndex-1;
  nextIndex = (thisIndex+1 >= wsites.length) ? 0 : thisIndex+1;

    randomText = `<a href='javascript:void(0)' onclick='we_brandosite()'>random</a>`;

  console.log(`ayy it's a quick check 4 us if the we_bring widget is present. we tire of searching sometimes, it's to make sure no dead end is formed. if u see this - 99% to not worry! we can fix css lol`);
  tag.insertAdjacentHTML('afterbegin', unistyle + `
  <div style="width: 188px; height: 94px; background: url('../brooklynights.nekoweb.org/we_bring/window.png'); overflow: hidden">
								<div class="winbut"><img src="https://brooklynights.nekoweb.org/we_bring/but.png" onmousedown="this.src = 'https://brooklynights.nekoweb.org/we_bring/but1.png'" onmouseup="this.src = 'https://brooklynights.nekoweb.org/we_bring/but.png'" onclick="window.open('https://brooklynights.nekoweb.org/we_bring')"></div>
								<div style="width: 100%; text-align: center; margin-top: 15px"><a style="display: inline;" target='_top' href='https://brooklynights.nekoweb.org/we_bring'><img src="../brooklynights.nekoweb.org/we_bring/flag.png"></a><br>
								<div style="margin-top: 7px"><a target='_top' href="${wsites[previousIndex]}">← previous</a> | ${randomText} | <a target='_top' href="${wsites[nextIndex]}">next →</a></div>
								</div>
							</div>
  `);

}

else { //!!!!-----------------------------ибо не было случая отмены, мы реформить ето в уведому вы где-
console.log(`yo it's we_bring webmaster we couldnt find the widget on ur page and the ring fragmented, you've been added a real while ago don't worry,,,, tbh i'd add a big red button hovering ur whole site with a reminder or even replace ur <body> with cool autistic windows weirdness but i won't i won't im not that cruel dont cancel me plssssss tell brooklynights.nekoweb.org u see this and i'll bring u back (or maybe i'll see that by myseld we dunno but... huh what if i add a false pop-up) if anyone else sees this if u like windows join us ok also i make weird music using windows sounds`);
	tag.insertAdjacentHTML('afterbegin', unistyle + `
<div style="width: 188px; height: 94px; background: url('../brooklynights.nekoweb.org/we_bring/window.png'); overflow: hidden">
								<div class="winbut"><img src="https://brooklynights.nekoweb.org/we_bring/but.png" onmousedown="this.src = 'https://brooklynights.nekoweb.org/we_bring/but1.png'" onmouseup="this.src = 'https://brooklynights.nekoweb.org/we_bring/but.png'" onclick="window.open('https://brooklynights.nekoweb.org/we_bring')"></div>
								<div style="width: 100%; text-align: center; margin-top: 15px; font-size: 11px">we've added u but we couldn't see u adding the widget 4 a while, makin' ur entry a dead end. <a href='https://brooklynights.nekoweb.org/we_bring' target='_top'>contact</a> if this appeared. <a href='javascript:void(0)' target='_top' onclick='we_brandosite()'>random</a></div>
							</div>
  `);
}
console.log('@' + thisSite + ', th: ' + thisIndex +' sorry this is we_bring again');
