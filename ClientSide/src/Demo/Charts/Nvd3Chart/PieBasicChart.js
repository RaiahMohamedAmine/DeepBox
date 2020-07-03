import React from 'react';
import { Spinner } from 'react-bootstrap'
import NVD3Chart from 'react-nvd3';
import GetMaladeEtat from '../../../middleware/malade/GetMaladeEtat';
import {withCookies} from 'react-cookie';

var datum = [
    { key: "Suspects", y: 0, color: "#aac418" },
    { key: "Positifs", y: 0, color: "#e01433" },
    { key: "Négatifs", y: 0, color: "#27a348" },
    { key: "Guéris", y: 0, color: "#02a5d6" }
];

class PieBasicChart extends React.Component {
    state = {
        suspects: [],
        positifCases: [],
        negatifCases: [],
        healdCases: [],
        loading: 0,
    }

    componentWillMount() {
        this.refreshMalades()
    }

    refreshMalades() {
        var {cookies} = this.props;

        GetMaladeEtat('Suspect',cookies.get('jwt')).then(malades=>{
            this.setState({
                suspects: malades,
                loading : this.state.loading+1
            }, () => {
            datum[0].y = this.state.suspects.length
        })
        });

        GetMaladeEtat('Positif',cookies.get('jwt')).then(malades=>{
            this.setState({
                positifCases: malades,
                loading : this.state.loading+1
            }, () => {
            datum[1].y = this.state.positifCases.length
        })
        });

        GetMaladeEtat('Negatif',cookies.get('jwt')).then(malades=>{
            this.setState({
                negatifCases: malades,
                loading : this.state.loading+1
            }, () => {
            datum[2].y = this.state.negatifCases.length
        })
        });

        GetMaladeEtat('Gueri',cookies.get('jwt')).then(malades=>{
            this.setState({
                healdCases: malades,
                loading : this.state.loading+1
            }, () => {
            datum[3].y = this.state.healdCases.length
        })
        });
    }

    render() {
        return (
            this.state.loading >= 4 ?
                <NVD3Chart id="chart" height={300} type="pieChart" datum={datum} x="key" y="y" labelType='percent'/>
             :
        <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
        </Spinner>
        
        )
    }
}

export default withCookies(PieBasicChart);