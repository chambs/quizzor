import React from 'react';
import OuterLayer from '../outer_layer/OuterLayer';
import MdlCell from '../outer_layer/MdlCell';
import UpperMenu from '../upper_menu/UpperMenu';
import {Link} from 'react-router-dom';

export default class CreateQuizz extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quizzName: '',
      quizzDescription: '',
      questions: []
    };
  }

  shouldButtonEnable() {
    let name = this.state.quizzName;
    let descr = this.state.quizzDescription;
    return !(name.trim() && descr.trim());
  }

  handleChange(ev) {
    let quizzName = ev.target.value || ' ';
    this.setState({
      quizzName
    });
  }

  handleChangeDescr(ev) {
    let quizzDescription = ev.target.value || ' ';
    this.setState({
      quizzDescription
    });
  }

  render () {
    let name = this.state.quizzName;
    let descr = this.state.quizzDescription;
    return (
      <div>
        <UpperMenu/>
        <OuterLayer>
          <MdlCell cellLength="8">
            <h1>New Quizz</h1>

            <form action="#">
            <div className="mdl-grid">
                <MdlCell cellLength="12">
                <div className="mdl-textfield mdl-js-textfield">
                  <label className="mdl-textfield__label" htmlFor="name">Quizz name</label>
                  <input className="mdl-textfield__input" type="text" id="name" value={name} onChange={this.handleChange.bind(this)}/>
                </div>
                </MdlCell>
              </div>
              <div className="mdl-grid">
                <MdlCell cellLength="12">
                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                  <textarea className="mdl-textfield__input" type="text" rows="5" id="descr" value={descr} onChange={this.handleChangeDescr.bind(this)}></textarea>
                  <label className="mdl-textfield__label" htmlFor="descr">Description</label>
                </div>
                </MdlCell>
              </div>
            </form>
          </MdlCell>
          <MdlCell cellLength="4">
            <Link to="">
              <button disabled={this.shouldButtonEnable()} className="mdl-button mdl-js-button mdl-button--raised
              mdl-js-ripple-effect mdl-button--accent big-button">
                Create questions
              </button>
            </Link>

          </MdlCell>
        </OuterLayer>
      </div>
    );
  }
};
