ejecta.include('Chart.js');
var w = window.innerWidth;
var h = window.innerHeight;
var w2 = w/2;
var h2 = h/2;

var canvas = document.getElementById('canvas');
canvas.width = w;
canvas.height = h;

//canvas.MSAAEnabled = true;
//canvas.MSAASamples = 4;

var ctx = canvas.getContext('2d');

var data = {
	labels: ["1", "2"],
	datasets: [
		{
			fillColor: "rgba(151,187,205,0.8)",
			data: [28,10]
		}
	]
};
var myLineChart = new Chart(ctx).Line(data, {});
