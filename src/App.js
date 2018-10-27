import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React, { Component } from 'react';
import StateManager from './StateManager';
import './App.css';
import Home from './home/Home';
import CreateQuizz from './create_quizz/CreateQuizz';
import AddQuestions from './create_quizz/AddQuestions';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      quizzName: '',
      quizzDescription: '',
      questions: []
    };

    this.stateMgr = new StateManager(this);
  }

  setHome(props) {return <Home stateMgr={this.stateMgr}/>}
  setCreateQuizz(props) {return <CreateQuizz stateMgr={this.stateMgr}/>}
  setAddQuestions(props) {return <AddQuestions stateMgr={this.stateMgr}/>}

  render() {
    return ( 
      <Router>
        <Switch>
          <Route exact path="/" render={this.setHome.bind(this)}></Route>
          <Route path="/create_quizz" render={this.setCreateQuizz.bind(this)}></Route>
          <Route path="/add_questions" render={this.setAddQuestions.bind(this)}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
