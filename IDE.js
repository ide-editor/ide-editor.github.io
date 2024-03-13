var myVar555 = "Q"+"n"+"k"+"g"+"W"+"m"+"V"+"6"+"b"+"0"+"A"+"y"+"M"+"D"+"I"+"y";
  setTimeout(function(){
    var FireWidth = window.innerWidth||window.outerWidth;
var FireHeight = window.innerHeight||window.outerHeight;
var GWidth = window.innerWidth||window.outerWidth - 100;
var GGWidth = window.innerHeight||window.outerHeight;
var MyCat = window.innerWidth || window.outerWidth;
var mclassm92Width = window.innerWidth||window.outerHeight;
var KWidth = window.innerWidth||window.outerWidth;
var Dected_Widths = window.innerWidth || window.outerWidth;
var KWidth2 = KWidth + 1;
document.getElementById("filename-input").style.width= mywidth - 10 + "px";
document.getElementById("filename").style.width= mywidth - 100 + "px";
document.getElementById("toLine").style.width= mywidth - 100 + "px";
var CTags = document.querySelectorAll("select");
for(var i = 0, len = CTags.length; i < len; i++) {
var item = CTags[i];
item.style.width = Dected_Widths - 19 + "px";
document.getElementById("Encoding").style.width = Dected_Widths - 98 + "px";
document.getElementById("RunMode").style.width = Dected_Widths - 98 + "px";
document.getElementById("setColorsPicker").style.width = Dected_Widths - 98 + "px";
document.getElementById("LoadFileMode").style.width = Dected_Widths - 98 + "px";
document.getElementById("SaveFileMode").style.width = Dected_Widths - 98 + "px";
document.getElementById("type").style.width="150px";
}
var CButton1 = document.querySelectorAll(".cutstombtn");
for(var i = 0, len = CButton1.length; i < len; i++) {
var item = CButton1[i];
item.style.marginLeft = Dected_Widths - 370 + "px";
document.getElementById("Direction").style.width= Dected_Widths - 95 + "px";
document.getElementById("Read").style.width= Dected_Widths - 95 + "px";
document.getElementById("lineNumbers").style.width= Dected_Widths - 95 + "px";
document.getElementById("QR-type").style.width= Dected_Widths - 95 + "px";
document.getElementById("ffamily").style.width= Dected_Widths - 155 + "px";
document.getElementById("UserAgent").style.width= Dected_Widths - 155 + "px";
document.getElementById("Theme").style.width = Dected_Widths - 110 + "px";
}
var CButton2 = document.querySelectorAll(".cutstombtn2");
for(var i = 0, len = CButton2.length; i < len; i++) {
var item = CButton2[i];
item.style.marginLeft = Dected_Widths - 370 + "px";
}
var CButton3 = document.getElementsByClassName("cutstombtn3")[0];
for(var i = 0, len = CButton3.length; i < len; i++) {
var item = CButton3[i];
item.style.marginLeft = Dected_Widths - 370 + "px";
}
 document.getElementsByClassName("ascii-iframe")[0].style.width = window.innerWidth || window.outerWidth + "px";
document.getElementsByClassName("ascii-topnav")[0].style.width = window.innerWidth || window.outerWidth + "px";
document.getElementsByClassName("ascii-iframe")[0].style.height = window.innerHeight || window.outerHeight - 10 + "px";
document.getElementsByClassName("CloseSsciiCs")[0].style.marginLeft= MyCat - 50 + "px";
document.getElementById("text-editor").style.width = window.innerWidth || window.outerWidth + "px";
document.getElementsByClassName("add_note_btn_loader")[0].style.width= window.innerWidth || window.outerWidth + "px";
document.getElementById("Base64-topnav").style.width= GWidth + "px";
document.getElementsByClassName("fcloseb64")[0].style.marginLeft= GWidth - 108 + "px";
document.getElementById("Preview").type= editor.getOption("mode");
 document.getElementsByClassName("IDE_PREVIEW_IFRAME")[0].style.height= document.getElementsByClassName("CodeMirror")[0].style.height + "px";
 document.getElementsByClassName("mclassm92")[0].style.marginLeft= mclassm92Width-40+"px";
document.getElementById("loadfiletopnav").style.width= KWidth2+"px";
document.getElementsByClassName('CloseFFd')[0].style.marginLeft= FireWidth - 40+"px";
document.getElementById("file-url").style.width= FireWidth - 100 + 'px';
document.getElementById("file-from-url").style.width= FireWidth - 2 + 'px';
document.getElementById("file-from-url").style.height= FireHeight - 10 + "px";
document.getElementById("CloseGSettings").style.marginLeft= FireWidth - 50 + "px";
  },1);

var window_height22 = window.outerHeight || window.innerHeight;
function autocomplete() {
    
    editor.execCommand('autocomplete');
  }
  function undo() {
    
    editor.execCommand('undo');
  }
  function redo() {
    
    editor.execCommand('redo');
  }
  function Replace() {
    
    editor.execCommand('replace');
  }
  function JTL() {
    
    editor.execCommand('jumpToLine');
  }
  function ChangeText(){
    
    document.getElementsByClassName("Save-file-button")[0].innerHTML="Jump To Line " + document.getElementById("toLine").value;
    document.getElementsByClassName("Save-file-button")[0].onclick= function (){
      
    editor.setCursor({line: document.getElementById("toLine").value - 1});
    };
  }
  function loadURL() {
     
   document.getElementById('window').src= document.getElementById('url').value;
  }
  function showAllhidden() {
    
	document.getElementById('find').style.display='block';
	document.getElementById('find').style.marginTop='-30px';
	document.getElementById('id01').style.marginLeft='-60px';
	document.getElementById('grun').style.display='block';
	document.getElementById("Share").style.marginTop="250px";
	document.getElementById("filename-input").style.marginTop='-930px';
  CodeMirror.colorize();
  }
  function viewsource() {
    
    fetch("https://api.allorigins.win/get?url=" + document.getElementById("filename").value)
    .then(response => {
        if (response.ok) {
            return response.json();
        }
       if (response.error) {
            
            alert("error");
        }
    })
    .then(data22 => {
        editor.setOption("mode",data22.status.content_type);
        editor.setValue(data22.contents);
    });
}
function loadsource(src) {
    
    fetch("https://api.allorigins.win/get?url=" + src)
    .then(response => {
        if (response.ok) {
            return response.json();
        }
       if (response.error) {
            
            alert("error");
        }
    })
    .then(data => {
        neweditor.setOption("mode",data.status.content_type);
        neweditor.setValue(data.contents);
    });
}
  function openwitheditor() {
   
   document.getElementById('viewsource-continer').style.marginTop='-600px';
   document.getElementById("Browser").style.display="none";
   editor.setValue(neweditor.getValue());
   editor.setOption("mode",neweditor.getOption("mode"));
  }
  function Load() {
    
  document.getElementById('myfiles').click();
  document.getElementById('id01').style.marginLeft='-600px';
	document.getElementById('find').style.display='block';
	document.getElementById('find').style.marginTop='-30px';
	document.getElementById('grun').style.display='block';
	document.getElementsByClassName("switch-button-loader")[0].style.display="none";
	document.getElementsByClassName("switch-event")[0].style.display="none";
  }
  function SetEditor() {
   
   document.getElementsByClassName('CodeMirror')[0].style.fontFamily= document.getElementById('ffamily').value;
   document.getElementsByClassName('CodeMirror')[1].style.fontFamily= document.getElementById('ffamily').value;
	}
  function getTheme() {
    
  document.getElementById('CTheme').click();
  }
  function NewNote() {
    
  	document.getElementById("text-editor-topnav").style.marginTop="-713px";
  }
  function CopyNoteText(element){
    
   document.getElementById("text4Copy").style.display="block";
   document.getElementById("text4Copy").value= decodeURI(atob(element.getAttribute("data-codes")));
   document.getElementById("text4Copy").select();
   document.execCommand("copy");
   document.getElementById("text4Copy").style.display="none";
    alert("Copied !!");
  }
  function ReadNote(element){
    
    CloseNote();
    editor.setValue(decodeURI(atob(element.getAttribute("data-codes"))));
  }
  function Note() {
    
    var Selected_width = window.innerWidth || window.outerWidth;
    var Selected_widtXh = Selected_width - 20;
    var Selected_widtdh = Selected_width - 60;
    var Selected_widtdX = Selected_width - 300;
    var Selected_widthX = Selected_width - 140;
    document.getElementById("notes").innerHTML+='<br><pre theme="'+editor.getOption("theme")+'" id="note" style="margin-top:-55px;margin-right:-20px;width:'+Selected_widtXh+'px;" data-lang="' + editor.getOption("mode") + '">' + document.getElementById("text-editor").value.replaceAll("<","&lt;") + '\n\n\n</pre><img style="margin-top:-54px;margin-left:10px;" src="icons/time_icon.png" width="25" height="25"><p style="color:rgb(80,80,80);margin-top:-54px;margin-bottom:45px;margin-left:40px;">' + new Date().getHours() + ':' + new Date().getMinutes() + '</p><p><img src="icons/Copy_white.png" onclick="CopyNoteText(this)" data-codes="'+btoa(encodeURI(document.getElementById("text-editor").value))+'" class="copy_note_button" style="width:22px;height:22px;margin-top:-68px;margin-left:'+Selected_widtdh+'px;"></p><p style="margin-top:-9px;margin-left:90px;"><img src="icons/open-with.png" onclick="ReadNote(this)" data-codes="'+btoa(encodeURI(document.getElementById("text-editor").value))+'" class="copy_note_button" style="width:60px;height:110px;margin-top:-119px;margin-left:'+Selected_widthX+'px;"></p></div>';
  	CodeMirror.colorize();
  	document.getElementById("text-editor").value="";
  	var nodes = document.querySelectorAll("#note");
    for(var i = 0, len = nodes.length; i < len; i++) {
        var item = nodes[i];
     document.getElementById("notes_number").innerHTML= document.querySelectorAll("#note").length;
    }
    document.getElementById("note_text_length").innerHTML="0";
  }
  function getNoteLength() {
    
        document.getElementById("note_text_length").innerHTML= document.getElementById("text-editor").value.length;
  }
  function CustomeFont() {
  	
  document.getElementsByClassName('CodeMirror')[0].style.fontFamily= prompt('Custome Font');
  document.getElementById('find').style.display='block';
	document.getElementById('find').style.marginTop='-30px';
	document.getElementById('id01').style.marginLeft='-600px';
	document.getElementById('grun').style.display='block';
  }
  function addNote() {
  	
  	document.getElementById("text-editor").value= editor.getValue();
  	Note();
    CodeMirror.colorize();
    alert("Saving to notepad successfully !!");
  }
function editorOnclick() {
  
  document.getElementById('id01').style.marginLeft='-3000px';
  document.getElementById('id01').style.visibility='hidden';
  document.getElementById('grun').style.display='block';
  document.getElementById('find').style.display='block';
  document.getElementById("Share").style.marginTop="650px";
  var window_height = window.outerHeight || window.innerHeight;
  editor.execCommand("clearSearch");
  document.getElementById("filename-input").style.marginTop="-1000px";
  if (window_height > 1000){
    document.getElementById("filename-input").style.marginTop="-"+window_height*2+"px";
    document.getElementById("filename-input").style.opacity="0";
  }
}
function Click1() {
	
	document.getElementById('id01').style.marginLeft='40px';
 	document.getElementById('find').style.display='none';
	document.getElementById('grun').style.display='none';
	document.getElementById('id01').style.visibility='';
}
function Click2() {
	
	setTimeout(function() {
	  updatePreview();
	}, 150);
	document.getElementById('Run').style.display='block';
	document.getElementById("preview").contentWindow.console.clear();
	document.getElementById("ConsoleLog").innerHTML="";
}
function Click3() {
	
	document.getElementById('id01').style.marginLeft='-600px';
	document.getElementById('find').style.display='block';
	document.getElementById('find').style.marginTop='-30px';
	document.getElementById('grun').style.display='block';
}
function Click4() {
	
	viewSave();
	Dada();
	document.getElementById("filename").placeholder="Enter a filename";
	document.getElementsByClassName("Save-file-button")[0].innerHTML="Save Project";
	document.getElementsByClassName("Save-file-button")[0].onclick= function (){
	  
	  Save();
	};
	document.getElementsByClassName("switch-event")[0].style.display="none";
	document.getElementsByClassName("switch-button-loader")[0].style.display="none";
	document.getElementById('filename').onclick=function(){
	  
	};
}
function ClickZ83() {
  
  document.getElementById('Browser').style.display='block';
  document.getElementById('id01').style.marginLeft='-600px';
  document.getElementById('find').style.display='block';
  document.getElementById('find').style.marginTop='-30px';
  document.getElementById('grun').style.display='block';
}
function ClickX34() {
  
  document.getElementById('id11').style.display='block';
  document.getElementById('id01').style.marginLeft='-600px';
  document.getElementById('find').style.display='block';
  document.getElementById('find').style.marginTop='-30px';
  document.getElementById('grun').style.display='block';
}
function RunBtnOnclick() {
	
 document.getElementById('Runtxt').innerHTML='<img onclick="' + document.getElementById('RunMode').value + '"' + 'src="icons/gRun.png" id="grun">';
 document.getElementById('grun').style.display='block';
 document.getElementById('find').style.marginTop="-30px";
 document.getElementById('Runtxt').style.marginTop="-55px";
}
function AddFileClick() {
  
  document.getElementById('addFile').click();
  document.getElementById('find').style.marginTop='-30px';
}
function RunAsNewWindow() {
  
  window.open(window.URL.createObjectURL(new Blob([editor.getValue()], {type:editor.getOption("mode")})));
  document.getElementById('find').style.marginTop='-30px';
}
function RunAsEditorRun() {
  
  document.getElementById('Run').style.display='block';
}
function ClickV83() {
  
  document.getElementById('ascii-id').style.display='block';
  document.getElementById('id01').style.marginLeft='-600px';
  document.getElementById('id01').style.marginLeft='-600px';
  document.getElementById('find').style.display='block';
  document.getElementById('find').style.marginTop='-30px';
  document.getElementById('grun').style.display='block';
}
function setUserAgent(value) {
  
var iframe= document.getElementById('preview');
var myvar =  document.getElementById('UserAgent').value ;
var __originalNavigator = iframe.contentWindow.navigator;
navigator = new Object();
__originalNavigator.__defineGetter__('userAgent', function () {
   return myvar;
});
document.getElementById('find').style.display='block';
	document.getElementById('find').style.marginTop='-30px';
	document.getElementById('id01').style.marginLeft='-600px';
	document.getElementById('grun').style.display='block';
}
function CustomeUserAgent() {
  
var UAgent = prompt("Enter a UserAgent:");
var iframe= document.getElementById('preview');
var myvar =  UAgent;
var __originalNavigator = iframe.contentWindow.navigator;
navigator = new Object();
__originalNavigator.__defineGetter__('userAgent', function () {
   return myvar;
});
document.getElementById("UserAgent").innerHTML+='<option>'+UAgent+'</option>';
document.getElementById('find').style.display='block';
	document.getElementById('find').style.marginTop='-30px';
	document.getElementById('id01').style.marginLeft='-600px';
	document.getElementById('grun').style.display='block';
}
function setColorsPicker(){
  document.getElementById("Colors_Picker_type").src="ColorPicker.html?mode="+document.getElementById("setColorsPicker").value;
}
function viewSave() {
  
  var window_height = window.outerHeight || window.innerHeight;
  var window_width = window.outerWidth || window.innerWidth;
  document.getElementById("filename-input").style.marginTop= window_height - 1300 + "px";
  document.getElementsByClassName("Save-file-button")[0].style.marginLeft= window_width - 280 + "px";
  document.getElementById('id01').style.marginLeft='-600px';
  document.getElementById("filename-input").style.height="160px";
}
function ShareLink(){
  
  viewSave();
  document.getElementById("textToConvertIt").value= encodeURI(editor.getValue());
  toBase64();
  document.getElementById("filename").value="https://ide-editor.github.io?mode=" + editor.getOption("mode") + '&lineNumbers=' + editor.getOption("lineNumbers") + "&matchBrackets=" + editor.getOption("matchBrackets") + '&readOnly=' + editor.getOption("readOnly").replace("","false") + "&theme=" + editor.getOption("theme") + "&SourceCode=" + document.getElementById("ConvertedText").value;
  Dada();
  document.getElementsByClassName("Save-file-button")[0].innerHTML="Copy URL";
   document.getElementById("filename-input").style.height="160px";
  document.getElementsByClassName("Save-file-button")[0].onclick= function (){
    
    document.getElementById("filename").select();
    document.execCommand("copy");
  };
  document.getElementById("textToConvertIt").value="";
  toBase64();
  document.getElementsByTagName("Share_btn")[0].style.display="block";
}
function Dada(){
  
  document.getElementsByClassName("find-Prev")[0].style.opacity="0";
	document.getElementsByClassName("find-Next")[0].style.opacity="0";
	  document.getElementById("toLine").style.display="none";
	  document.getElementsByClassName("switch-event")[0].style.display="none";
	document.getElementsByClassName("switch-button-loader")[0].style.display="none";
}
function myXonclick() {
  
  document.getElementById('id01').style.marginLeft='-600px';
  document.getElementById('find').style.display='block';
  document.getElementById('find').style.marginTop='-43px';
  document.getElementById('grun').style.display='block';
  document.getElementById('Base64').style.display='block';
  document.getElementById('id01').style.marginLeft='-600px';
  document.getElementById('find').style.display='block';
  document.getElementById('find').style.marginTop='-30px';
}
function my123Click() {
  
  document.getElementById('CustomeFile').style.display='block';
  document.getElementById('id01').style.marginLeft='-600px';
  document.getElementById('find').style.display='block';
  document.getElementById('find').style.marginTop='-30px';
  document.getElementById('grun').style.display='block';
}
function my456Click() {
  
  document.getElementById('settings').style.display='block';
  document.getElementById('id01').style.marginLeft='-600px';
  document.getElementById('find').style.display='block';
  document.getElementById('find').style.marginTop='-30px';
  document.getElementById('grun').style.display='block';
}
function myfunonclick() {
  
  document.getElementById('Notepade').style.display='block';
  document.getElementById('id01').style.marginLeft='-600px';
  document.getElementById('find').style.display='block';
  document.getElementById('find').style.marginTop='-30px';
  document.getElementById('grun').style.display='block';
}
function ErrorLoadFile() {
  
  alert("Error Cannot Load: " + document.getElementById("addFile").files[0].name + ' !');
}
function close54321() {
  
  document.getElementById('Run').style.display='none';
  editorOnclick();
}
function CloseCFile() {
  
  document.getElementById('CustomeFile').style.display='none';
}
function CloseVS() {
  
  document.getElementById('viewsource-continer').style.marginTop='-600px';
}
function OpenVS() {
  
  document.getElementById('viewsource-continer').style.marginTop='-40px';
}
function CloseWindow() {
  
  document.getElementById('Browser').style.display='none';
  document.getElementById('viewsource-continer').style.marginTop='-600px';
  editorOnclick();
}
function CloseSettings() {
  
  document.getElementById('settings').style.display='none';
  editorOnclick();
}
function CloseColorPicker() {
  
  document.getElementById('id11').style.display='none';
  editorOnclick();
}
function Click55() {
  
  document.getElementById('image').click();
}
function QROClick() {
  
  document.getElementById('qr-out').click();
}
function QRIClick() {
  
  document.getElementById('qr-inside').click();
}
function CloseB64() {
  
  document.getElementById('Base64').style.display='none';
  editorOnclick();
}
function CloseNote() {
  
  document.getElementById("Notepade").style.display="none";
  editorOnclick();
}
function CloseASCII() {
  
  document.getElementById('ascii-id').style.display='none';
  editorOnclick();
}
function about() {
  
  document.getElementById('id01').style.marginLeft='-600px';
  document.getElementById('about').style.display='block';
  document.getElementById("library-name").innerHTML="CodeMirror " + CodeMirror.version;
}
function Base64File() {
      
 document.getElementById('files').click();
}
function CloseAbout() {
  
  document.getElementById("about").style.display='none';
  document.getElementById('find').style.display='block';
	document.getElementById('find').style.marginTop='-30px';
	document.getElementById('id01').style.marginLeft='-600px';
	document.getElementById('grun').style.display='block';
	editorOnclick();
}
function loadFileFromURL(value) {
  
  document.getElementById("file-from-url").src= value;
  document.getElementById("file-from-url").type="";
}
function addFile(files) {
  
  document.getElementById("file-from-url").type= files[0].type;
  document.getElementById("file-from-url").src= window.URL.createObjectURL(files[0]);
}
function CopyString() {
  
 document.getElementById("text4Copy").style.display="block";
 document.getElementById("text4Copy").value= document.getElementById("b64").value;
  document.getElementById("text4Copy").select();
  document.execCommand("copy");
  alert("Copied !!");
  document.getElementById("text4Copy").style.display="none";
}

function SetLoadFile() {
  
  if (document.getElementById("LoadFileMode").value=="Load from Local Storage") {
    
    document.getElementsByClassName("Save-file-button")[0].innerHTML="Save Project";
    document.getElementsByClassName("Save-file-button")[0].onclick= Save();
    document.getElementById("filename").placeholder="filename";
    document.getElementById("LoadFile").onclick= function() {
      
      document.getElementById("myfiles").click();
      document.getElementById('id01').style.marginLeft='-600px';
	    document.getElementById('find').style.display='block';
    	document.getElementById('find').style.marginTop='-30px';
    	document.getElementById('grun').style.display='block';
    };
  };
  if(document.getElementById("LoadFileMode").value=="Load from URL Link") {
    
    editorOnclick();
    document.getElementById("LoadFile").onclick= function (){
      
      viewSave();
      document.getElementById("filename").placeholder="Enter a URL...";
    document.getElementsByClassName("Save-file-button")[0].innerHTML="Fetch URL";
    document.getElementsByClassName("Save-file-button")[0].onclick= function() {
      
      editorOnclick();
     fetch("https://api.allorigins.win/get?url=" + document.getElementById("filename").value)
    .then(response => {
        if (response.ok) {
            return response.json();
        }
       if (response.error) {
            
            alert("error");
        }
    })
    .then(data => {
        editor.setOption("mode",data.status.content_type);
        editor.setValue(data.contents);
    });
    };
    };
    document.getElementsByClassName("find-Prev")[0].style.opacity="0";
    document.getElementsByClassName("find-Next")[0].style.opacity="0";
  }
}
function SetSaveFile() {
  
if(document.getElementById("SaveFileMode").value=="Save to Local Storage"){
  
  document.getElementById("dlbtn").setAttribute("onclick",Save());
}
}
function ShareCode() {
  
  document.getElementById("Share").style.marginTop="-300px";
}
function AddRecent() {
  
  document.getElementById("filename-input").style.marginTop= window_height22 - 1300 + "px";
  find();
  document.getElementById("filename-input").style.height="170px";
  Dada();
  document.getElementById("filename").placeholder="Enter a Project Name";
  document.getElementById("filename").onclick=function(){
    
  };
  document.getElementsByClassName("Save-file-button")[0].innerHTML="Save Recent";
  document.getElementsByClassName("Save-file-button")[0].onclick= function (){
    
    document.getElementById("Recent").innerHTML+='<option value="' + btoa(encodeURI(editor.getValue())) + '">' + document.getElementById("filename").value + '</option>';
      editorOnclick();
  };
}
function SelectRecent() {
  
  editor.setValue(decodeURI(atob(document.getElementById("Recent").value)));
}
function lineNumbers() {
  
  if (document.getElementById("lineNumbers").value=="false"){
    
    editor.setOption("lineNumbers", false);
    neweditor.setOption("lineNumbers", false);
  }
  if (document.getElementById("lineNumbers").value=="true"){
    
    editor.setOption("lineNumbers", true);
    neweditor.setOption("lineNumbers", true);
  }
}
function SelectAll() {
  
  document.getElementById("text4Copy").style.display="block";
  document.getElementById("text4Copy").value= editor.getValue();
  document.getElementById("text4Copy").select();
  document.execCommand("copy");
  document.getElementById("text4Copy").style.display="none";
  alert("Copid !!");
}
function CopyProject(){
  
   document.getElementById("text4Copy").style.display="block";
   document.getElementById("text4Copy").value= document.getElementById("text4Copy").value.replaceAll("&lt;","<");
   document.getElementById("text4Copy").value= document.getElementById("text4Copy").value.replaceAll("&gt;",">");
   document.getElementById("text4Copy").select();
   document.execCommand("copy");
   document.getElementById("text4Copy").style.display="none";
   alert("Copid !!");
  CodeMirror.colorize();
  editorOnclick();
}
function ShareProject(){
  
  alert();
}
function SpeedLock() {
  
  document.getElementById("Read").value="nocursor";
  readOnly();
}
function setDirection() {
  
  document.getElementsByClassName("CodeMirror")[0].style.direction= document.getElementById("Direction").value;
}
    function readOnly() {
      
      editor.setOption("readOnly", document.getElementById("Read").value);
      if (document.getElementById("Read").value=="nocursor") {
        document.getElementById("undo").onclick= function() {
          
        };
        document.getElementById("redo").onclick= function() {
          
        };
        document.getElementById("QR_Code_btn").onclick= function() {
          
        };
        document.getElementById("editor").onclick= function() {
          
          
        };
        document.getElementById("addNote").onclick= function() {
          
          
        };
        document.getElementById("search-btn").onclick= function() {
          
          
        };
        document.getElementsByClassName("Share_btn")[0].onclick= function (){
  
};
var editors = document.querySelectorAll(".CodeMirror");
    for(var i = 0, len = editors.length; i < len; i++) {
        var itedm = editors[i];
        itedm.onclick= function (){

    };
    }
      }else {
var editors = document.querySelectorAll(".CodeMirror");
    for(var i = 0, len = editors.length; i < len; i++) {
        var itedm = editors[i];
        itedm.onclick= function (){
autocomplete();
editorOnclick();
document.getElementById('id01').style.marginLeft='-550px';
document.getElementById("grun").style.opacity="1";
        };
    }
        document.getElementsByClassName("Share_btn")[0].onclick= function (){
  
  ShareLink();
};
        document.getElementById("undo").onclick= function() {
          
          editor.execCommand("undo");
        };
        document.getElementById("redo").onclick= function() {
          
          editor.execCommand("redo");
        };
        document.getElementById("search-btn").onclick= function() {
          
          find();
        };
        document.getElementById("QR_Code_btn").onclick= function() {
          
          
        };
        document.getElementById("addNote").onclick= function() {
          
          addNote();
        };
document.getElementById("editor").onclick= function(){
          
editorOnclick();
        };
        document.getElementById("Copy-Btn").onclick=function(){
          CopyCode();
        };
      }
    }

function LoadedData(){
  document.getElementsByTagName("body")[0].style.backgroundColor="#1a1a1a";
document.getElementById("application").style.display="block";
document.getElementsByClassName("IDE-Start-Logo-Chapter-I")[0].style.marginLeft="4px";
  document.getElementsByClassName("IDE-Start-Logo-Chapter-D")[0].style.marginLeft="10px";
  document.getElementsByClassName("IDE-Start-Logo-Chapter-E")[0].style.marginLeft="12px";
  document.getElementsByClassName('By-Programmer')[0].innerHTML= atob(myVar555);
  document.getElementById("wrbtn").click();
  document.getElementById("demo").style.display="block";
  document.getElementsByClassName("Start-button")[0].style.marginTop="-250px";
  document.getElementsByTagName("body")[0].style.backgroundColor="#ffffff";
}
 window.onload= function() {

  CloseAbout();
LoadedData();
ResizeIDE(),ResizeIDE22();
ResizeSettings();
CreateQRCode();
selectTheme();
find();
lineNumbers();
editorOnclick();
CodeMirror.colorize();
};
function loadeddata22(){
  document.getElementById("RunMode").style.width= mywidth - 120 + "px";
  document.getElementById("Encoding").style.width= mywidth - 120 + "px";
  document.getElementById("setColorsPicker").style.width= mywidth - 120 + "px";
  document.getElementById("SetSaveFile").style.width= mywidth - 120 + "px";
  document.getElementById("readOnly").style.width= mywidth - 120 + "px";
  document.getElementById("SetLoadFile").style.width= mywidth - 120 + "px";
  document.getElementById("lineNumbers").style.width= mywidth + 50 + "px";
  document.getElementById("QR-type").style.width= mywidth - 120 + "px";
}
var mywidth = window.innerWidth || window.outerWidth;
function tryAgain() {
  
window.reload();
}
var mywidtgh = window.innerWidth || window.outerWidth;
function ABCDEFG(){
  
  document.getElementById("Read").style.width= mywidtgh - 100 + "px";
  document.getElementById("lineNumbers").style.width= mywidtgh - 100 + "px";
}
function ABC_Resize_Function(){
  
    document.getElementsByClassName("CloseClose")[0].style.marginLeft= mywidth - 40 + "px";
    document.getElementById("text-editor").style.width = mywidth + "px";
    document.getElementsByClassName("add_note_btn_loader")[0].style.width = mywidth + "px";
}
function CloseNoteInput() {
  
  document.getElementById('text-editor-topnav').style.marginTop='-8000px';
}
var selectedText = editor.getValue();
function openCommandLine(){
  
  document.getElementById("CommandLine").style.display="none";
  document.getElementById('find').style.display='block';
	document.getElementById('find').style.marginTop='-30px';
	document.getElementById('id01').style.marginLeft='-600px';
	document.getElementById('grun').style.display='block';
	document.getElementById("Share").style.marginTop="250px";
  CodeMirror.colorize();
}
function closeCommandLine(){
  
  document.getElementById("CommandLine").style.display="none";
}
function StartUsing() {
  
  document.getElementById("Boot-loader").style.opacity="0";
  document.getElementById("Boot-loader").style.visibility="hidden";
setTimeout(function(){

  if(!getSearchParam("theme")){
document.getElementById("Theme").value="IDE";
selectTheme();
  }else{
document.getElementById("Theme").value= getSearchParam("theme");
selectTheme();
  }
  selectTheme();
},120);
}
  // Load URL Data
  function getSearchParam(searchParam){
    var url = new URL(window.location.href);
   return url.searchParams.get(searchParam);
  }
setTimeout(function(){
  if(getSearchParam("lineNumbers")=="true"){
    editor.setOption("lineNumbers",true);
  }else{
    editor.setOption("lineNumbers",false);
  }
  if(!getSearchParam("lineNumbers")){
    editor.setOption("lineNumbers",true);
  }
  editor.setOption("mode",getSearchParam("mode"));
  if(!getSearchParam("mode")){
    editor.setOption("mode","text/html");
  }
  if(getSearchParam("matchBrackets")=="true"){
    editor.setOption("matchBrackets",true);
  }else{
    editor.setOption("matchBrackets",false);
  }
  if(getSearchParam("readOnly")=="true"){
    editor.setOption("readOnly","nocursor");
    document.getElementById("readOnly").value="nocursor";
      document.getElementsByClassName("cm-s-"+document.getElementById("Theme").value)[0].onclick=function(){
      
    };
    }else{
    editor.setOption("readOnly","");
    document.getElementById("readOnly").value="";
    document.getElementsByClassName("cm-s-"+document.getElementById("Theme").value)[0].onclick=function(){
      editorOnclick();
    };
  }
},1);
setTimeout(function(){

  if(!getSearchParam("theme")){
document.getElementById("Theme").value="IDE";
selectTheme();
  }else{
document.getElementById("Theme").value= getSearchParam("theme");
selectTheme();
  }
  selectTheme();
},120);
  setInterval(function(){
    localStorage.setItem("editor_SourceCode",editor.getValue());
  });
setTimeout(function(){
  if(!getSearchParam("SourceCode")){
    editor.setValue(decodeURI(atob("JTNDIWRvY3R5cGUlMjBodG1sJTNFJTBBJTIwJTIwJTNDaHRtbCUzRSUwQSUyMCUyMCUyMCUyMCUzQ2hlYWQlM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlM0N0aXRsZSUzRVBhZ2UlMjB0aXRsZSUzQy90aXRsZSUzRSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUzQ21ldGElMjBuYW1lPSUyMnZpZXdwb3J0JTIyJTIwY29udGVudD0lMjJ3aWR0aD1kZXZpY2Utd2lkdGgsJTIwaW5pdGlhbC1zY2FsZT0xLjAlMjIlMjBjaGFyc2V0PSUyMlVURi04JTIyJTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTNDc3R5bGUlM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAvKiUyMENTUyUyMHN0eWxlc2hlZXQlMjAqLyUwQSUyMCUyMCUyMCUyMCUyMCUyMCUzQy9zdHlsZSUzRSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUzQ3NjcmlwdCUzRSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMC8vJTIwSlMlMjBzY3JpcHQlMEElMjAlMjAlMjAlMjAlMjAlMjAlM0Mvc2NyaXB0JTNFJTBBJTIwJTIwJTIwJTIwJTNDL2hlYWQlM0UlMEElMjAlMjAlMjAlMjAlM0Nib2R5JTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTNDIS0tJTIwc29tZSUyMGNvZGVzJTIwZm9yJTIwdGhlJTIwYm9keSUyMC0tJTNFJTBBJTIwJTIwJTIwJTIwJTNDL2JvZHklM0UlMEElMjAlMjAlM0MvaHRtbCUzRQ==")));
  }else{
    editor.setValue(decodeURI(atob(getSearchParam("SourceCode"))));
  }
},220);
  function ResizeIDE(){
    
    var Dected_Width = window.innerWidth || window.outerWidth;
    var Dected_Height = window.innerHeight || window.outerHeight;
    var Add_value = 3;
    var Add_value999 = 5;
    var Add_value123 = 70;
    var Removed_value = 390;
    var Removed_value33 = 38;
    var Removed_value44 = 98;
    var Removed_value99 = 149;
    var Removed_value100 = 700;
    var Removed_value101 = 10;
    var Removed_value102 = 50;
    var range_removed_value = 100;
 document.getElementsByClassName("CodeMirror")[0].style.width= Dected_Width + Add_value;
 document.getElementsByClassName("CodeMirror")[0].style.height= Dected_Height - Removed_value44;
 document.getElementsByClassName("MyXtopnav")[0].style.width= Dected_Width + 1 + "px";
 document.getElementsByClassName("CodeMirror")[0].style.marginTop='-26px';
 document.getElementById("grun").style.marginLeft= Dected_Width - Removed_value;
 document.getElementById("find").style.marginLeft= Dected_Width - Removed_value33;
 document.getElementById("topnav").style.width= Dected_Width + Add_value999;
 document.getElementById("Notepade-topnav").style.width= Dected_Width;
 document.getElementById("notes").style.width= Dected_Width + 0.2;
 document.getElementById("notes").style.height= Dected_Height + Add_value;
 document.getElementById("about-topnav").style.width= Dected_Width;
 document.getElementsByClassName("topnav2")[0].style.marginTop= Dected_Height - Removed_value99;
 var CloseNote = document.querySelectorAll(".CloseNote");
    for(var i = 0, len = CloseNote.length; i < len; i++) {
        var item = CloseNote[i];
        item.style.marginLeft= Dected_Width - 40;
  }
 var Parket = document.querySelectorAll(".xyzloader");
    for(var i = 0, len = Parket.length; i < len; i++) {
        var item = Parket[i];
        item.style.height= Dected_Height + Add_value123;
        item.style.width= Dected_Width + 1 + "px";
  }
  var Chapter = document.querySelectorAll(".chapter");
    for(var i = 0, len = Chapter.length; i < len; i++) {
        var item = Chapter[i];
        item.style.width= Dected_Width;
  }
  var IDE_CP = document.querySelectorAll(".codemirror-colorpicker");
    for(var i = 0, len = IDE_CP.length; i < len; i++) {
        var item = IDE_CP[i];
        item.style.width= Dected_Width - 0.4 + "px";
  }
  var IDE_Boot = document.querySelectorAll("#Boot-loader");
    for(var i = 0, len = IDE_Boot.length; i < len; i++) {
        var item = IDE_Boot[i];
        item.style.width= Dected_Width + 8;
        item.style.marginTop='-' + Dected_Height - 7;
        item.style.height= Dected_Height + 10;
    }

  document.getElementsByClassName("imagepaletteloader")[0].style.width= Dected_Width;
  document.getElementsByClassName("imagepaletteloader")[0].style.height= Dected_Height - 420;
  document.getElementById("topnav55").style.width= Dected_Width + 1 + "px";
  document.getElementsByClassName("simage")[0].style.width= Dected_Width;
  document.getElementById("prePaletteImg").style.width= Dected_Width;
  }
function ResizeIDE22(){
  
  var Dected_Widths = window.innerWidth || window.outerWidth;
  document.getElementById("fsize").style.width= Dected_Widths - 95;
  document.getElementById("fsizev").style.width= Dected_Widths - 110;
}
function ResizeThat(){
  
  var Dected_Widthse = window.innerWidth || window.outerWidth;
  document.getElementById("qr-inside").style.width= Dected_Widthse / 2 - 45 + "px";
  document.getElementById("qr-out").style.width= Dected_Widthse / 2 - 50 + "px";
  document.getElementById("qr-out").style.marginLeft= Dected_Widthse / 2 + 43 + "px";
}
function MoreResizing(){
  
  var element_width = window.innerWidth || window.outerWidth;
  var element_height = window.innerHeight || window.outerHeight;
  document.getElementById("url").style.width= element_width - 90 + "px";
  document.getElementsByClassName("Browser-topnav")[0].style.width = element_width + "px";
  document.getElementsByClassName("OpenVS2")[0].style.marginLeft = element_width - 40 + "px";
  document.getElementById("window").style.width= element_width + 25 + "px";
  document.getElementById("window").style.height= element_height + 25 + "px";
  document.getElementsByClassName("window-topnav")[0].style.width = element_width + 250 + "px";
  document.getElementsByClassName("CodeMirror")[1].style.width = element_width + 7 + "px";
  document.getElementById("viewsource-continer").style.width= element_width + 250 + "px";
}
  function ShowGetReport(){
    editorOnclick();
    document.getElementsByClassName("CodeMirrorAuditor")[0].style.marginTop="-85.3%";
    getReport();
    setTimeout(function(){
      document.getElementsByClassName("CodeMirrorAuditor")[0].style.marginTop="185.3%";
    },5800);
  }
  function CopyCode(){
    editor.focus();
    editor.setSelection({ line: 0, ch: 0 }, { line: editor.lastLine(), ch: editor.getLineHandle(editor.lastLine()).length });
    document.execCommand("copy");
  }
function getReport() {
    var html = editor.getValue();
    var parser = new DOMParser();
    var doc = parser.parseFromString(html, "text/html");
    var styles = doc.getElementsByTagName("style");
    var scripts = doc.getElementsByTagName("script");
    var CSS = "";
    var JavaScript = "";
    for (var i = 0; i < styles.length; i++) {
        CSS += styles[i].textContent;
    }
    for (var i = 0; i < scripts.length; i++) {
       JavaScript += scripts[i].textContent;
    }
    var html_value = editor.getValue().length - CSS.length - JavaScript.length;
    var CSS_value = CSS.length;
    var JavaScript_value = JavaScript.length;
    var editor_value = editor.getValue().length;
    var editor_project_errors = document.querySelectorAll(".cm-error").length;
    if(editor_project_errors==3){
      editor_project_errors=1;
    }
    var Results = "<p style='margin-left:10px;'><br><br><p style='background:#e44f26;width:15px;height:15px;border-radius:100%;position:fixed;margin-left:5px;'></p><p style='position:fixed;margin-left:25px;margin-top:-1px;'>HTML: </p><p style='margin-left:63px;margin-top:-1px;'> "+divideAndRound(html_value, editor_value)+"%</p><p style='margin-left:10px;'><br><br><p style='background:#33a9dc;width:15px;height:15px;border-radius:100%;position:fixed;margin-left:5px;margin-top:-50px;'></p><p style='position:fixed;margin-left:25px;margin-top:-52px;'>CSS: </p><p style='margin-left:55px;margin-top:-52px;'> "+divideAndRound(CSS_value, editor_value)+"%</p>\n<br><p style='margin-left:10px;'><br><br><p style='background:#f4dd18;width:15px;height:15px;border-radius:100%;position:fixed;margin-left:5px;margin-top:-70px;'></p><p style='position:fixed;margin-left:25px;margin-top:-71px;'>JavaScript: </p><p style='margin-left:110px;margin-top:-71px;'> "+divideAndRound(JavaScript_value, editor_value)+"%</p>\n<br>";
    var Data = Results.replaceAll("NaN","0.00")+'<div class="progress-bar"><div id="segment1" class="segment"></div><div id="segment2" class="segment"></div><div id="segment3" class="segment"></div></div>\n\n<br><p id="Project_Size">Project Size: '+formatSize(editor.getValue().length)+'</p>';
    document.getElementById("data").innerHTML = Data;
    let segment1 = document.getElementById('segment1');
      let segment2 = document.getElementById('segment2');
      let segment3 = document.getElementById('segment3');

      updateProgressBar(segment1, divideAndRound(html_value, editor_value));
      updateProgressBar(segment2, divideAndRound(CSS_value, editor_value));
      updateProgressBar(segment3, divideAndRound(JavaScript_value, editor_value));
}
function updateProgressBar(segment, percentage) {
     segment.style.width = percentage + '%';
      }
function divideAndRound(CSS_value, editor_value) {
    var result = (CSS_value / editor_value) * 100;
    return parseFloat(result.toFixed(2));
}
var resultHTML = divideAndRound(html_value, editor_value);
var resultCSS = divideAndRound(CSS_value, editor_value);
var resultJavaScript = divideAndRound(JavaScript_value, editor_value);

var Results = "<br><br>HTML: "+resultHTML+"%\n<br>CSS: "+resultCSS+"%\n<br>JavaScript: "+resultJavaScript+"%";
document.getElementById("data").innerHTML = Results;
  function OpenConsole(element){
    
    document.getElementById("Console").style.marginTop="6px";
    element.style.transform="rotate(58deg)";
    if (element.style.transform=="rotate(58deg)"){
      element.onclick = function(){
        CloseConsole(this);
        document.getElementById("Console").style.marginTop="-700px";
      };
    }
  }
  function CloseConsole(element){
    
    element.style.transform="rotate(0deg)";
    element.onclick = function (){
      
      OpenConsole(this);
      document.getElementById("Console").style.marginTop="12px";
    };
  }
  function LoadParams(value){
  
  document.getElementById('preview').contentWindow.window.location.search= value;
  }
function writeToConsole(value){
    
document.getElementById("preview").contentWindow.console.log(document.getElementById("Command").value.replaceAll("<","&lt;"));
document.getElementById("Command").value="";
  }
  document.getElementById("preview").contentWindow.console.log = function (message){
    
    document.getElementById("ConsoleLog").innerHTML+= '<div><pre class="console_log_loader">' + message.replaceAll("<","&lt;") +'<br>\n\n</pre><img style="margin-top:-46px;margin-left:10px;" src="icons/time_icon.png" width="25" height="25"><p style="color:rgb(80,80,80);margin-top:-46px;margin-bottom:4px;margin-left:40px;">' + new Date().getHours() + ':' + new Date().getMinutes() + '</pre></div>'+"<br>";
  };
  document.getElementById("preview").contentWindow.console.clear = function (Clear){
    
    console.clear();
    document.getElementById("ConsoleLog").innerHTML="";
  };
  document.getElementById("preview").contentWindow.console.error = function (message){
    
    document.getElementById("ConsoleLog").innerHTML+= '<div><pre class="console_log_loader"><span style="font-size:15px;color:red;">⚠</span> ' + message.replaceAll("<","&lt;") +'<br>\n\n</pre><img style="margin-top:-46px;margin-left:10px;" src="icons/time_icon.png" width="25" height="25"><p style="color:rgb(80,80,80);margin-top:-46px;margin-bottom:4px;margin-left:40px;">' + new Date().getHours() + ':' + new Date().getMinutes() + '</pre></div>'+"<br>";
  };
  document.getElementById("preview").contentWindow.console.warn = function (message){
    
    document.getElementById("ConsoleLog").innerHTML+= '<div><pre class="console_log_loader"><span style="font-size:15px;color:red;">⚠</span> ' + message.replaceAll("<","&lt;") +'<br>\n\n</pre><img style="margin-top:-46px;margin-left:10px;" src="icons/time_icon.png" width="25" height="25"><p style="color:rgb(80,80,80);margin-top:-46px;margin-bottom:4px;margin-left:40px;">' + new Date().getHours() + ':' + new Date().getMinutes() + '</pre></div>'+"<br>";
  };
function fontSize(value){
    
    document.getElementsByClassName("CodeMirror")[0].style.fontSize= value + "px";
    document.getElementsByClassName("CodeMirror")[1].style.fontSize= value + "px";
    document.getElementsByClassName("txt3000")[1].innerHTML="font size: " + value;
  }
  function localTheme(files) {
    if (files.length == 1) {
            var reader = new FileReader();
            reader.onload = function(e) {
             document.getElementById('themetxt').innerHTML= e.target.result;
             editor.setOption('theme', document.getElementById('CTheme').files[0].name.replace('.css',''));
            };
            reader.readAsText(files[0]);
         }
  }
  var input = document.getElementById("Theme");
  function selectTheme() {
    var theme = input.options[input.selectedIndex].textContent;
    editor.setOption("theme", theme);
    neweditor.setOption("theme", theme);
    document.getElementById('find').style.display='block';
	document.getElementById('find').style.marginTop='-30px';
	document.getElementById('id01').style.marginLeft='-600px';
	document.getElementById('grun').style.display='block';
	document.getElementsByClassName("cm-s-"+theme)[0].onclick=function(){
	  editor.execCommand("autocomplete");
	  editorOnclick();
	  document.getElementsByClassName("CodeMirrorAuditor")[0].style.marginTop="885.3%";
	};
  }
  setTimeout(selectTheme,1);
function Save() {
    var textToWrite = editor.getValue();
    var textFileAsBlob = new Blob([textToWrite], {
        type: editor.getOption("mode")
    });
    var fileNameToSaveAs = document.getElementById("filename").value;
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL && window.webkitURL.createObjectURL) {
        // Chrome allows the link to be clicked
        // without actually adding it to the DOM.
        downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    } else {
        // Firefox requires the link to be added to the DOM
        // before it can be clicked.
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        downloadLink.onclick = destroyClickedElement;
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
    }
    downloadLink.click();
    editorOnclick();
    showAllhidden();
}

function destroyClickedElement(event) {
    document.body.removeChild(event.target);
}
    function Base64(files) {
            var reader = new FileReader();
            reader.onload = function(e) {
              document.getElementById("Base64textArea").value= e.target.result;
              document.getElementById("texttype").value="File to Base64";
     texttype();
     document.getElementById("Copy").onclick= function(){
       
       document.getElementById("Base64textArea").select();
       document.execCommand("copy");
     };
            };
            reader.readAsDataURL(files[0]);
    }
    function Base64File() {
      
      document.getElementById('files').click();
    }
    function Copy() {
      
     document.getElementById("Base64textArea").select();
     document.execCommand("copy");
    }
    function CopyText(element){
      
      element.removeAttribute("readonly");
      element.select();
      document.execCommand("copy");
      element.setAttribute("readonly");
      alert("Copied !!");
    }
    function byBase64() {
      
      document.getElementById("Converted").value= atob(document.getElementById("convertIt").value);
    }
    function byURL() {
      
      document.getElementById("encodedURL").value= encodeURI(document.getElementById("encodeURL").value);
    }
function fromURL() {
  
  document.getElementById("decodedURL").value= decodeURI(document.getElementById("decodeURL").value);
}
function texttype() {
  
   if (document.getElementById("type").value=="File to Base64") {
     
     document.getElementsByClassName("sfiletocon")[0].style.opacity="1";
     document.getElementById("mode-1").style.display="block";
     document.getElementById("mode-2").style.display="none";
     document.getElementById("mode-3").style.display="none";
     document.getElementById("mode-4").style.display="none";
     document.getElementById("mode-5").style.display="none";
     document.getElementById("mode-6").style.display="none";
     document.getElementById("Copy").onclick= function(){
       
       document.getElementById("Base64textArea").select();
       document.execCommand("copy");
     };
     document.getElementById("dlbtn").onclick= function() {
       
       Save4me();
     };
   }
   if (document.getElementById("type").value=="text to Base64") {
     
     document.getElementsByClassName("sfiletocon")[0].style.opacity="0";
     document.getElementById("mode-1").style.display="none";
     document.getElementById("mode-2").style.display="block";
     document.getElementById("mode-3").style.display="none";
     document.getElementById("mode-4").style.display="none";
     document.getElementById("mode-5").style.display="none";
     document.getElementById("mode-6").style.display="none";
     document.getElementById("Copy").onclick= function(){
       
       document.getElementById("ConvertedText").select();
       document.execCommand("copy");
     };
     document.getElementById("dlbtn").onclick= function() {
       
       SaveConvertedText();
     };
   }
     if (document.getElementById("type").value=="Base64 to text") {
     
     document.getElementsByClassName("sfiletocon")[0].style.opacity="0";
     document.getElementById("mode-1").style.display="none";
     document.getElementById("mode-2").style.display="none";
     document.getElementById("mode-3").style.display="block";
     document.getElementById("mode-4").style.display="none";
     document.getElementById("mode-5").style.display="none";
     document.getElementById("mode-6").style.display="none";
     document.getElementById("Copy").onclick= function(){
       
       document.getElementById("Converted").select();
       document.execCommand("copy");
     };
     document.getElementById("dlbtn").onclick= function() {
       
       SaveDecodedText();
     };
}
if (document.getElementById("type").value=="Encode URL") {
     
     document.getElementById("Copy").onclick= function(){
       
       document.getElementById("encodedURL").select();
       document.execCommand("copy");
     };
     document.getElementsByClassName("sfiletocon")[0].style.opacity="0";
     document.getElementById("mode-1").style.display="none";
     document.getElementById("mode-2").style.display="none";
     document.getElementById("mode-3").style.display="none";
     document.getElementById("mode-4").style.display="block";
     document.getElementById("mode-5").style.display="none";
     document.getElementById("mode-6").style.display="none";
     document.getElementById("dlbtn").onclick= function() {
       
       SaveEncodedURL();
     };
}
if (document.getElementById("type").value=="Decode URL") {
     
     document.getElementsByClassName("sfiletocon")[0].style.opacity="0";
     document.getElementById("mode-1").style.display="none";
     document.getElementById("mode-2").style.display="none";
     document.getElementById("mode-3").style.display="none";
     document.getElementById("mode-4").style.display="none";
     document.getElementById("mode-5").style.display="block";
     document.getElementById("mode-6").style.display="none";
     document.getElementById("Copy").onclick= function(){
       
       document.getElementById("decodedURL").select();
       document.execCommand("copy");
     };
     document.getElementById("dlbtn").onclick= function() {
       
       SaveDecodedURL();
     };
}
if (document.getElementById("type").value=="Decode URL" || document.getElementById("type").value=="Encode URL" || document.getElementById("type").value=="Base64 to text" || document.getElementById("type").value=="text to Base64" || document.getElementById("type").value=="File to Base64") {
  
  document.getElementById("dlbtn").style.opacity="1";
  document.getElementById("Copy").style.opacity="1";
  document.getElementById("dlbtn").style.visibility="";
   document.getElementById("Copy").style.visibility="";
   document.getElementsByClassName("sfiletocon")[0].style.visibility="";
  document.getElementsByClassName("sfiletocon")[0].style.opacity="1";
}
}
function Save4me() {
    var textFileAsBlob = new Blob([document.getElementById("Base64textArea").value], {
        type: "text/plain",
    });
    var fileNameToSaveAs = prompt("filename:");
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL && window.webkitURL.createObjectURL) {
        // Chrome allows the link to be clicked
        // without actually adding it to the DOM.
        downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    } else {
        // Firefox requires the link to be added to the DOM
        // before it can be clicked.
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        downloadLink.onclick = destroyClickedElement;
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
    }
    downloadLink.click();
}

function destroyClickedElement(event) {
    document.body.removeChild(event.target);
}
function toBase64() {
  
  document.getElementById("ConvertedText").value= btoa(document.getElementById("textToConvertIt").value);
}
function SaveConvertedText() {
    var textFileAsBlob = new Blob([document.getElementById("ConvertedText").value], {
        type: "text/plain",
    });
    var fileNameToSaveAs = prompt("filename:");
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL && window.webkitURL.createObjectURL) {
        // Chrome allows the link to be clicked
        // without actually adding it to the DOM.
        downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    } else {
        // Firefox requires the link to be added to the DOM
        // before it can be clicked.
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        downloadLink.onclick = destroyClickedElement;
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
    }
    downloadLink.click();
}
function SaveDecodedText() {
    var textFileAsBlob = new Blob([document.getElementById("Converted").value], {
        type: "text/plain",
    });
    var fileNameToSaveAs = prompt("filename:");
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL && window.webkitURL.createObjectURL) {
        // Chrome allows the link to be clicked
        // without actually adding it to the DOM.
        downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    } else {
        // Firefox requires the link to be added to the DOM
        // before it can be clicked.
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        downloadLink.onclick = destroyClickedElement;
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
    }
    downloadLink.click();
}
function SaveEncodedURL() {
    var textFileAsBlob = new Blob([document.getElementById("encodedURL").value], {
        type: "text/plain",
    });
    var fileNameToSaveAs = prompt("filename:");
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL && window.webkitURL.createObjectURL) {
        // Chrome allows the link to be clicked
        // without actually adding it to the DOM.
        downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    } else {
        // Firefox requires the link to be added to the DOM
        // before it can be clicked.
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        downloadLink.onclick = destroyClickedElement;
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
    }
    downloadLink.click();
}
function SaveEncodedURL() {
    var textFileAsBlob = new Blob([document.getElementById("encodedURL").value], {
        type: "text/plain",
    });
    var fileNameToSaveAs = prompt("filename:");
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL && window.webkitURL.createObjectURL) {
        // Chrome allows the link to be clicked
        // without actually adding it to the DOM.
        downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    } else {
        // Firefox requires the link to be added to the DOM
        // before it can be clicked.
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        downloadLink.onclick = destroyClickedElement;
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
    }
    downloadLink.click();
}
function SaveDecodedURL() {
    var textFileAsBlob = new Blob([document.getElementById("decodedURL").value], {
        type: "text/plain",
    });
    var fileNameToSaveAs = prompt("filename:");
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL && window.webkitURL.createObjectURL) {
        // Chrome allows the link to be clicked
        // without actually adding it to the DOM.
        downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    } else {
        // Firefox requires the link to be added to the DOM
        // before it can be clicked.
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        downloadLink.onclick = destroyClickedElement;
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
    }
    downloadLink.click();
}
/*! QRious v4.0.2 | (C) 2017 Alasdair Mercer | GPL v3 License
Based on jsqrencode | (C) 2010 tz@execpc.com | GPL v3 License
*/
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.QRious=e()}(this,function(){"use strict";function t(t,e){var n;return"function"==typeof Object.create?n=Object.create(t):(s.prototype=t,n=new s,s.prototype=null),e&&i(!0,n,e),n}function e(e,n,s,r){var o=this;return"string"!=typeof e&&(r=s,s=n,n=e,e=null),"function"!=typeof n&&(r=s,s=n,n=function(){return o.apply(this,arguments)}),i(!1,n,o,r),n.prototype=t(o.prototype,s),n.prototype.constructor=n,n.class_=e||o.class_,n.super_=o,n}function i(t,e,i){for(var n,s,a=0,h=(i=o.call(arguments,2)).length;a<h;a++){s=i[a];for(n in s)t&&!r.call(s,n)||(e[n]=s[n])}}function n(){}var s=function(){},r=Object.prototype.hasOwnProperty,o=Array.prototype.slice,a=e;n.class_="Nevis",n.super_=Object,n.extend=a;var h=n,f=h.extend(function(t,e,i){this.qrious=t,this.element=e,this.element.qrious=t,this.enabled=Boolean(i)},{draw:function(t){},getElement:function(){return this.enabled||(this.enabled=!0,this.render()),this.element},getModuleSize:function(t){var e=this.qrious,i=e.padding||0,n=Math.floor((e.size-2*i)/t.width);return Math.max(1,n)},getOffset:function(t){var e=this.qrious,i=e.padding;if(null!=i)return i;var n=this.getModuleSize(t),s=Math.floor((e.size-n*t.width)/2);return Math.max(0,s)},render:function(t){this.enabled&&(this.resize(),this.reset(),this.draw(t))},reset:function(){},resize:function(){}}),c=f.extend({draw:function(t){var e,i,n=this.qrious,s=this.getModuleSize(t),r=this.getOffset(t),o=this.element.getContext("2d");for(o.fillStyle=n.foreground,o.globalAlpha=n.foregroundAlpha,e=0;e<t.width;e++)for(i=0;i<t.width;i++)t.buffer[i*t.width+e]&&o.fillRect(s*e+r,s*i+r,s,s)},reset:function(){var t=this.qrious,e=this.element.getContext("2d"),i=t.size;e.lineWidth=1,e.clearRect(0,0,i,i),e.fillStyle=t.background,e.globalAlpha=t.backgroundAlpha,e.fillRect(0,0,i,i)},resize:function(){var t=this.element;t.width=t.height=this.qrious.size}}),u=h.extend(null,{BLOCK:[0,11,15,19,23,27,31,16,18,20,22,24,26,28,20,22,24,24,26,28,28,22,24,24,26,26,28,28,24,24,26,26,26,28,28,24,26,26,26,28,28]}),l=h.extend(null,{BLOCKS:[1,0,19,7,1,0,16,10,1,0,13,13,1,0,9,17,1,0,34,10,1,0,28,16,1,0,22,22,1,0,16,28,1,0,55,15,1,0,44,26,2,0,17,18,2,0,13,22,1,0,80,20,2,0,32,18,2,0,24,26,4,0,9,16,1,0,108,26,2,0,43,24,2,2,15,18,2,2,11,22,2,0,68,18,4,0,27,16,4,0,19,24,4,0,15,28,2,0,78,20,4,0,31,18,2,4,14,18,4,1,13,26,2,0,97,24,2,2,38,22,4,2,18,22,4,2,14,26,2,0,116,30,3,2,36,22,4,4,16,20,4,4,12,24,2,2,68,18,4,1,43,26,6,2,19,24,6,2,15,28,4,0,81,20,1,4,50,30,4,4,22,28,3,8,12,24,2,2,92,24,6,2,36,22,4,6,20,26,7,4,14,28,4,0,107,26,8,1,37,22,8,4,20,24,12,4,11,22,3,1,115,30,4,5,40,24,11,5,16,20,11,5,12,24,5,1,87,22,5,5,41,24,5,7,24,30,11,7,12,24,5,1,98,24,7,3,45,28,15,2,19,24,3,13,15,30,1,5,107,28,10,1,46,28,1,15,22,28,2,17,14,28,5,1,120,30,9,4,43,26,17,1,22,28,2,19,14,28,3,4,113,28,3,11,44,26,17,4,21,26,9,16,13,26,3,5,107,28,3,13,41,26,15,5,24,30,15,10,15,28,4,4,116,28,17,0,42,26,17,6,22,28,19,6,16,30,2,7,111,28,17,0,46,28,7,16,24,30,34,0,13,24,4,5,121,30,4,14,47,28,11,14,24,30,16,14,15,30,6,4,117,30,6,14,45,28,11,16,24,30,30,2,16,30,8,4,106,26,8,13,47,28,7,22,24,30,22,13,15,30,10,2,114,28,19,4,46,28,28,6,22,28,33,4,16,30,8,4,122,30,22,3,45,28,8,26,23,30,12,28,15,30,3,10,117,30,3,23,45,28,4,31,24,30,11,31,15,30,7,7,116,30,21,7,45,28,1,37,23,30,19,26,15,30,5,10,115,30,19,10,47,28,15,25,24,30,23,25,15,30,13,3,115,30,2,29,46,28,42,1,24,30,23,28,15,30,17,0,115,30,10,23,46,28,10,35,24,30,19,35,15,30,17,1,115,30,14,21,46,28,29,19,24,30,11,46,15,30,13,6,115,30,14,23,46,28,44,7,24,30,59,1,16,30,12,7,121,30,12,26,47,28,39,14,24,30,22,41,15,30,6,14,121,30,6,34,47,28,46,10,24,30,2,64,15,30,17,4,122,30,29,14,46,28,49,10,24,30,24,46,15,30,4,18,122,30,13,32,46,28,48,14,24,30,42,32,15,30,20,4,117,30,40,7,47,28,43,22,24,30,10,67,15,30,19,6,118,30,18,31,47,28,34,34,24,30,20,61,15,30],FINAL_FORMAT:[30660,29427,32170,30877,26159,25368,27713,26998,21522,20773,24188,23371,17913,16590,20375,19104,13663,12392,16177,14854,9396,8579,11994,11245,5769,5054,7399,6608,1890,597,3340,2107],LEVELS:{L:1,M:2,Q:3,H:4}}),_=h.extend(null,{EXPONENT:[1,2,4,8,16,32,64,128,29,58,116,232,205,135,19,38,76,152,45,90,180,117,234,201,143,3,6,12,24,48,96,192,157,39,78,156,37,74,148,53,106,212,181,119,238,193,159,35,70,140,5,10,20,40,80,160,93,186,105,210,185,111,222,161,95,190,97,194,153,47,94,188,101,202,137,15,30,60,120,240,253,231,211,187,107,214,177,127,254,225,223,163,91,182,113,226,217,175,67,134,17,34,68,136,13,26,52,104,208,189,103,206,129,31,62,124,248,237,199,147,59,118,236,197,151,51,102,204,133,23,46,92,184,109,218,169,79,158,33,66,132,21,42,84,168,77,154,41,82,164,85,170,73,146,57,114,228,213,183,115,230,209,191,99,198,145,63,126,252,229,215,179,123,246,241,255,227,219,171,75,150,49,98,196,149,55,110,220,165,87,174,65,130,25,50,100,200,141,7,14,28,56,112,224,221,167,83,166,81,162,89,178,121,242,249,239,195,155,43,86,172,69,138,9,18,36,72,144,61,122,244,245,247,243,251,235,203,139,11,22,44,88,176,125,250,233,207,131,27,54,108,216,173,71,142,0],LOG:[255,0,1,25,2,50,26,198,3,223,51,238,27,104,199,75,4,100,224,14,52,141,239,129,28,193,105,248,200,8,76,113,5,138,101,47,225,36,15,33,53,147,142,218,240,18,130,69,29,181,194,125,106,39,249,185,201,154,9,120,77,228,114,166,6,191,139,98,102,221,48,253,226,152,37,179,16,145,34,136,54,208,148,206,143,150,219,189,241,210,19,92,131,56,70,64,30,66,182,163,195,72,126,110,107,58,40,84,250,133,186,61,202,94,155,159,10,21,121,43,78,212,229,172,115,243,167,87,7,112,192,247,140,128,99,13,103,74,222,237,49,197,254,24,227,165,153,119,38,184,180,124,17,68,146,217,35,32,137,46,55,63,209,91,149,188,207,205,144,135,151,178,220,252,190,97,242,86,211,171,20,42,93,158,132,60,57,83,71,109,65,162,31,45,67,216,183,123,164,118,196,23,73,236,127,12,111,246,108,161,59,82,41,157,85,170,251,96,134,177,187,204,62,90,203,89,95,176,156,169,160,81,11,245,22,235,122,117,44,215,79,174,213,233,230,231,173,232,116,214,244,234,168,80,88,175]}),d=h.extend(null,{BLOCK:[3220,1468,2713,1235,3062,1890,2119,1549,2344,2936,1117,2583,1330,2470,1667,2249,2028,3780,481,4011,142,3098,831,3445,592,2517,1776,2234,1951,2827,1070,2660,1345,3177]}),v=h.extend(function(t){var e,i,n,s,r,o=t.value.length;for(this._badness=[],this._level=l.LEVELS[t.level],this._polynomial=[],this._value=t.value,this._version=0,this._stringBuffer=[];this._version<40&&(this._version++,n=4*(this._level-1)+16*(this._version-1),s=l.BLOCKS[n++],r=l.BLOCKS[n++],e=l.BLOCKS[n++],i=l.BLOCKS[n],n=e*(s+r)+r-3+(this._version<=9),!(o<=n)););this._dataBlock=e,this._eccBlock=i,this._neccBlock1=s,this._neccBlock2=r;var a=this.width=17+4*this._version;this.buffer=v._createArray(a*a),this._ecc=v._createArray(e+(e+i)*(s+r)+r),this._mask=v._createArray((a*(a+1)+1)/2),this._insertFinders(),this._insertAlignments(),this.buffer[8+a*(a-8)]=1,this._insertTimingGap(),this._reverseMask(),this._insertTimingRowAndColumn(),this._insertVersion(),this._syncMask(),this._convertBitStream(o),this._calculatePolynomial(),this._appendEccToData(),this._interleaveBlocks(),this._pack(),this._finish()},{_addAlignment:function(t,e){var i,n=this.buffer,s=this.width;for(n[t+s*e]=1,i=-2;i<2;i++)n[t+i+s*(e-2)]=1,n[t-2+s*(e+i+1)]=1,n[t+2+s*(e+i)]=1,n[t+i+1+s*(e+2)]=1;for(i=0;i<2;i++)this._setMask(t-1,e+i),this._setMask(t+1,e-i),this._setMask(t-i,e-1),this._setMask(t+i,e+1)},_appendData:function(t,e,i,n){var s,r,o,a=this._polynomial,h=this._stringBuffer;for(r=0;r<n;r++)h[i+r]=0;for(r=0;r<e;r++){if(255!==(s=_.LOG[h[t+r]^h[i]]))for(o=1;o<n;o++)h[i+o-1]=h[i+o]^_.EXPONENT[v._modN(s+a[n-o])];else for(o=i;o<i+n;o++)h[o]=h[o+1];h[i+n-1]=255===s?0:_.EXPONENT[v._modN(s+a[0])]}},_appendEccToData:function(){var t,e=0,i=this._dataBlock,n=this._calculateMaxLength(),s=this._eccBlock;for(t=0;t<this._neccBlock1;t++)this._appendData(e,i,n,s),e+=i,n+=s;for(t=0;t<this._neccBlock2;t++)this._appendData(e,i+1,n,s),e+=i+1,n+=s},_applyMask:function(t){var e,i,n,s,r=this.buffer,o=this.width;switch(t){case 0:for(s=0;s<o;s++)for(n=0;n<o;n++)n+s&1||this._isMasked(n,s)||(r[n+s*o]^=1);break;case 1:for(s=0;s<o;s++)for(n=0;n<o;n++)1&s||this._isMasked(n,s)||(r[n+s*o]^=1);break;case 2:for(s=0;s<o;s++)for(e=0,n=0;n<o;n++,e++)3===e&&(e=0),e||this._isMasked(n,s)||(r[n+s*o]^=1);break;case 3:for(i=0,s=0;s<o;s++,i++)for(3===i&&(i=0),e=i,n=0;n<o;n++,e++)3===e&&(e=0),e||this._isMasked(n,s)||(r[n+s*o]^=1);break;case 4:for(s=0;s<o;s++)for(e=0,i=s>>1&1,n=0;n<o;n++,e++)3===e&&(e=0,i=!i),i||this._isMasked(n,s)||(r[n+s*o]^=1);break;case 5:for(i=0,s=0;s<o;s++,i++)for(3===i&&(i=0),e=0,n=0;n<o;n++,e++)3===e&&(e=0),(n&s&1)+!(!e|!i)||this._isMasked(n,s)||(r[n+s*o]^=1);break;case 6:for(i=0,s=0;s<o;s++,i++)for(3===i&&(i=0),e=0,n=0;n<o;n++,e++)3===e&&(e=0),(n&s&1)+(e&&e===i)&1||this._isMasked(n,s)||(r[n+s*o]^=1);break;case 7:for(i=0,s=0;s<o;s++,i++)for(3===i&&(i=0),e=0,n=0;n<o;n++,e++)3===e&&(e=0),(e&&e===i)+(n+s&1)&1||this._isMasked(n,s)||(r[n+s*o]^=1)}},_calculateMaxLength:function(){return this._dataBlock*(this._neccBlock1+this._neccBlock2)+this._neccBlock2},_calculatePolynomial:function(){var t,e,i=this._eccBlock,n=this._polynomial;for(n[0]=1,t=0;t<i;t++){for(n[t+1]=1,e=t;e>0;e--)n[e]=n[e]?n[e-1]^_.EXPONENT[v._modN(_.LOG[n[e]]+t)]:n[e-1];n[0]=_.EXPONENT[v._modN(_.LOG[n[0]]+t)]}for(t=0;t<=i;t++)n[t]=_.LOG[n[t]]},_checkBadness:function(){var t,e,i,n,s,r=0,o=this._badness,a=this.buffer,h=this.width;for(s=0;s<h-1;s++)for(n=0;n<h-1;n++)(a[n+h*s]&&a[n+1+h*s]&&a[n+h*(s+1)]&&a[n+1+h*(s+1)]||!(a[n+h*s]||a[n+1+h*s]||a[n+h*(s+1)]||a[n+1+h*(s+1)]))&&(r+=v.N2);var f=0;for(s=0;s<h;s++){for(i=0,o[0]=0,t=0,n=0;n<h;n++)t===(e=a[n+h*s])?o[i]++:o[++i]=1,f+=(t=e)?1:-1;r+=this._getBadness(i)}f<0&&(f=-f);var c=0,u=f;for(u+=u<<2,u<<=1;u>h*h;)u-=h*h,c++;for(r+=c*v.N4,n=0;n<h;n++){for(i=0,o[0]=0,t=0,s=0;s<h;s++)t===(e=a[n+h*s])?o[i]++:o[++i]=1,t=e;r+=this._getBadness(i)}return r},_convertBitStream:function(t){var e,i,n=this._ecc,s=this._version;for(i=0;i<t;i++)n[i]=this._value.charCodeAt(i);var r=this._stringBuffer=n.slice(),o=this._calculateMaxLength();t>=o-2&&(t=o-2,s>9&&t--);var a=t;if(s>9){for(r[a+2]=0,r[a+3]=0;a--;)e=r[a],r[a+3]|=255&e<<4,r[a+2]=e>>4;r[2]|=255&t<<4,r[1]=t>>4,r[0]=64|t>>12}else{for(r[a+1]=0,r[a+2]=0;a--;)e=r[a],r[a+2]|=255&e<<4,r[a+1]=e>>4;r[1]|=255&t<<4,r[0]=64|t>>4}for(a=t+3-(s<10);a<o;)r[a++]=236,r[a++]=17},_getBadness:function(t){var e,i=0,n=this._badness;for(e=0;e<=t;e++)n[e]>=5&&(i+=v.N1+n[e]-5);for(e=3;e<t-1;e+=2)n[e-2]===n[e+2]&&n[e+2]===n[e-1]&&n[e-1]===n[e+1]&&3*n[e-1]===n[e]&&(0===n[e-3]||e+3>t||3*n[e-3]>=4*n[e]||3*n[e+3]>=4*n[e])&&(i+=v.N3);return i},_finish:function(){this._stringBuffer=this.buffer.slice();var t,e,i=0,n=3e4;for(e=0;e<8&&(this._applyMask(e),(t=this._checkBadness())<n&&(n=t,i=e),7!==i);e++)this.buffer=this._stringBuffer.slice();i!==e&&this._applyMask(i),n=l.FINAL_FORMAT[i+(this._level-1<<3)];var s=this.buffer,r=this.width;for(e=0;e<8;e++,n>>=1)1&n&&(s[r-1-e+8*r]=1,e<6?s[8+r*e]=1:s[8+r*(e+1)]=1);for(e=0;e<7;e++,n>>=1)1&n&&(s[8+r*(r-7+e)]=1,e?s[6-e+8*r]=1:s[7+8*r]=1)},_interleaveBlocks:function(){var t,e,i=this._dataBlock,n=this._ecc,s=this._eccBlock,r=0,o=this._calculateMaxLength(),a=this._neccBlock1,h=this._neccBlock2,f=this._stringBuffer;for(t=0;t<i;t++){for(e=0;e<a;e++)n[r++]=f[t+e*i];for(e=0;e<h;e++)n[r++]=f[a*i+t+e*(i+1)]}for(e=0;e<h;e++)n[r++]=f[a*i+t+e*(i+1)];for(t=0;t<s;t++)for(e=0;e<a+h;e++)n[r++]=f[o+t+e*s];this._stringBuffer=n},_insertAlignments:function(){var t,e,i,n=this._version,s=this.width;if(n>1)for(t=u.BLOCK[n],i=s-7;;){for(e=s-7;e>t-3&&(this._addAlignment(e,i),!(e<t));)e-=t;if(i<=t+9)break;i-=t,this._addAlignment(6,i),this._addAlignment(i,6)}},_insertFinders:function(){var t,e,i,n,s=this.buffer,r=this.width;for(t=0;t<3;t++){for(e=0,n=0,1===t&&(e=r-7),2===t&&(n=r-7),s[n+3+r*(e+3)]=1,i=0;i<6;i++)s[n+i+r*e]=1,s[n+r*(e+i+1)]=1,s[n+6+r*(e+i)]=1,s[n+i+1+r*(e+6)]=1;for(i=1;i<5;i++)this._setMask(n+i,e+1),this._setMask(n+1,e+i+1),this._setMask(n+5,e+i),this._setMask(n+i+1,e+5);for(i=2;i<4;i++)s[n+i+r*(e+2)]=1,s[n+2+r*(e+i+1)]=1,s[n+4+r*(e+i)]=1,s[n+i+1+r*(e+4)]=1}},_insertTimingGap:function(){var t,e,i=this.width;for(e=0;e<7;e++)this._setMask(7,e),this._setMask(i-8,e),this._setMask(7,e+i-7);for(t=0;t<8;t++)this._setMask(t,7),this._setMask(t+i-8,7),this._setMask(t,i-8)},_insertTimingRowAndColumn:function(){var t,e=this.buffer,i=this.width;for(t=0;t<i-14;t++)1&t?(this._setMask(8+t,6),this._setMask(6,8+t)):(e[8+t+6*i]=1,e[6+i*(8+t)]=1)},_insertVersion:function(){var t,e,i,n,s=this.buffer,r=this._version,o=this.width;if(r>6)for(t=d.BLOCK[r-7],e=17,i=0;i<6;i++)for(n=0;n<3;n++,e--)1&(e>11?r>>e-12:t>>e)?(s[5-i+o*(2-n+o-11)]=1,s[2-n+o-11+o*(5-i)]=1):(this._setMask(5-i,2-n+o-11),this._setMask(2-n+o-11,5-i))},_isMasked:function(t,e){var i=v._getMaskBit(t,e);return 1===this._mask[i]},_pack:function(){var t,e,i,n=1,s=1,r=this.width,o=r-1,a=r-1,h=(this._dataBlock+this._eccBlock)*(this._neccBlock1+this._neccBlock2)+this._neccBlock2;for(e=0;e<h;e++)for(t=this._stringBuffer[e],i=0;i<8;i++,t<<=1){128&t&&(this.buffer[o+r*a]=1);do{s?o--:(o++,n?0!==a?a--:(n=!n,6===(o-=2)&&(o--,a=9)):a!==r-1?a++:(n=!n,6===(o-=2)&&(o--,a-=8))),s=!s}while(this._isMasked(o,a))}},_reverseMask:function(){var t,e,i=this.width;for(t=0;t<9;t++)this._setMask(t,8);for(t=0;t<8;t++)this._setMask(t+i-8,8),this._setMask(8,t);for(e=0;e<7;e++)this._setMask(8,e+i-7)},_setMask:function(t,e){var i=v._getMaskBit(t,e);this._mask[i]=1},_syncMask:function(){var t,e,i=this.width;for(e=0;e<i;e++)for(t=0;t<=e;t++)this.buffer[t+i*e]&&this._setMask(t,e)}},{_createArray:function(t){var e,i=[];for(e=0;e<t;e++)i[e]=0;return i},_getMaskBit:function(t,e){var i;return t>e&&(i=t,t=e,e=i),i=e,i+=e*e,i>>=1,i+=t},_modN:function(t){for(;t>=255;)t=((t-=255)>>8)+(255&t);return t},N1:3,N2:3,N3:40,N4:10}),p=v,m=f.extend({draw:function(){this.element.src=this.qrious.toDataURL()},reset:function(){this.element.src=""},resize:function(){var t=this.element;t.width=t.height=this.qrious.size}}),g=h.extend(function(t,e,i,n){this.name=t,this.modifiable=Boolean(e),this.defaultValue=i,this._valueTransformer=n},{transform:function(t){var e=this._valueTransformer;return"function"==typeof e?e(t,this):t}}),k=h.extend(null,{abs:function(t){return null!=t?Math.abs(t):null},hasOwn:function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},noop:function(){},toUpperCase:function(t){return null!=t?t.toUpperCase():null}}),w=h.extend(function(t){this.options={},t.forEach(function(t){this.options[t.name]=t},this)},{exists:function(t){return null!=this.options[t]},get:function(t,e){return w._get(this.options[t],e)},getAll:function(t){var e,i=this.options,n={};for(e in i)k.hasOwn(i,e)&&(n[e]=w._get(i[e],t));return n},init:function(t,e,i){"function"!=typeof i&&(i=k.noop);var n,s;for(n in this.options)k.hasOwn(this.options,n)&&(s=this.options[n],w._set(s,s.defaultValue,e),w._createAccessor(s,e,i));this._setAll(t,e,!0)},set:function(t,e,i){return this._set(t,e,i)},setAll:function(t,e){return this._setAll(t,e)},_set:function(t,e,i,n){var s=this.options[t];if(!s)throw new Error("Invalid option: "+t);if(!s.modifiable&&!n)throw new Error("Option cannot be modified: "+t);return w._set(s,e,i)},_setAll:function(t,e,i){if(!t)return!1;var n,s=!1;for(n in t)k.hasOwn(t,n)&&this._set(n,t[n],e,i)&&(s=!0);return s}},{_createAccessor:function(t,e,i){var n={get:function(){return w._get(t,e)}};t.modifiable&&(n.set=function(n){w._set(t,n,e)&&i(n,t)}),Object.defineProperty(e,t.name,n)},_get:function(t,e){return e["_"+t.name]},_set:function(t,e,i){var n="_"+t.name,s=i[n],r=t.transform(null!=e?e:t.defaultValue);return i[n]=r,r!==s}}),M=w,b=h.extend(function(){this._services={}},{getService:function(t){var e=this._services[t];if(!e)throw new Error("Service is not being managed with name: "+t);return e},setService:function(t,e){if(this._services[t])throw new Error("Service is already managed with name: "+t);e&&(this._services[t]=e)}}),B=new M([new g("background",!0,"white"),new g("backgroundAlpha",!0,1,k.abs),new g("element"),new g("foreground",!0,"black"),new g("foregroundAlpha",!0,1,k.abs),new g("level",!0,"L",k.toUpperCase),new g("mime",!0,"image/png"),new g("padding",!0,null,k.abs),new g("size",!0,100,k.abs),new g("value",!0,"")]),y=new b,O=h.extend(function(t){B.init(t,this,this.update.bind(this));var e=B.get("element",this),i=y.getService("element"),n=e&&i.isCanvas(e)?e:i.createCanvas(),s=e&&i.isImage(e)?e:i.createImage();this._canvasRenderer=new c(this,n,!0),this._imageRenderer=new m(this,s,s===e),this.update()},{get:function(){return B.getAll(this)},set:function(t){B.setAll(t,this)&&this.update()},toDataURL:function(t){return this.canvas.toDataURL(t||this.mime)},update:function(){var t=new p({level:this.level,value:this.value});this._canvasRenderer.render(t),this._imageRenderer.render(t)}},{use:function(t){y.setService(t.getName(),t)}});Object.defineProperties(O.prototype,{canvas:{get:function(){return this._canvasRenderer.getElement()}},image:{get:function(){return this._imageRenderer.getElement()}}});var A=O,L=h.extend({getName:function(){}}).extend({createCanvas:function(){},createImage:function(){},getName:function(){return"element"},isCanvas:function(t){},isImage:function(t){}}).extend({createCanvas:function(){return document.createElement("canvas")},createImage:function(){return document.createElement("img")},isCanvas:function(t){return t instanceof HTMLCanvasElement},isImage:function(t){return t instanceof HTMLImageElement}});return A.use(new L),A});

//# sourceMappingURL=qrious.min.js.map
// search & replace & Jump to Line
function find(){
    
    viewSave();
    document.getElementById("filename").placeholder="Search..."
    document.getElementById("toLine").value="";
    document.getElementById("toLine").style.display="block";
    document.getElementById("filename-input").style.marginTop="-150%";
    document.getElementById("filename-input").style.height="33%";
    document.getElementsByClassName("Save-file-button")[0].innerHTML="Search";
    document.getElementsByClassName("Save-file-button")[0].onclick=function(){
      editor.execCommand("find");
      if(document.querySelectorAll(".cm-searching").length==0){
        document.getElementById("filename").style.color="red";
      }
      setTimeout(function(){
        document.getElementById("filename").style.color="white";
      },750);
      doSearch();
      startSearch();
      dialog();
    };
    document.getElementById("filename").onclick=function(){
      find();
    };
    document.getElementById("find-Prev").onclick=function(){
      
      editor.execCommand("findPrev");
    };
    document.getElementById("find-Next").onclick=function(){
      
      editor.execCommand("findNext");
    };
    document.getElementById("find-Prev").style.opacity="1";
    document.getElementById("find-Next").style.opacity="1";
    document.getElementsByClassName("switch-button-loader")[0].style.display="block";
    document.getElementsByClassName("switch-event")[0].style.display="block";
    document.getElementById("filename-input").style.opacity="1";
  }
  function toRight(){
    document.getElementsByClassName("switch-event")[0].style.marginLeft="210px";
    document.getElementsByClassName("switch-event")[0].innerHTML="Search";
    document.getElementById("find-Prev").style.opacity="1";
    document.getElementsByClassName("switch-event")[0].onclick=function(){
      toLeft();
    };
    document.getElementById("find-Next").innerHTML="All";
    document.getElementById("filename").placeholder="Find";
    document.getElementById("toLine").placeholder="Replace";
    document.getElementById("toLine").type="text";
    document.getElementById("filename").onclick=function(){
      
    };
    document.getElementById("toLine").onclick=function(){
      
    };
    document.getElementById("find-Next").onclick=function(){
      
      editor.setValue(editor.getValue().replaceAll(document.getElementById("filename").value,document.getElementById("toLine").value));
    };
    document.getElementById("find-Prev").style.opacity="0";
    document.getElementsByClassName("Save-file-button")[0].innerHTML="Replace";
    document.getElementsByClassName("Save-file-button")[0].onclick=function(){
      editor.setValue(editor.getValue().replace(document.getElementById("filename").value,document.getElementById("toLine").value));
    };
    document.getElementById("toLine").setAttribute("oninput",function(){
      
    });
    document.getElementById("filename").value="";
    document.getElementById("toLine").value="";
    editor.execCommand("find");
  }
  function toLeft(){
    document.getElementsByClassName("switch-event")[0].style.marginLeft="110px";
    document.getElementsByClassName("switch-event")[0].innerHTML="Replace";
    document.getElementById('filename').value='';
    document.getElementsByClassName("switch-event")[0].onclick=function(){
      toRight();
    };
    document.getElementById("filename").placeholder="Search";
    document.getElementById("filename").onclick=function(){
      find();
    };
    document.getElementById("toLine").type="number";
    document.getElementById("toLine").setAttribute("oninput",function(){
      document.getElementsByClassName("Save-file-button")[0].innerHTML="Jump to Line "+document.getElementById("toLine").value;
    });
    document.getElementById("toLine").placeholder="Jump to Line";
    document.getElementById("find-Prev").style.opacity="1";
    document.getElementById("find-Next").innerHTML="»";
    document.getElementById("find-Next").onclick=function(){
      editor.execCommand("findNext");
    };
    document.getElementsByClassName("Save-file-button")[0].onclick=function(){
      editor.execCommand("find");
    };
    document.getElementById("toLine").onclick=function(){
    document.getElementsByClassName("Save-file-button")[0].innerHTML="Jump to Line "+document.getElementById("toLine").value;
    document.getElementsByClassName("Save-file-button")[0].onclick=function(){
    editor.setCursor({line: document.getElementById("toLine").value - 1});
    };
    };
    document.getElementById("filename").click();
  }
// to left 110px
// to right 210px
