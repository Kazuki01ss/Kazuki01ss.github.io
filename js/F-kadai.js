var lineLabels = ['F-15', 'A-10', 'F-16', 'F/A-18E/F', 'F-22', 'F-35'];

var data = {
    labels: lineLabels,
    datasets: [{
        label: '合計生産機数',
        borderColor: 'rgb(255, 100, 130)',
        backgroundColor: 'rgb(150, 50, 60)',
        data: [1198, 715, 4604, 608, 195, 625],
    }]
};

var lineConfig = {
    type: 'line',
    data,
    options: {},
};

var lineChart = new Chart(
    document.getElementById('lineChart'),
    lineConfig,
);



function fighter(Number) {
    var message = "";

    if (Number == 1) {
        message = "F-15の中で, A/B型が2790万USドル, C/D型は2990万USドル, J/DJ型は86億~101億5600万USドル, X型は8000万USドルとされています.";
    } else if (Number == 2) {
        message = "A-10は, 1180万USドルとされています.";
    } else if (Number == 3) {
        message = "F-16は, A/B型が1460万ドル, C/D型が1880万ドルとされています.";
    } else if (Number == 4) {
        message = "F/A-18E/Fは, 6600万ドルとされています.";
    } else if (Number == 5) {
        message = "F-22は, 1億5000万USドルとされています.";
    } else if (Number == 6) {
        message = "F-35は, A型が7790万USドル, B型が1億130万USドル, C型が9440万USドルとされています.";
    } else {
        message = "想定されてないです.";
    }
    alert(message);
}