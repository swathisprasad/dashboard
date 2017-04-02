$(function(){ //DOM Ready
	
	//instantiate gridster 
	$(".gridster > ul").gridster({
		widget_margins: [8, 8],
		widget_base_dimensions: [100, 55]
	});
	
	//fill first widget
	firstChart();

	//fill second widget
	secondChart();

	//fill third widget
	thirdChart();
	
	//fill fourth widget
	fourthChart();
	
	$("#export").on("click", function() {
		exportDashboard();
	});
});

function firstChart() {
	var canvas = document.getElementById('chart1').getContext('2d');
	new Chart(canvas, {
		type: 'line',
		data: {
			labels: ["A", "B", "C", "O", "G", "W", "S"],
			datasets: [{
				label: 'Mercedes',
				data: [12, 19, 3, 17, 6, 3, 7],
				backgroundColor: "rgba(182, 213, 139, 0.5)"
			}, {
				label: 'BMW',
				data: [2, 29, 5, 5, 2, 3, 10],
				backgroundColor: "rgba(182, 133, 139, 1)"
			}]
		}
	});
}

function secondChart() {
	var canvas = document.getElementById("chart2").getContext('2d');
	new Chart(canvas, {
		type: 'bar',
		data: {
			labels: ["A", "B", "C", "O", "G", "W", "S"],
			datasets: [{
				label: 'Volkswagen',
				data: [12, 20, 3, 17, 30, 24, 7],
				backgroundColor: "rgba(195, 161, 174, 1)"
			}, {
				label: 'Porsche',
				data: [35, 25, 5, 5, 21, 3, 10],
				backgroundColor: "rgba(119, 150, 143, 1)"
			}]
		}
	});
}

function thirdChart() {
	var canvas = document.getElementById("chart3").getContext('2d');
	new Chart(canvas, {
		type: 'pie',
		data: {
			labels: ["A", "B", "C", "O", "G", "W", "S"],
			datasets: [{
				backgroundColor: [
					"#00838f", 
					"#ffd54f", 
					"#8d6e63", 
					"#90a4ae", 
					"#4caf50", 
					"#009688", 
					"#e74c3c"
					],
					data: [12, 19, 3, 17, 28, 24, 7]
			}]
		}
	});
}

function fourthChart() {
	var canvas = document.getElementById("chart4").getContext('2d');
	new Chart(canvas, {
		type: 'doughnut',
		data: {
			labels: ["A", "B", "C", "D", "E", "F", "G"],
			datasets: [{
				backgroundColor: [
					"#01579b", 
					"#1b5e20", 
					"#827717", 
					"#512da8", 
					"#4e342e", 
					"#424242", 
					"#c51162"
					],
					data: [12, 19, 3, 17, 28, 24, 7]
			}]
		}
	});
}

function exportDashboard() {
	//instantiate jsPDF 
	var doc = new jsPDF('p','mm','a4');
	doc.addHTML($("ul"), 15, 15, {
		'background': '#fff',
	}, function() {
		doc.save('dashboard.pdf');
	});
}