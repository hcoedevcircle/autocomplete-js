autocomplete
====

An JS library, that can be hooked into a input field, and create an autocomplete field. (Server side code to be written according to need)


Example
----

You need a form: (and a special input)
```html
<form id="someform">
  <span id="tag-div"></span>
    <input type="text" id="complete">
  <div id="list-div"></div>
</form>
```

Include the JS File (at the end of doc) 

```html
<script type="text/javascript" src="autocomplete.js"></script>
```

Write the cofiguration

```js
var config = {
	inputId:'complete', /* Which input field to hook on*/
	path:"data.php",    /* Where to get data*/
	divList:"list-div", /* ID for div to list autocomplete status ( you need to create this div) */
	divListEach:"list", /* class-name for each element in autocomplete (no need to create this div)*/
	divTag:"tag-div",   /* ID of element which will contain the selected thing */
	elemClass:"tags",   /* class of every element in tagged list */
	getVar:"sent",      /* The QueryString param*/ 
	innerHTMLkey:"name" /* The object key that is to be used as innerHTML*/
}
```

Do the magic
```js
autocomplete.complete(config, function(data, output){
	//Do whateer you like to do with data and output (called when a thing in the suggestion is clicked)
}); 
```
