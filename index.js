//adds jquery
var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

function readTextFile(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType('application/json');
  rawFile.open('GET', file, true);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4 && rawFile.status == '200') {
      callback(rawFile.responseText);
    }
  };
  rawFile.send(null);
}

function getConsole(){
if (console.everything === undefined)
{
    console.everything = [];

    console.defaultLog = console.log.bind(console);
    console.log = function(){
        console.everything.push({"type":"log", "datetime":Date().toLocaleString(), "value":Array.from(arguments)});
        console.defaultLog.apply(console, arguments);
    }
    console.defaultError = console.error.bind(console);
    console.error = function(){
        console.everything.push({"type":"error", "datetime":Date().toLocaleString(), "value":Array.from(arguments)});
        console.defaultError.apply(console, arguments);
    }
    console.defaultWarn = console.warn.bind(console);
    console.warn = function(){
        console.everything.push({"type":"warn", "datetime":Date().toLocaleString(), "value":Array.from(arguments)});
        console.defaultWarn.apply(console, arguments);
    }
    console.defaultDebug = console.debug.bind(console);
    console.debug = function(){
        console.everything.push({"type":"debug", "datetime":Date().toLocaleString(), "value":Array.from(arguments)});
        console.defaultDebug.apply(console, arguments);
    }
}
}
getConsole();

function jqueryGet(url, callback) {
  $.get(url, function (responseText) {
    callback(responseText);
  });
}

function fetchGet(url,callback){
	fetch(url)
  .then(response => response.text())
  .then(data => {
  	callback(data);
  	console.log(data);
  });
}


function makePanel() {

  //making the html changer
  function HTML(input) {
    panel.innerText = input;
  }

  //making a panel to append all the other buttons

  var buttonPanel = document.createElement('div');
  buttonPanel.id = 'bpanel';
  //buttonPanel.style.float = 'right';
  //buttonPanel.style.float = 'top';
  //buttonPanel.style.marginRight = '0px';
  //buttonPanel.style.marginTop = '0px';
  buttonPanel.style.right = '0px';
  buttonPanel.style.top = '0px';
  buttonPanel.style.position = 'relative';
  document.getElementsByTagName('body')[0].appendChild(buttonPanel);

  //generic button
  var Button = document.createElement('button');
  Button.innerHTML = 'Button!';
  Button.style.backgroundColor = 'rgb(0,20,40)';
  Button.style.color = '#ccc';
  
	Button.onclick = function () {
    button();
  };
//  buttonPanel.appendChild(Button);

  //make edit doc button
  var editDocButton = document.createElement('button');
  editDocButton.innerHTML = '📝';
  editDocButton.style.backgroundColor = 'rgb(0,20,40)';
  editDocButton.style.color = '#ccc';
  
	editDocButton.onclick = function () {
    editdocbutton();
  };
  buttonPanel.appendChild(editDocButton);

  //making scripts button
  var scriptsButton = document.createElement('button');
  scriptsButton.innerHTML = 'Scripts';
	
  scriptsButton.style.backgroundColor = 'rgb(0,20,40)';
  scriptsButton.style.color = '#ccc';
  
	scriptsButton.onclick = function () {
    fetchGet(
      '/scripts.js',
    function(txt){ 
			 alert(txt);
        scriptsbutton(txt.split('??'));
        //alert(txt.split('..'));
		}
    );
  };

  buttonPanel.appendChild(scriptsButton);

  //making document code button
  var codeButton = document.createElement('button');
  codeButton.innerHTML = 'docCode';
  codeButton.style.backgroundColor = 'rgb(0,20,40)';
  codeButton.style.color = '#ccc';
  
	codeButton.onclick = function () {
    codebutton();
  };
  buttonPanel.appendChild(codeButton);

  //xray button
  var xrayButton = document.createElement('button');
  xrayButton.innerHTML = 'Xray';
  xrayButton.style.backgroundColor = 'rgb(0,20,40)';
  xrayButton.style.color = '#ccc';
  xrayButton.onclick = function () {
		
    xraybutton();
  };
  buttonPanel.appendChild(xrayButton);
	  //generic button
  var consoleButton = document.createElement('button');
  consoleButton.innerHTML = 'Console';
  consoleButton.style.backgroundColor = 'rgb(0,20,40)';
  consoleButton.style.color = '#ccc';
  
	consoleButton.onclick = function () {
    consolebutton();
  };
  buttonPanel.appendChild(consoleButton);

  //exit button
  var exitButton = document.createElement('button');
  exitButton.innerHTML = 'X';
  exitButton.style.backgroundColor = 'rgb(0,20,40)';
  exitButton.style.color = '#ccc';
  exitButton.onclick = function () {
		
    buttonPanel.remove();
  };
  buttonPanel.appendChild(exitButton);

  //make info panel inside
  var panel = document.createElement('div');
  panel.class = 'scroll';
  panel.style.cssText +=
    'margin:4px, 4px;padding:4px;width: 256px;height: 256px;overflow-x: hidden;overflow-y: auto;text-align:justify';
  panel.style.backgroundColor = 'rgb(0,20,40)';
  panel.style.color = '#ccc';
  buttonPanel.appendChild(panel);
	
  HTML('hello and welcome.... \n \n To the PANEL!!!');

  // .thecode
  //thestyle.innerText += ".avothecode {border: 1px solid white; margin: 5px; margin-top: 10px; border-radius: 10px; padding: 5px; overflow: scroll; text-align: left; height: 90%;}"

  //make scripts generic function
	var scrpt = [];
  function makeScriptButton(scripty, appender,num) {
    //in name | script format
    let scripts = scripty.split(' | ');
    scrpt[num] = document.createElement('button');
		scrpt[num].class = 'scriptButton';
    scrpt[num].style.backgroundColor = 'rgb(0,20,40)';
    scrpt[num].style.color = '#ccc';		
    scrpt[num].onclick = console.log(scripts[1]);
		scrpt[num].innerHTML = scrpt[num].onclick+": "+scripts[0];

    eval(appender + '.appendChild(scrpt[num]);');
  }
  
  
  //button code

  function button() {
    HTML('generic, why are you here');
  }

  function editdocbutton() {
    if (document.body.contentEditable !== 'true') {
      document.body.contentEditable = 'true';
      document.designMode = 'on';
      void 0;
    } else {
      document.body.contentEditable = 'false';
      document.designMode = 'off';
      void 0;
    }
    HTML('edit edit edit...');
		console.log("edit button");
  }

  function scriptsbutton(scripts) {

    HTML('scripts: \n');
		console.log("scripts button");
    for (i = 0; i < scripts.length; i++) {
      makeScriptButton(scripts[i], 'panel',i);
      //if (i % 1 == 0) {
      panel.innerHTML = panel.innerHTML + '\n';
      //}
    }
    //HTML("scripts go here!");
  }

  function codebutton() {
    async function fetchcode() {
      // Fetch Code
      var code;
      var url = await fetch(window.location);
      var res = await url.text();
      code = res;
      HTML('code goes here: \n' + code);
    }
    fetchcode();
		console.log("code button");
  }
	

	function consolebutton() {

			console.log("console");
			let cons = "";
			for(i=0;i<console.everything.length-1;i++){
				let coev = console.everything[i];
				let val = String(coev.value);
				val = val.trim();
				cons = cons+""+coev.type+": "+val+"\n";
			}
		
      HTML('console: \n' + cons);
    
    
  }

  function xraybutton() {
    var script = document.createElement('script');
    script.src = 'https://x-ray-goggles.mouse.org/webxray.js';
    script.className = 'webxray';
    script.setAttribute('data-lang', 'en-US');
    script.setAttribute('data-baseuri', 'https://x-ray-goggles.mouse.org');
    document.body.appendChild(script);
  }
  
}

makePanel();
