import React from 'react'
import './Nav.css'

class Nav extends React.Component {
    
    constructor(props) {
        super(props);
        this.navInit();
    }

    navInit () {
        window.addEventListener('load', () => {
            this.printMenuLinks();
        })
    }

    printMenuLinks() {
        let elements = [];
        let links = this.props.menuLinks;
        let target = document.getElementById('menuLinks');

        for (var i = 0; i < links.length; i++) {

            let anchor = document.createElement('a');
                anchor.innerHTML = links[i][0];
                anchor.href = links[i][1];
                anchor.className = "nav-link";

            elements.push(anchor);
        }

        elements.forEach((el) => {
            target.appendChild(el);
        });

        return elements;
    }

    render(){
        return (
            <nav className="nav justify-content-center navbar-toggleable-md navbar-light bg-faded" onLoad={this.printMenuLinks}>
                <div className="container">

                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <a href="index.html" className="navbar-brand">
                        { this.props.brandContent }
                    </a>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul id="menuLinks" className="navbar-nav"></ul>
                    </div>
                    
                </div>
            </nav>
        );
    }
}

export default Nav