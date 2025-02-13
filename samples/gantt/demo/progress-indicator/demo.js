// THE CHART
Highcharts.ganttChart('container', {
    title: {
        text: 'Gantt Chart with Progress Indicators'
    },

    xAxis: {
        min: Date.UTC(2014, 10, 17),
        max: Date.UTC(2014, 10, 30)
    },

    accessibility: {
        point: {
            descriptionFormatter: function (point) {
                var completedValue = point.completed ?
                        point.completed.amount || point.completed : null,
                    completed = completedValue ?
                        ' Task completed ' + Math.round(completedValue * 1000) / 10 + '%.' :
                        '';
                return Highcharts.format(
                    '{point.yCategory}.{completed} Start {point.x:%Y-%m-%d}, end {point.x2:%Y-%m-%d}.',
                    { point, completed }
                );
            }
        }
    },

    lang: {
        accessibility: {
            axis: {
                xAxisDescriptionPlural: 'The chart has a two-part X axis showing time in both week numbers and days.'
            }
        }
    },

    series: [{
        name: 'Project 1',
        data: [{
            name: 'Start prototype',
            start: Date.UTC(2014, 10, 18),
            end: Date.UTC(2014, 10, 25),
            completed: 0.25
        }, {
            name: 'Test prototype',
            start: Date.UTC(2014, 10, 27),
            end: Date.UTC(2014, 10, 29)
        }, {
            name: 'Develop',
            start: Date.UTC(2014, 10, 20),
            end: Date.UTC(2014, 10, 25),
            completed: {
                amount: 0.12,
                fill: '#fa0'
            }
        }, {
            name: 'Run acceptance tests',
            start: Date.UTC(2014, 10, 23),
            end: Date.UTC(2014, 10, 26)
        }]
    }]
});
