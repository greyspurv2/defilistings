import React from 'react';
import '../App.css';
import DefiCards from './components/Deficards';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import { Container, Row, Col } from 'reactstrap';
import { render } from '@testing-library/react';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            people: [{
                    project: "Honeyswap",
                    title: "hello",
                    description: "This is the newest craze in Defi"
                },
                {
                    project: "Honeyswap",
                    title: "This is a new Defi project",
                    description: "This is the newest craze in Defi"
                },
                {
                    project: "Honeyswap",
                    title: "This is a new Defi project",
                    description: "This is the newest craze in Defi"
                }
            ]
        }
    }
}


render()
let peopleCards = this.state.people.map(person => {
        return ( <
            Col sm = "" >
            <
            DefiCards project = { DefiCards }
            /> < /
            Col >
        )

    }

)



function DefiCardsRow() {
    return ( <
        div className = "DefiCards" >
        <
        header >
        <
        body >
        <
        Container fluid >
        <
        Row > { DefiCards } <
        /Row> < /
        Container >

        <
        /body> <
        footer className = "Footer" >

        <
        /footer>

        <
        /header> < /
        div >
    );
}



export default App;