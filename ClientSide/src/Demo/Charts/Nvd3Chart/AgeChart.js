import React from 'react';
import axios from 'axios'
import { Spinner } from 'react-bootstrap'
import NVD3Chart from 'react-nvd3';

var datum = [
    {
        key: "Cumulative Return",
        values: [
            {
                label :'0 à 10' ,
                value: 0,
                color :"#009de0"
            } ,
            {
                label :'11 à 20' ,
                value: 0,
                color :"#ca03fc"
            } ,
            {
                label :'21 à 30' ,
                value: 0,
                color :"#62e331"
            } ,
            {
                label :'31 à 40' ,
                value: 0,
                color :"#72c3e1"
            } ,
            {
                label :'41 à 50' ,
                value: 0,
                color :"#779da1"
            } ,
            {
                label :'51 à 60' ,
                value: 0,
                color :"#f29400"
            } ,
            {
                label :'61 à 70' ,
                value: 0,
                color :"#feed01"
            } ,
            {
                label :'71 à 80' ,
                value: 0,
                color :"#bd1320"
            } 
        ]
    }
];

const colors = [
    '#009de0',
    '#bd1320',
    '#feed01',
    '#f29400',
    '#779da1',
    '#72c3e1',
    '#62e331',
    '#7b03fc',
    '#ca03fc'
]
class BarDiscreteChart extends React.Component {
    state = {
        loading: true,
    }

    componentWillMount() {
        this.refreshMalades()
    }

    refreshMalades() {
        axios.get('http://localhost:5200/malade/statistics').then((response) => {
        
            datum.values=response.data.Stats.Age    
        this.setState({
                loading: false
            }, () => {
                var age;
                var i=0;
                for (age of response.data.Stats.Age) {
                    console.log(age.value);
                    datum[0].values[i].value = age.value
                    i++;
                }
            })
        })
    }
    render() {
        return (
            this.state.loading  ?
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner> :
            
            <NVD3Chart tooltip={{ enabled: true }} type="discreteBarChart" datum={datum} x="label" y="value" width= {window.innerWidth-400} height={300} showValues />
                

        )
    }
}

export default BarDiscreteChart;