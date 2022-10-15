import React from 'react';
import './HeaderIntro.css';

const Rainbow = (
    <div id="shadowBox">
        <h1 class="rainbow rainbow_text_animated">REACT</h1>
    </div>
)

function Header(Rainbow) {
    return (
        <div>
            <h1>
                {`Welcome to my first ${Rainbow} experience!`}
            </h1>
        </div>
    );
}
export default Header;