import React from 'react';

const UpperMenu = () => {
  return (
    <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header className="mdl-layout__header">
        <div className="mdl-layout__header-row">
          {/* Title */}
          <span className="mdl-layout-title">Quizzor</span>
          {/* Add spacer, to align navigation to the right */}
          <div className="mdl-layout-spacer"></div>
          {/* Navigation. We hide it in small screens. */}
          <nav className="mdl-navigation mdl-layout--large-screen-only">
            <a className="mdl-navigation__link" href="/">Home</a>
            <a className="mdl-navigation__link" href="/">About</a>
            <a className="mdl-navigation__link" href="/">Contact</a>
          </nav>
        </div>
      </header>
      <main className="mdl-layout__content">
        <div className="page-content">{/*Your content goes here*/}</div>
      </main>
    </div>
  );
};
export default UpperMenu;
