
Morris.Donut({
  element: 'donut-example',
  data: [
    { label: "Failed orders", value: 2250 },
    { label: "In-Store Sales", value: 6461 },
    { label: "Mail-Order Sales", value: 2540 }
  ]
});
Morris.Bar({
  element: 'bar-example',
  data: [
    { y: '2006', a: 100, b: 90 },
    { y: '2007', a: 75, b: 65 },
    { y: '2008', a: 50, b: 40 },
    { y: '2009', a: 75, b: 65 },
    { y: '2010', a: 50, b: 40 },
    { y: '2011', a: 75, b: 65 },
    { y: '2012', a: 100, b: 90 }
  ],
  xkey: 'y',
  ykeys: ['a', 'b'],
  labels: ['Series A', 'Series B']
});
Morris.Line({
// ID of the element in which to draw the chart.
element: 'myfirstchart',
// Chart data records -- each entry in this array corresponds to a point on
// the chart.
data: [
  { year: '2008', value: 20 },
  { year: '2009', value: 10 },
  { year: '2010', value: 5 },
  { year: '2011', value: 5 },
  { year: '2012', value: 20 }
],
// The name of the data record attribute that contains x-values.
xkey: 'year',
// A list of names of data record attributes that contain y-values.
ykeys: ['value'],
// Labels for the ykeys -- will be displayed when you hover over the
// chart.
labels: ['Value']
});
var xValues = [100,200,300,400,500,600,700,800,900,1000];

var xValues = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

new Chart("myChart", {
type: "line",
data: {
  labels: xValues,
  datasets: [{
    data: [860, 1140, 1060, 1060, 1070, 1110, 1330, 2210, 7830, 2478],
    borderColor: "red",
    fill: false
  }, {
    data: [1600, 1700, 1700, 1900, 2000, 2700, 4000, 5000, 6000, 7000],
    borderColor: "green",
    fill: false
  }, {
    data: [300, 700, 2000, 5000, 6000, 4000, 2000, 1000, 200, 100],
    borderColor: "blue",
    fill: false
  }]
},
options: {
  legend: { display: false }
}
});

var xValues = [50,60,70,80,90,100,110,120,130,140,150];
var yValues = [7,8,8,9,9,9,10,11,14,14,15];

new Chart("myChart-1", {
type: "line",
data: {
  labels: xValues,
  datasets: [{
    fill: false,
    lineTension: 0,
    backgroundColor: "rgba(0,0,255,1.0)",
    borderColor: "rgba(0,0,255,0.1)",
    data: yValues
  }]
},
options: {
  legend: {display: false},
  scales: {
    yAxes: [{ticks: {min: 6, max:16}}],
  }
}
});


$(document).ready(function () {
  $("#table_id").DataTable({
    ajax: "./ajaxList.txt"
  });
});
