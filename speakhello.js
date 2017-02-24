(function(window){
var hellospeaker = {};

hellospeaker.speak = function(names){

	console.log("hi" +names);
}
window.hellospeaker=hellospeaker;
})(window);