import React from 'react';
import OuterLayer from '../outer_layer/OuterLayer';
import MdlCell from '../outer_layer/MdlCell';
import UpperMenu from '../upper_menu/UpperMenu';

export default class CreateQuizz extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quizzName: '',
      quizzDescription: '',
      questions: []
    };
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
              <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input className="mdl-textfield__input" type="text" id="sample3"/>
                <label className="mdl-textfield__label" htmlFor="sample3">Text...</label>
              </div>
            </form>

            <form action="#">
              <div className="mdl-textfield mdl-js-textfield">
                <label className="mdl-textfield__label" htmlFor="name">Quizz name</label>
                <input className="mdl-textfield__input" type="text" id="name" value={name} onChange={this.handleChange.bind(this)}/>
              </div>

              <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <textarea className="mdl-textfield__input" type="text" rows= "1" id="descr" value={descr} onChange={this.handleChangeDescr.bind(this)}></textarea>
                <label className="mdl-textfield__label" htmlFor="descr">Description</label>
              </div>
            </form>
          </MdlCell>
          <MdlCell cellLength="4">side pls</MdlCell>
        </OuterLayer>
      </div>
    );
  }
};
