import React from 'react';
import axios from 'axios'
import { Spinner } from 'react-bootstrap'
import NVD3Chart from 'react-nvd3';

var datum = [
    { key: "Suspects", y: 0, color: "#ff8a65" },
    { key: "Positifs", y: 0, color: "#f4c22b" },
    { key: "Négatifs", y: 0, color: "#04a9f5" },
    { key: "Guéris", y: 0, color: "#3ebfea" }
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
        axios.get('http://localhost:5200/malade/get/Suspect').then((response) => {
            this.setState({
                suspects: response.data.malades,
                loading: this.state.loading + 1
            }, () => {
                datum[0].y = this.state.suspects.length
            })
        })
        axios.get('http://localhost:5200/malade/get/Positif').then((response) => {
            this.setState({
                positifCases: response.data.malades,
                loading: this.state.loading + 1
            }, () => {
                datum[1].y = this.state.positifCases.length
            })
        })
        axios.get('http://localhost:5200/malade/get/Negatif').then((response) => {
            this.setState({
                negatifCases: response.data.malades,
                loading: this.state.loading + 1
            }, () => {
                datum[2].y = this.state.negatifCases.length
            })
        })
        axios.get('http://localhost:5200/malade/get/Gueri').then((response) => {
            this.setState({
                healdCases: response.data.malades,
                loading: this.state.loading + 1
            }, () => {
                datum[3].y = this.state.healdCases.length
            })
        })
    }

    render() {
        return (
            this.state.loading >= 4 ?
                <NVD3Chart id="chart" height={300} type="pieChart" datum={datum} x="key" y="y" />
             :
        <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
        </Spinner>
        
        )
    }
}

export default PieBasicChart;