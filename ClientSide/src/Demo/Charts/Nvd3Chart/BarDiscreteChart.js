import React from 'react';
import { Spinner } from 'react-bootstrap'
import NVD3Chart from 'react-nvd3';
import { withCookies } from 'react-cookie';
import GetMalade from '../../../middleware/malade/GetMalade';
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
        }]
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
        var {cookies} = this.props;
        GetMalade(cookies.get('jwt')).then(malades=>{
            this.setState({
                malades: malades,
                loading: this.state.loading + 1
            }, () => {
                var malade
                for (malade of this.state.malades) {
                    malade.sexe === "Homme" ?
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

export default withCookies(BarDiscreteChart);