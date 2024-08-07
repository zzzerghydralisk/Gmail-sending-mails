

//click func

function conv_clicks(mail_name){

function first_cl(){
	
document.getElementsByClassName("T-I T-I-KE L3")[0].click()

}

window.setTimeout(first_cl, 4900);

function fill_inf(){

chrome.storage.sync.get(['txt_val'], function(items) {
	var val_txt = items['txt_val']
	document.getElementsByClassName("Am Al editable LW-avf tS-tW")[0].innerHTML=val_txt
    });

document.getElementsByClassName("Am Al editable LW-avf tS-tW")[0].click()
document.getElementsByClassName("vO")[0].innerHTML=mail_name

chrome.storage.sync.get(['theme_val'], function(items) {
	var val_theme = items['theme_val']
	document.getElementsByClassName("aoT")[0].value=val_theme
    });
}

window.setTimeout(fill_inf, 8900);

function send_m () {
document.getElementsByClassName("T-I J-J5-Ji aoO v7 T-I-atl L3")[0].click()
}

window.setTimeout(send_m, 12900);

function rel_pg (){
	window.location.reload();
}

window.setTimeout(rel_pg, 15900);

}

////click func

var pgurl = window.location.href
 
//interface input
 
var input_names = document.createElement("input");
 
input_names.type="text";
input_names.value="Emails";
input_names.id="inp_mails"
input_names.setAttribute("style", "font-size:12px;border: 2px solid #008800;border-radius: 2px; position:absolute;z-index:5;width:45px;top:55px;right:380px;");
document.body.appendChild(input_names);
 
input_names.addEventListener("keyup", function(enter) {
if (enter.keyCode === 13) {
enter.preventDefault();
	simple_start()
}
});
 
//interface input

// text input

var input_text = document.createElement("input");

input_text.type="text";
input_text.value="Text";
input_text.id="inp_text"
input_text.setAttribute("style", "font-size:12px;border: 2px solid #880000;border-radius: 2px; position:absolute;z-index:5;width:45px;top:55px;right:450px;");
document.body.appendChild(input_text);

input_text.addEventListener("keyup", function(enter) {
if (enter.keyCode === 13) {
enter.preventDefault();
	set_text()
}
});

// text input

// theme input

var input_theme = document.createElement("input");

input_theme.type="text";
input_theme.value="Theme";
input_theme.id="inp_theme"
input_theme.setAttribute("style", "font-size:12px;border: 2px solid #000088;border-radius: 2px; position:absolute;z-index:5;width:45px;top:55px;right:520px;");
document.body.appendChild(input_theme);

input_theme.addEventListener("keyup", function(enter) {
if (enter.keyCode === 13) {
enter.preventDefault();
	set_theme()
}
});

// theme input

function set_text(){
	var inp_txt = input_text.value;
	var inp_txt_mod = (inp_txt+'</div>').replace(/xxx/g, '<div>');
	var inp_txt_mod2 =inp_txt_mod.replace(/"/g,'')
	
	chrome.storage.sync.set({'txt_val': inp_txt_mod2}, function() {
    });
	
	alert ('text is: '+inp_txt_mod2)
}

function set_theme(){
	var inp_theme_val = input_theme.value;
	
	chrome.storage.sync.set({'theme_val': inp_theme_val}, function() {
    });
	
	alert ('theme is: '+inp_theme_val)
}

function simple_start(){

	var inp_vals = input_names.value.split('!')
	console.log(inp_vals);
	
    chrome.storage.sync.set({'names_conv': inp_vals}, function() {
    console.log('set done');
    });
	
	window.location.reload();

	};

//// work with chrome storage and first function call for interface

if (pgurl.match('mail')!=null){
//
	chrome.storage.sync.get(['names_conv'], function(items) {
		
	var val_name = items['names_conv']//[0]
	
	if (val_name.length!=0){
		var val_name_inp = items['names_conv'][0]
		
		// setting new vars to storage
		items['names_conv'].shift()
		var m_items = items['names_conv']
		chrome.storage.sync.set({'names_conv': m_items}, function() {
		console.log(m_items);
		});
		// setting new vars to storage
		
		//main click func here
		conv_clicks(val_name_inp)
		
	}
	
  });
  
}



