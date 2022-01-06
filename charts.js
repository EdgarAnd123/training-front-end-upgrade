import api from './api/api.js';

const template = document.createElement('template');
template.innerHTML =  
`
<style>
    #chart {
        max-width: 1500px
    }
</style>
<div id="chart"> </div>
`
class Chart extends HTMLElement {
    constructor() {
        super();
        
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.title = this.getAttribute('title');
        this.apiSource = this.getAttribute('api');
        this.chartType = this.getAttribute('type');

        this.drawChart = this.drawChart.bind(this);
        this.chartResizer = this.chartResizer.bind(this);
        
        window.addEventListener('resize', this.chartResizer);
    }

    async drawChart() {
        const dataTable = new google.visualization.DataTable();
        const tableOptions = {
            'title': `${this.title}`,
            'height': 350
        };
        const chartsMap = {
            'bar': () => new google.visualization.BarChart(this.shadowRoot.querySelector('#chart')),
            'pie': () => new google.visualization.PieChart(this.shadowRoot.querySelector('#chart')),
            'default': () => new google.visualization.BarChart(this.shadowRoot.querySelector('#chart'))
        };

        dataTable.addColumn('string', 'User Id');
        dataTable.addColumn('number', 'Total Posts');

        try {
            const postsList = await api(this.apiSource);

            if(postsList) {
                const posts = [...new Map(postsList.map( post => [post['userId'], post])).values()];
                const postsOccurrencesMap = this.counterPostsOccurrences(postsList, 'userId');
            
                posts.forEach( post => dataTable.addRow([post.userId.toString(), this.postOccurrences(postsOccurrencesMap, post.userId)]));
                
                const chart = (chartsMap[this.chartType] || chartsMap['default'])();
                chart.draw(dataTable, tableOptions);
            }
        } catch(e) {
            console.log(e);
        }
    }

    connectedCallback() {
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(this.drawChart);
    }

    counterPostsOccurrences(postsArray, key) {
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

    postOccurrences(postsOccurrences, userId) {
        return postsOccurrences.find( post => post.userId === userId ).occurrence;
    }

    chartResizer() {
        const options = {
            'width': '100%'
        };
    
        const data = new google.visualization.DataTable([]);
        this.drawChart(data, options);
    };
}

window.customElements.define('custom-chart', Chart);