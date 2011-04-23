var first = true;
var second = false;
var third = false;
var last = false;
var firstX, firstY;

$(function() {
	var canvas = $("#myCanvas");
	var c_canvas = document.getElementById("myCanvas");
	$("#clear").bind({
		click: function(){
			c_canvas.width = c_canvas.width;
			first = true;
			second = false;
			third = false;
			last = false;
		}
	});
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
				context.lineTo(firstX, firstY);
				context.strokeStyle = "black";
				context.stroke();
				saveSelection();
				last = false;
			}
			if (third == true){				
				context.lineTo(x, y);
				context.moveTo(x, y);
				context.strokeStyle = "black";
				context.stroke();
				third = false;
				last = true;
			}
			if (second == true){
				context.lineTo(x, y);
				context.moveTo(x, y);
				context.strokeStyle = "black";
				context.stroke();
				third = true;
				second = false;	
			}
			if (first == true){
				context.clear;
				//something around two contexts
				context.moveTo(x, y);
				firstX = x;
				firstY = y;
				first = false;
				second = true;
			}	
		}
	});
});
function selectionSaved(){
	//change this to anmiate - look up the command
	$('#feedback').append('<div class="saved">'+ "Selection Saved" + "</div>");  	
	$('#selections').append('<div class="saved">' + "Select 1" + "</div>");  	
}
