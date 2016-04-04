    var parse = d3.time.format("%m/%d/%y").parse;

    var dataset_csv = function() {
        d3.csv("dataset-new.csv", function(data) {
            dataset = data.map(function(d) {
                operator = d.Operator;
                year = new Date(+d.Year, 0, 1);
                aboard = +d.Aboard;
                fatalities = +d.Fatalities;
                return { "operator": operator, "year": year, "aboard": aboard, "fatalities": fatalities };
            })
            console.log(dataset);
            bars(dataset);
        })
    };

    var airCanadaData = function() {
        d3.csv("dataset-new.csv", function(data) {
            dataset = data.map(function(d) {
            	console.log(d)
                if (d.Operator == "Air Canada") {
                    operator = d.Operator;
                    year = new Date(+d.Year, 0, 1);
                    aboard = +d.Aboard;
                    fatalities = +d.Fatalities;
                    return { "operator": operator, "year": year, "aboard": aboard, "fatalities": fatalities };
                }
            })
            console.log(dataset);
            bars(dataset);
        })
    };