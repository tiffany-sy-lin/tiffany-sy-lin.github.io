<script src="node_modules/chart.js/Chart.min.js"></script>
<script src="node_modules/angular-chart.js/dist/angular-chart.min.js"></script>

aangular.module("app", ["chart.js"]).controller("DoughnutCtrl", function ($scope) {
  $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
  $scope.data = [300, 500, 100];
});

(function (ChartJsProvider) {
  ChartJsProvider.setOptions({ colors : [ '#803690', '#00ADF9', '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'] });
});