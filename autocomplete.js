/* autocomplete.js */
var autocomplete = {
	output:[],
	config:null,
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
	complete: function(config_autocomplete, callback){
		var inputObject = document.getElementById(config_autocomplete.inputId);
		var that = this; 
		inputObject.addEventListener('keyup', function(){
			var toSend = config_autocomplete.getVar + "="+ this.value
			//alert(toSend);
			var path = config_autocomplete.path;
			that.callAjax(path, toSend, function(data){
				var myData = JSON.parse(data);
				that.showList(config_autocomplete, myData, callback);
			});	
		});		
	},
	showList: function(config, data, callback){
		var currentElement = document.getElementById(config.divList);
		currentElement.innerHTML = "";
        for (var i = data.length - 1; i >= 0; i--) {
        	var innerChild = document.createElement('div');
			innerChild.setAttribute('class', config.divListEach);
        	for (var key in data[i]) {

        		innerChild.setAttribute('data-'+key, data[i][key]);

        	};

			innerChild.innerHTML = data[i][config.innerHTMLkey];
			currentElement.appendChild(innerChild);
			var that = this;
			toSendData = data[i];
			innerChild.addEventListener('click', function(){
				that.addTag(config, this);
				callback(data, that.output);
			});
			
		};
	},
	addTag: function(config, elemObj){
		tagData = this.getDataset(elemObj);
		if(this.in_array(tagData, this.output)){
			//alert(this.output);
			return false;
		}
		this.output.push(tagData);
		var currentElement = document.getElementById(config.divTag);
		//add element and append it
		var tagElem = document.createElement('span');
		for (var key in tagData) {
        	tagElem.setAttribute('data-'+key, tagData[key]);
        };
		tagElem.setAttribute('class', config.elemClass);
		tagElem.innerHTML = tagData[config.innerHTMLkey];
		currentElement.appendChild(tagElem);
	},

	in_array: function (needle, haystack) {
	  for (var i = haystack.length - 1; i >= 0; i--) {
	  //alert("haystack: "+JSON.stringify(haystack[i]));
	  //alert("needle:" + JSON.stringify(needle));
	  	if(JSON.stringify(haystack[i]) == JSON.stringify(needle)){
	  		//alert("Same-same");
	  		return true;

	  	}
	  }
	  return false;
	},
	getDataset: function(objHtmlElem){
		if(objHtmlElem.dataset){
			return objHtmlElem.dataset;
		} else {
			//Write another workaround
		}
	},
	setConfig: function(conf){
		this.config = conf;
		return this.config;
	}
}
/* End Object */
