
var widgetNavigatorIndexElem;
switch(document.referrer) {
	case "http://mujinote.github.io/index.html": 
	case "http://mujinote.github.io/": 
		break; 
	default: 
	
		widgetNavigatorIndexElem = document.getElementById('widget-navigator--index'); 
		widgetNavigatorIndexElem.className = '_includes';

		break; 
}