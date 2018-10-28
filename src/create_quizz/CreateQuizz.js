import React from 'react';
import OuterLayer from '../outer_layer/OuterLayer';
import MdlCell from '../outer_layer/MdlCell';
import UpperMenu from '../upper_menu/UpperMenu';
import {Link} from 'react-router-dom';
// import componentHandler from '../window.mdl';

export default class CreateQuizz extends React.Component {
  constructor(props) {
    super(props);
    this.fields = [];
    this.stateMgr = props.stateMgr;
  }

  componentDidMount() {
    this.fields.forEach(node => {
      if(node) {
        window.componentHandler.upgradeElement(node);
      }
    })
  }

  shouldButtonEnable() {
    let name = this.stateMgr.get('quizzName');
    let descr = this.stateMgr.get('quizzDescription');

    // if (name.length && descr.length) {
    //   console.log( this.stateMgr.get(), '<<<<<' );
    // }

    return !(name.trim() && descr.trim());
  }

  handleChange(ev) {
    let quizzName = ev.target.value || ' ';
    this.stateMgr.update({
      quizzName
    });
  }

  handleChangeDescr(ev) {
    let quizzDescription = ev.target.value || ' ';
    this.stateMgr.update({
      quizzDescription
    });
  }

  render() {
    let name = this.stateMgr.get('quizzName');
    let descr = this.stateMgr.get('quizzDescription');
    return (
      <div>
        <UpperMenu/>
        <OuterLayer>
          <MdlCell cellLength="8">
            <h1>New Quizz</h1>

            <form action="#">
            <div className="mdl-grid">
                <MdlCell cellLength="12">
                <div ref={node => this.fields.push(node)} className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                  <label className="mdl-textfield__label" htmlFor="name">Quizz name</label>
                  <input className="mdl-textfield__input" type="text" id="name" value={name} onChange={this.handleChange.bind(this)}/>
                </div>
                </MdlCell>
              </div>
              <div className="mdl-grid">
                <MdlCell cellLength="12">
                <div ref={node => this.fields.push(node)} className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                  <textarea className="mdl-textfield__input" type="text" rows="5" id="descr" value={descr} onChange={this.handleChangeDescr.bind(this)}></textarea>
                  <label className="mdl-textfield__label" htmlFor="descr">Description</label>
                </div>
                </MdlCell>
              </div>
            </form>
          </MdlCell>
          <MdlCell cellLength="4">
            <Link to="add_questions">
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
