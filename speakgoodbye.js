(function(window){
var byespeaker = {};

byespeaker.speak=function(names){
	console.log("bye"  +names)
}
window.byespeaker=byespeaker;
})(window);