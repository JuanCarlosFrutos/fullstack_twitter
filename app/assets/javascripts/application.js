// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery3
//= require jquery_ujs
//= require jquery-ui
//= require jquery-ui/widgets/dialog
//= require rails-ujs
//= require turbolinks
//= require_tree .
function show_user(event ,id) {
	event.preventDefault();
	$.getJSON("users/" + id, function(data){
		$("#name").text(data.name);
		// console.log(data.name);
		$("#email").text(data.email);
		// console.log(data.email);
		$("#show").dialog({closeText:""});
	});
}

function show_microposts(event ,id) {
	event.preventDefault();
	$.getJSON("microposts/", function(data){

		var result = data.filter((micropost) => {
			return micropost.user_id === id;
		});
		var microposts = "";

		result.forEach((micropost) => {
			microposts = microposts + micropost.content + ", ";
		});

		$("#microposts").text(microposts);
		$("#show-micropost").dialog({closeText:""});
	});
}

function show_edit(event,id) {
	var path = "users/" + id + "/edit";
	event.preventDefault();
	$("#show-edit").load(path).dialog({closeText:""});
}

function hello_world() {
	console.log("Hello word!")
}

