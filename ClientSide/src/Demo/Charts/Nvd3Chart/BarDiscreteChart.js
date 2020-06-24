import React from 'react';
import axios from 'axios'
import { Spinner } from 'react-bootstrap'
import NVD3Chart from 'react-nvd3';

var datum = [
    {
        key: "Cumulative Return",
        values: [{
            "label": "Hommes",
            "value": 0,
            "color": "#4C5667"
        }, {
            "label": "Femmes",
            "value": 0,
            "color": "#3ebfea"
        },/* {
            "label": "C",
            "value": 32.807804682612,
            "color": "#ff8a65"
        }, {
            "label": "D",
            "value": 196.45946739256,
            "color": "#1de9b6"
        }, {
            "label": "E",
            "value": 0.25434030906893,
            "color": "#4C5667"
        }, {
            "label": "F",
            "value": -98.079782601442,
            "color": "#69CEC6"
        }, {
            "label": "G",
            "value": -13.925743130903,
            "color": "#a389d4"
        }, {
            "label": "H",
            "value": -5.1387322875705,
            "color": "#FE8A7D"
        }*/]
    }
];

class BarDiscreteChart extends React.Component {
    state = {
        malades: [],
        loading: 0,
    }

    componentWillMount() {
        this.refreshMalades()
    }

    refreshMalades() {
        axios.get('http://localhost:5200/malade/get').then((response) => {
            this.setState({
                malades: response.data.malades,
                loading: this.state.loading + 1
            }, () => {
                var malade
                for (malade of this.state.malades) {
                    malade.sexe == "Homme" ?
                        datum[0].values[0].value++
                        : datum[0].values[1].value++
                }
            })
        })
    }
    render() {
        return (
            this.state.loading >= 1 ?
                <NVD3Chart tooltip={{ enabled: true }} type="discreteBarChart" datum={datum} x="label" y="value" height={300} showValues />
                :
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>

        )
    }
}

export default BarDiscreteChart;