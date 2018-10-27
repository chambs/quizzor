import React from 'react';
import OuterLayer from '../outer_layer/OuterLayer';
import MdlCell from '../outer_layer/MdlCell';
import UpperMenu from '../upper_menu/UpperMenu';
import {Link} from 'react-router-dom';
// import componentHandler from '../window.mdl';

export default class AddQuestions extends React.Component {
  constructor(props) {
    super(props);
    this.stateMgr = props.stateMgr;
  }

  componentDidMount() {
    const els = document.querySelectorAll('.mdl-textfield');
    els.forEach(el => window.componentHandler.upgradeElement(el));
  }

  shouldButtonEnable() {
    let name = this.stateMgr.get('quizzName');
    let descr = this.stateMgr.get('quizzDescription');

    return !(name.trim() && descr.trim());
  }

  // handleChange(ev) {
  //   let quizzName = ev.target.value || ' ';
  //   this.stateMgr.update({
  //     quizzName
  //   });
  // }

  // handleChangeDescr(ev) {
  //   let quizzDescription = ev.target.value || ' ';
  //   this.stateMgr.update({
  //     quizzDescription
  //   });
  // }

  render() {
    // let name = this.stateMgr.get('quizzName');
    // let descr = this.stateMgr.get('quizzDescription');
    const quizzName = this.stateMgr.get('quizzName');
    return (
      <div>
        <UpperMenu/>
        <OuterLayer>
          <MdlCell cellLength="8">
            <h1>Add Questions</h1>
            <h3>{quizzName}</h3>

            <form action="#">
            <div className="mdl-grid">
                <MdlCell cellLength="12">
                {/* <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                  <label className="mdl-textfield__label" htmlFor="name">Quizz name</label>
                  <input className="mdl-textfield__input" type="text" id="name" value={name} onChange={this.handleChange.bind(this)}/>
                </div> */}
                </MdlCell>
              </div>
              <div className="mdl-grid">
                <MdlCell cellLength="12">
                {/* <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                  <textarea className="mdl-textfield__input" type="text" rows="5" id="descr" value={descr} onChange={this.handleChangeDescr.bind(this)}></textarea>
                  <label className="mdl-textfield__label" htmlFor="descr">Description</label>
                </div> */}
                </MdlCell>
              </div>
            </form>
          </MdlCell>
          <MdlCell cellLength="4">
            <Link to="">
              <button disabled={this.shouldButtonEnable()} className="mdl-button mdl-js-button mdl-button--raised
              mdl-js-ripple-effect mdl-button--accent big-button">
                Generate Quizz!
              </button>
            </Link>

          </MdlCell>
        </OuterLayer>
      </div>
    );
  }
};
