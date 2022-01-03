import api from './api.js'

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

async function drawChart() {
    const dataTable = new google.visualization.DataTable();
    const tableOptions = {
        'title': 'Posts created by users',
        'width': 500,
        'height': 500
    };
    const postsList = await api();
    const posts = [...new Map(postsList.map( post => [post['userId'], post])).values()];
    const postsOccurrencesMap = counterPostsOccurrences(postsList, 'userId');

    dataTable.addColumn('string', 'User Id');
    dataTable.addColumn('number', 'Total Posts');

    posts.forEach( post => dataTable.addRow([post.userId.toString(), postOccurrences(postsOccurrencesMap, post.userId)]));

    const pieChart = new google.visualization.PieChart(document.getElementById('pie_chart_div'));
    pieChart.draw(dataTable, tableOptions);

    const barChart = new google.visualization.BarChart(document.getElementById('bar_chart_div'));
    barChart.draw(dataTable, tableOptions);
}

function counterPostsOccurrences(postsArray, key) {
    let postsOccurrences = [];

    postsArray.forEach( (post) => {
        if (postsOccurrences.some(item => item[key] == post[key]) ) {
            postsOccurrences.forEach( e => {
                if (e[key] === post[key]) {
                    e.occurrence++
                }
            })
        } else {
            let newPostOcurrence = {};
            newPostOcurrence[key] = post[key];
            newPostOcurrence.occurrence = 1;
            postsOccurrences = [...postsOccurrences, newPostOcurrence];
        }
    })

    return postsOccurrences;
}

function postOccurrences(postsOccurrences, userId) {
    return postsOccurrences.find( post => post.userId === userId ).occurrence;
}