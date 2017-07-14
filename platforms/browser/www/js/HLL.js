/*
	name: Hosted Library Loader (HLL)
	developer: Richard Grant
	github: https://github.com/RichardGrant
*/
include = new (function(){
	this.srcs = {};
	this.src = function(key, src, callback){
		if(!(key in this.srcs)){
			this.srcs[key] = src;
			add_script(this.srcs[key], callback);
			return true;
		}else if(this.srcs[key] != src){
			this.srcs[key] = src;
			add_script(this.srcs[key], callback);
			return true;
		}
		return false;
	}
	this.chamber = function(srcs_, callback){
		var ret = true;
		var loaded_count = 0;
		var loading_count = 0;
		for(var key in srcs_){
			ret = (ret)?this.src(key, srcs_[key], function(){loaded_count++;}):false;
			loading_count++;
		}
		(function x(){
			setTimeout(function(){
				if(loaded_count != loading_count){
					x();
				}else{
					callback();
				}
			}, 1);
		})();
		return ret;
	}
	this.GHL = function(library, version, callback){
		var src = "";
		switch(library){
			case "angularjs":{
				var versions = ["1.5.7", "1.5.6", "1.5.5", "1.5.4", "1.5.3", "1.5.2", "1.5.1", "1.5.0", "1.4.12", "1.4.11", "1.4.10", "1.4.9", "1.4.8", "1.4.7", "1.4.6", "1.4.5", "1.4.4", "1.4.3", "1.4.2", "1.4.1", "1.4.0", "1.3.17", "1.3.16", "1.3.15", "1.3.14", "1.3.13", "1.3.12", "1.3.11", "1.3.10", "1.3.9", "1.3.8", "1.3.7", "1.3.6", "1.3.5", "1.3.4", "1.3.3", "1.3.2", "1.3.1", "1.3.0", "1.2.27", "1.2.26", "1.2.25", "1.2.24", "1.2.23", "1.2.22", "1.2.21", "1.2.20", "1.2.19", "1.2.18", "1.2.17", "1.2.16", "1.2.15", "1.2.14", "1.2.13", "1.2.12", "1.2.11", "1.2.10", "1.2.9", "1.2.8", "1.2.7", "1.2.6", "1.2.5", "1.2.4", "1.2.3", "1.2.2", "1.2.1", "1.2.0", "1.0.8", "1.0.7", "1.0.6", "1.0.5", "1.0.4", "1.0.3", "1.0.2", "1.0.1"];
				if(indexOf(versions,version) > -1){
					src = "https://ajax.googleapis.com/ajax/libs/angularjs/" + version + "/angular.min.js";
				}
				break;
			};
			case "angularmaterial":{
				var versions = ["0.11.4", "0.11.2", "0.11.1", "0.11.0", "0.10.1", "0.10.0", "0.9.4", "0.9.0", "0.8.3", "0.8.2", "0.8.1", "0.8.0", "0.7.1", "0.7.0", "0.6.1", "0.6", "1.0.9", "1.0.8", "1.0.7", "1.0.6", "1.0.5", "1.0.4", "1.0.3", "1.0.2", "1.0.1", "1.0.0", "1.1.0", "1.1.1"];
				if(indexOf(versions,version) > -1){
					src = "https://ajax.googleapis.com/ajax/libs/angular_material/" + version + "/angular-material.min.js";
				}
				break;
			};
			case "dojo":{
				var versions = ["1.11.2", "1.11.1", "1.10.6", "1.10.5", "1.10.4", "1.10.3", "1.10.2", "1.10.1", "1.10.0", "1.9.9", "1.9.8", "1.9.7", "1.9.6", "1.9.5", "1.9.4", "1.9.3", "1.9.2", "1.9.1", "1.9.0", "1.8.12", "1.8.11", "1.8.10", "1.8.9", "1.8.8", "1.8.7", "1.8.6", "1.8.5", "1.8.4", "1.8.3", "1.8.2", "1.8.1", "1.8.0", "1.7.10", "1.7.9", "1.7.8", "1.7.7", "1.7.6", "1.7.5", "1.7.4", "1.7.3", "1.7.2", "1.7.1", "1.7.0", "1.6.3", "1.6.2", "1.6.1", "1.6.0", "1.5.4", "1.5.3", "1.5.2", "1.5.1", "1.5.0", "1.4.6", "1.4.5", "1.4.4", "1.4.3", "1.4.1", "1.4.0", "1.3.2", "1.3.1", "1.3.0", "1.2.3", "1.2.0", "1.1.1"];
				if(indexOf(versions,version) > -1){
					src = "https://ajax.googleapis.com/ajax/libs/dojo/" + version + "/dojo/dojo.js";
				}
				break;
			};
			case "ext-core":{
				var versions = ["3.1.0", "3.0.0"];
				if(indexOf(versions,version) > -1){
					src = "https://ajax.googleapis.com/ajax/libs/ext-core/" + version + "/ext-core.js";
				}
				break;
			};
			case "hammerjs":{
				var versions = ["2.0.8"];
				if(indexOf(versions,version) > -1){
					src = "https://ajax.googleapis.com/ajax/libs/hammerjs/" + version + "/hammer.min.js";
				}
				break;
			};
			case "jquery":{
				var versions = ["3.1.1", "3.1.0", "3.0.0", "2.2.4", "2.2.3", "2.2.2", "2.2.1", "2.2.0", "2.1.4", "2.1.3", "2.1.1", "2.1.0", "2.0.3", "2.0.2", "2.0.1", "2.0.0", "1.12.4", "1.12.3", "1.12.2", "1.12.1", "1.12.0", "1.11.3", "1.11.2", "1.11.1", "1.11.0", "1.10.2", "1.10.1", "1.10.0", "1.9.1", "1.9.0", "1.8.3", "1.8.2", "1.8.1", "1.8.0", "1.7.2", "1.7.1", "1.7.0", "1.6.4", "1.6.3", "1.6.2", "1.6.1", "1.6.0", "1.5.2", "1.5.1", "1.5.0", "1.4.4", "1.4.3", "1.4.2", "1.4.1", "1.4.0", "1.3.2", "1.3.1", "1.3.0", "1.2.6", "1.2.3"];
				if(indexOf(versions,version) > -1){
					src = "https://ajax.googleapis.com/ajax/libs/jquery/" + version + "/jquery.min.js";
				}
				break;
			};
			case "jquerymobile":{
				var versions = ["1.4.5", "1.4.4", "1.4.3", "1.4.2", "1.4.1", "1.4.0"];
				if(indexOf(versions,version) > -1){
					src = "https://ajax.googleapis.com/ajax/libs/jquerymobile/" + version + "/jquery.mobile.min.";
					this.add_css(src + 'css');
					src += "js";
				}
				break;
			};
			case "jqueryui":{
				var versions = ["1.12.1", "1.12.0", "1.11.4", "1.11.3", "1.11.2", "1.11.1", "1.11.0", "1.10.4", "1.10.3", "1.10.2", "1.10.1", "1.10.0", "1.9.2", "1.9.1", "1.9.0", "1.8.24", "1.8.23", "1.8.22", "1.8.21", "1.8.20", "1.8.19", "1.8.18", "1.8.17", "1.8.16", "1.8.15", "1.8.14", "1.8.13", "1.8.12", "1.8.11", "1.8.10", "1.8.9", "1.8.8", "1.8.7", "1.8.6", "1.8.5", "1.8.4", "1.8.2", "1.8.1", "1.8.0", "1.7.3", "1.7.2", "1.7.1", "1.7.0", "1.6.0", "1.5.3", "1.5.2"];
				if(indexOf(versions,version) > -1){
					src = "https://ajax.googleapis.com/ajax/libs/jqueryui/" + version + "/";
					this.add_css(src + "themes/smoothness/jquery-ui.css");
					src += "jquery-ui.min.js";
				}
				break;
			};
			case "mootools":{
				var versions = ["1.6.0", "1.5.2", "1.5.1", "1.5.0", "1.4.5", "1.4.4", "1.4.3", "1.4.2", "1.4.1", "1.4.0", "1.3.2", "1.3.1", "1.3.0", "1.2.5", "1.2.4", "1.2.3", "1.2.2", "1.2.1", "1.1.2", "1.1.1"];
				if(indexOf(versions,version) > -1){
					var old_version = ["1.5.1", "1.5.0", "1.4.5", "1.4.4", "1.4.3", "1.4.2", "1.4.1", "1.4.0", "1.3.2", "1.3.1", "1.3.0", "1.2.5", "1.2.4", "1.2.3", "1.2.2", "1.2.1", "1.1.2", "1.1.1"];
					src = "https://ajax.googleapis.com/ajax/libs/mootools/" + version + "/" + ((indexOf(versions,old_version) > -1)? "mootools-yui-compressed.js" : "mootools.min.js");
				}
				break;
			};
			case "prototype":{
				var versions = ["1.7.3.0", "1.7.2.0", "1.7.1.0", "1.7.0.0", "1.6.1.0", "1.6.0.3", "1.6.0.2"];
				if(indexOf(versions,version) > -1){
					src = "https://ajax.googleapis.com/ajax/libs/prototype/" + version + "/prototype.js";
				}
				break;
			};
			case "scriptaculous":{
				var versions = ["1.9.0", "1.8.3", "1.8.2", "1.8.1"];
				if(indexOf(versions,version) > -1){
					src = "https://ajax.googleapis.com/ajax/libs/scriptaculous/" + version + "/scriptaculous.js";
				}
				break;
			};
			case "spf":{
				var versions = ["2.4.0", "2.3.2", "2.3.1", "2.3.0", "2.2.0", "2.1.2", "2.1.1", "2.1.0", "2.0.1", "2.0.0"];
				if(indexOf(versions,version) > -1){
					src = "https://ajax.googleapis.com/ajax/libs/spf/" + version + "/spf.js";
				}
				break;
			};
			case "swfobject":{
				var versions = ["2.2", "2.1"];
				if(indexOf(versions,version) > -1){
					src = "https://ajax.googleapis.com/ajax/libs/swfobject/" + version + "/swfobject.js";
				}
				break;
			};
			case "threejs":{
				var versions = ["r76", "r75", "r74", "r73", "r72", "r71", "r70", "r69", "r68", "r67"];
				if(indexOf(versions,version) > -1){
					src = "https://ajax.googleapis.com/ajax/libs/threejs/" + version + "/three.min.js";
				}
				break;
			};
			case "webfont":{
				var versions = ["1.6.26", "1.6.16", "1.5.18", "1.5.10", "1.5.6", "1.5.3", "1.5.2", "1.5.0"];
				if(indexOf(versions,version) > -1){
					src = "https://ajax.googleapis.com/ajax/libs/webfont/" + version + "/webfont.js";
				}
				break;
			};

		}
		if(src != ""){
			return this.src(library+version, src, callback);
		}
		return false;
	}
	function add_script(src_, callback_){
		var script  = document.createElement('script'),
		head = document.head || document.getElementsByTagName('head')[0];
		script.src = src_;
		var loaded = false;
		script.onreadystatechange  = function(){if(this.readyState == 'complete' || this.readyState == 'loaded'){loaded=true;}};
		script.onload = function(){loaded=true;};
		(function x(){
			setTimeout(function(){
				if(!loaded){
					x();
				}else{
					callback_();
				}
			}, 1);
		})();
		head.insertBefore(script, head.firstChild);
	}
	this.add_css = function (href){
		var link = document.createElement('link');
		link.href = href;
		link.rel = "stylesheet";
		document.getElementsByTagName('head')[0].appendChild(link);
	}
	function indexOf(obj, searchElement) {
		"use strict";
		if (obj == null) {
			throw new TypeError();
		}
		var t = Object(obj);
		var len = t.length >>> 0;
		if (len === 0) {
			return -1;
		}
		var n = 0;
		if (arguments.length > 0) {
			n = Number(arguments[2]);
			if (n != n) {
				n = 0;
			} else if (n != 0 && n != Infinity && n != -Infinity) {
				n = (n > 0 || -1) * Math.floor(Math.abs(n));
			}
		}
		if (n >= len) {
			return -1;
		}
		var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
		for (; k < len; k++) {
			if (k in t && t[k] === searchElement) {
				return k;
			}
		}
		return -1;
	}
})();