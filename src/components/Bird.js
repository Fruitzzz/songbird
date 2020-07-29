import React, {Component} from "react";
import "./styles/Bird.css";
import birdImage from "../media/default-bird.jpg";
class Bird extends Component {
    render() {
        return (
            <div className="bird-holder jumbotron rounded">
                <img className="bird-image" src={birdImage} alt="bird"/>
                <div className="bird-options">
                    <h3 className="bird-name">******</h3>
                    <hr></hr>
                    <div className="audio-player">
                       <div className="player-controls">
                           <div className="play-button"></div>
                       </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Bird;