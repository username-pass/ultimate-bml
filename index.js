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

function jqueryGet(url, callback) {
  $.get(url, function (responseText) {
    callback(responseText);
  });
}

function makePanel() {
  //making the html changer
  function HTML(input) {
    panel.innerHTML = input;
  }

  //making a panel to append all the other buttons

  var buttonPanel = document.createElement('div');
  buttonPanel.id = 'bpanel';
  buttonPanel.style.float = 'right';
  document.body.appendChild(buttonPanel);

  //generic button
  var Button = document.createElement('button');
  Button.innerHTML = 'Button!';
  Button.style.backgroundColor = '#333';
  Button.style.color = '#ccc';
  Button.onclick = function () {
    button();
  };
  buttonPanel.appendChild(Button);

  //make edit doc button
  var editDocButton = document.createElement('button');
  editDocButton.innerHTML = 'edit';
  editDocButton.style.backgroundColor = '#333';
  editDocButton.style.color = '#ccc';
  editDocButton.onclick = function () {
    editdocbutton();
  };
  buttonPanel.appendChild(editDocButton);

  //making scripts button
  var scriptsButton = document.createElement('button');
  scriptsButton.innerHTML = 'Scripts';
  scriptsButton.style.backgroundColor = '#333';
  scriptsButton.style.color = '#ccc';
  scriptsButton.onclick = function () {
    jqueryGet(
      'https://raw.githubusercontent.com/username-pass/ultimate-bml/main/scripts.js',
      function (txt) {
        scriptsbutton(txt.split('  '));
      }
    );
  };

  buttonPanel.appendChild(scriptsButton);

  //making document code button
  var codeButton = document.createElement('button');
  codeButton.innerHTML = 'docCode';
  codeButton.style.backgroundColor = '#333';
  codeButton.style.color = '#ccc';
  codeButton.onclick = function () {
    codebutton();
  };
  buttonPanel.appendChild(codeButton);

  //make info panel inside
  var panel = document.createElement('div');
  panel.style.backgroundColor = '#333';
  panel.style.color = '#ccc';
  buttonPanel.appendChild(panel);
  HTML('hello and welcome.... <br><br> To the PANEL!!!');

  //make scripts generic function
  function makeScriptButton(script, appender) {
    //in name | script format
    var script = script.split('|');
    var scrpt = document.createElement('button');
    scrpt.innerHTML = script[0];
    scrpt.style.backgroundColor = '#333';
    scrpt.style.color = '#ccc';
    scrpt.onclick = function () {
      alert(script[1]);
    };
    eval(appender + '.appendChild(scrpt);');
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
  }

  function scriptsbutton(scripts) {
    HTML('scripts: <br>');

    for (i = 0; i < scripts.length; i++) {
      makeScriptButton(scripts[i], 'panel');
      //if (i % 1 == 0) {
      panel.innerHTML = panel.innerHTML + '<br>';
      //}
    }
    //HTML("scripts go here!");
  }

  function codebutton() {
    HTML('code goes here');
  }
}
makePanel();
