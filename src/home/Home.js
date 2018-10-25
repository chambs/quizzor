import React from 'react';
import './Home.css';
import OuterLayer from '../outer_layer/OuterLayer';
import MainLayer from '../outer_layer/MainLayer';
import SideLayer from '../outer_layer/SideLayer';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <OuterLayer>
      <MainLayer>
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
      </MainLayer>
      <SideLayer>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--12-col">
            <Link to="create_quizz">
              <button className="mdl-button mdl-js-button mdl-button--raised
              mdl-js-ripple-effect mdl-button--accent big-button">
                Create a Quizz
              </button>
            </Link>
          </div>
        </div>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--12-col">
            <button className="mdl-button mdl-js-button mdl-button--raised
              mdl-js-ripple-effect mdl-button--primary big-button">
              Sign Up
            </button>
          </div>
        </div>
      </SideLayer>
    </OuterLayer>
  );
};

export default Home;
