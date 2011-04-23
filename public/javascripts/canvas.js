var first = true;
var second = false;
var third = false;
var last = false;
var coordinates = new Array();
$(function() {
	var canvas = $("#myCanvas");
	var c_canvas = document.getElementById("myCanvas");
	
	//saves selection and makes ajax call to pass the array to controller
	$("#saveSelection").bind({
		click: function(){
			if (last == true){
			  var c_canvas = document.getElementById("myCanvas");
			  c_canvas.width = c_canvas.width;
			  first = true;
			  second = false;
			  third = false;
			  last = false;
				$.post("save_selection", {x1: coordinates});
			}else{
				alert("Please select an area first. Click clear to redo the selection");
			}
		}
	});
	
	//clears the areas on the screen and restarts current selection
	$("#clear").bind({
		click: function(){
			c_canvas.width = c_canvas.width;
			first = true;
			second = false;
			third = false;
			last = false;
		}
	});
	
	//gets the coordinates of each click to draw the rectangle
	$("#myCanvas").bind({
		click: function(e){
			var position = canvas.position();
			var top_offset = position.top;
			var left_offset = position.left;
			var context = c_canvas.getContext("2d");
			
			var x = e.pageX - left_offset - 6;
			var y = e.pageY - top_offset;
			context.fillRect(x, y, 6, 6);
			if (last == true){
				context.lineTo(x, y);
				context.moveTo(x, y);
				coordinates[6] = x;
				coordinates[7] = y;
				context.lineTo(coordinates[0], coordinates[1]);
				context.strokeStyle = "black";
				context.stroke();
				saveSelection();
			}
			if (third == true){				
				context.lineTo(x, y);
				context.moveTo(x, y);
				coordinates[4] = x;
				coordinates[5] = y;
				context.strokeStyle = "black";
				context.stroke();
				third = false;
				last = true;
			}
			if (second == true){
				context.lineTo(x, y);
				context.moveTo(x, y);
				coordinates[2] = x;
				coordinates[3] = y;
				context.strokeStyle = "black";
				context.stroke();
				third = true;
				second = false;	
			}
			if (first == true){
				context.clear;
				context.moveTo(x, y);
				coordinates[0] = x;
				coordinates[1] = y;
				first = false;
				second = true;
			}	
		}
	});
});
