import React from 'react';
import { Spinner } from 'react-bootstrap'
import NVD3Chart from 'react-nvd3';
import { withCookies } from 'react-cookie';
import GetStatistics from '../../../middleware/malade/GetStatistics';

var datum = [
    {
        key: "Cumulative Return",
        values: [
            {
                label :'0 à 10 ans',
                value: 0,
                color :"#e0d100"
            } ,
            {
                label :'11 à 20 ans',
                value: 0,
                color :"#6ce000"
            } ,
            {
                label :'21 à 30 ans',
                value: 0,
                color :"#00e043"
            } ,
            {
                label :'31 à 40 ans',
                value: 0,
                color :"#009de0"
            } ,
            {
                label :'41 à 50 ans',
                value: 0,
                color :"#001ee0"
            } ,
            {
                label :'51 à 60 ans',
                value: 0,
                color :"#3c00e0"
            } ,
            {
                label :'61 à 70 ans',
                value: 0,
                color :"#7b00e0"
            } ,
            {
                label :'71 à 80 ans',
                value: 0,
                color :"#e00000"
            } 
        ]
    }
];

class BarDiscreteChart extends React.Component {
    state = {
        loading: true,
    }

    componentWillMount() {
        this.refreshMalades()
    }

    refreshMalades() {
        var {cookies} =this.props;
        GetStatistics(cookies.get('jwt')).then(Stats=>{
            datum.values= Stats.Age ;
            this.setState({
                loading: false
            }, () => {
                var age;
                var i=0;
                for (age of Stats.Age) {
                    console.log(age.value);
                    datum[0].values[i].value = age.value
                    i++;
                }
            })    
        });
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

export default withCookies(BarDiscreteChart);