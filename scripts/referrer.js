
var widgetNavigatorIndexElem;
switch(document.referrer) {
	case "http://mujinote.donghyuc.com/index.html": 
	case "http://mujinote.donghyuc.com/": 
		break; 
	default: 
	
		widgetNavigatorIndexElem = document.getElementById('widget-navigator--index'); 
		widgetNavigatorIndexElem.className = '_includes';

		break; 
}