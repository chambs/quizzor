import React from 'react';
import './Home.css';
import OuterLayer from '../outer_layer/OuterLayer';
import MdlCell from '../outer_layer/MdlCell';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.stateMgr = props.stateMgr;
  }

  render () {
    return (
      <OuterLayer>
        <MdlCell cellLength="8">
          <h1>Welcome to Quizzor</h1>
          <p>Appzor allows you to create quizz games to play with your friends or
            studends</p>
          <p>You can create a quizz with these simple steps:</p>
          <ol>
            <li>Start a new quizz</li>
            <li>Choose the questions</li>
            <li>Create alternatives for each question</li>
            <li>Generate the game!</li>
          </ol>
        </MdlCell>
        <MdlCell cellLength="4">
          <div className="mdl-grid">
            <MdlCell cellLength="12">
              <Link to="create_quizz">
                <button className="mdl-button mdl-js-button mdl-button--raised
                mdl-js-ripple-effect mdl-button--accent big-button">
                  Create a Quizz
                </button>
              </Link>
            </MdlCell>
          </div>
          <div className="mdl-grid">
            <MdlCell cellLength="12">
              <button className="mdl-button mdl-js-button mdl-button--raised
                mdl-js-ripple-effect mdl-button--primary big-button">
                Sign Up
              </button>
            </MdlCell>
          </div>
        </MdlCell>
      </OuterLayer>
    );
  }
}
