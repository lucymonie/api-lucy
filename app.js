function loadChart(dataArray) {
  google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {

        var data = google.visualization.arrayToDataTable(dataArray);

        var options = {
          title: 'BBC Headlines Today'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }
}

var topicsCount = {
  'Sport': 2.84,
  'Politics': 8.5,
  'Business': 2.17,
  'Violence': 3.08,
  'Environment': 1.1,
  'Tech': 1.7
};

function getChartData() {
  var chartData = [['Category', 'score']];
  var keys = Object.keys(topicsCount);
    keys.forEach(function(key) {
        chartData.push([key, topicsCount[key]]);
    });
    console.log(topicsCount, keys, chartData);
    return loadChart(chartData);
}

getChartData(topicsCount);
