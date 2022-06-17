import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            allPlants: [],
            currentPlant: {}
        };
    }

    componentDidMount () {
        this.allPlants();
    }

    allPlants () {
        axios.get('/api/allPlants')
            .then((res) => {
                console.log('res?', res);
                this.setState({
                    plants: res.data
                });
            });
    }

    onePlant () {
        axios.get('/api/onePlant')
            .then((res) => {
                console.log('res?', res);
                this.setState({
                    currentPlant: res.data
                });
            });
    }

    render () {
        return (
            <Title>plant stuuuuff</Title>
        );
    }
}

const Title = styled.h1`
  margin-left: 20px;
  color: #D8315B;
`;

export default App;
