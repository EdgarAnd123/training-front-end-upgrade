import api from '../api/api.js'

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

async function drawChart() {
    const dataTable = new google.visualization.DataTable();
    const tableOptions = {
        'title': 'Posts created by users',
        'width': 500,
        'height': 500
    };
    const postsList = await api("https://jsonplaceholder.typicode.com/posts?_start=0&_limit=94");
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
    let postOccurrence;

    postsArray.forEach( post => {
        postOccurrence = postsOccurrences.find(item => item[key] == post[key]);
        
        if (postOccurrence) {
            postOccurrence.occurrence++;
        } else {
            let newPostOcurrence = {
                [key]: post[key],
                ['occurrence']: 1
            };
            postsOccurrences = [...postsOccurrences, newPostOcurrence];
        }
    })
    
    return postsOccurrences;
}

function postOccurrences(postsOccurrences, userId) {
    return postsOccurrences.find( post => post.userId === userId ).occurrence;
}