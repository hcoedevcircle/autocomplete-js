var config_autocomplete = {
	path:"data.php",
	getVar:"sent"
}

var autocomplete = {	
	callAjax: function(path, value_pair, callback){
		var Ajax = new XMLHttpRequest();
		Ajax.onreadystatechange = function(){
			if(Ajax.readyState==4 && Ajax.status==200){
				callback(Ajax.responseText);
			}
		}

		Ajax.open('GET',path + '?'+ value_pair, true);
		Ajax.send();
	},
	complete: function(inputId, callback){
		var inputObject = document.getElementById(inputId);
		var that = this; 
		inputObject.addEventListener('keypress', function(){
			// global config_autocomplete; (Only for readability)
			var toSend = window.config_autocomplete.getVar + "="+ inputObject.value 
			var path = window.config_autocomplete.path;
			that.callAjax(path, toSend, function(data){
				var myData = JSON.parse(data);
				callback(myData);
			});	
		});		
	}
}


autocomplete.complete('complete', function(data){
	for (var i = data.length - 1; i >= 0; i--) {
		alert(data[i].id);
		alert(data[i].name);
	};
}); 