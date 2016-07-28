const CHART = document.getElementById("doughnutChart");
console.log(CHART);

var data = {
    labels: [
        "Blue",
        "Yellow"
    ],
    datasets: [
        {
            data: [300, 100],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ]
        }]
  };

let doughnutChart = new Chart(CHART, {
  type: 'doughnut',
  data: data
});
