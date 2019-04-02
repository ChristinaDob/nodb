import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <div className="HeaderWrapper">
      <img
        className="header"
        src="http://christinadob.com/todo/media/headerimg.jpg"
        alt="lipstick header"
      />
      <header className="HeaderText">LIPSTICK CHOICE</header>
      <header className="HeaderText2">
        Pick your favorite color... then delete them
      </header>
    </div>
  );
}
