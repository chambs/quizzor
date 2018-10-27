export default class StateManager {
  constructor(component) {
    this.component_ = component;
  }

  update(attribs) {
    this.component_.setState(attribs);
  }

  get(attrName) {
    const state = this.component_.state;
    if (attrName) {
      return state[attrName];
    }
    return state;
  }
}
