//This function puts together the pie chart from a two-dimensional array.
//Need to pull in publication title, currently set as a hard-coded var in getChartData function
function loadChart(dataArray, publication) {
  google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {

        var data = google.visualization.arrayToDataTable(dataArray);
        var options = {};

        function setPub(publication, options) {
          options.title = publication + ' Headlines Today';
        };

        setPub(publication, options);
        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(data, options);
      }
}

//This is a hard-coded topicsCount object so I had something to work from
var topicsCount = {
  'Sport': 2.84,
  'Politics': 8.5,
  'Business': 2.17,
  'Violence': 3.08,
  'Environment': 1.1,
  'Tech': 1.7
};

//This builds the data structure for the pie chart from the topicsCount object
function getChartData() {
  var publication = 'BBC';
  var chartData = [['Category', 'score']];
  var keys = Object.keys(topicsCount);
    keys.forEach(function(key) {
        chartData.push([key, topicsCount[key]]);
    });
    console.log(topicsCount, keys, chartData);
    return loadChart(chartData, publication);
}

getChartData(topicsCount);
