import React, { Component } from "react"
// import DC from "images/dc.jpg";

class Home extends Component {
    state = {
        names: ['aquaman', 'Batman', 'Cyborg', 'flash', 'greenarrow', 'greenlantern', 'hawkgirl', 'MMhunter', 'redtornado', 'shazam', 'Superman', 'wonderwoman'],
        count: 0,
        Tscore: 0,
        storeTarget: []
    };

    handleClick = e => {
        let {count, Tscore, names, storeTarget} = this.state;
        //let count = this.state.count;
        //let Tscore = this.state.Tscore;
        //let names = this.state.names;
        //let storeTarget = this.state.storeTarget;

        names = names.sort(() => Math.random() - 0.5);

        let clickedItem = e.target.alt;

        if (this.state.storeTarget.find(item => item === clickedItem)) {
            count = 0;
            storeTarget = []
        } else {
            count += 1
            if (count > Tscore) {
                Tscore += 1;
            }
            storeTarget.push(clickedItem);
        }
                 
        this.setState({
            count, Tscore, names, storeTarget
        });
    }

    render() {
        return (
            <div>
                <div className="navbar">
                    <nav>
                        <ul>
                            <li><h2>Clicky Game</h2></li>
                            <li><h2>Click an Image to Begin!</h2></li>
                            <li><h2>Score: {this.state.count} | Top score: {this.state.Tscore} </h2></li>
                        </ul>
                    </nav>
                </div>
                <div className="banner">
                    <h1>Clicky Game!</h1>
                    <p>Click on an image to earn points, but don't click on any more than once!</p>
                </div>
                <div className="image">
                    <div className="imageWrapper">
                        <ul>
                            {this.state.names.map(name => {
                                return (
                                    <li key={name}>
                                        <img onClick={this.handleClick} src={`images/${name}.jpg`} alt={name} className="imageItem" />
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;