// A $( document ).ready() block.
$( document ).ready(function() {

	// DropCap.js
	var dropcaps = document.querySelectorAll(".dropcap");
	window.Dropcap.layout(dropcaps, 2);

	// Responsive-Nav
	var nav = responsiveNav(".nav-collapse", { label: "&#9776" });

	// Round Reading Time
    $(".time").text(function (index, value) {
      return Math.round(parseFloat(value));
    });

});


