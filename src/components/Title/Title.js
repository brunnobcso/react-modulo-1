import React from 'react'
import './Title.css'

class Title extends React.Component {

    render() {

        return(
            <div className="container">
                <h1 className="text-center"> { this.props.children[0] } </h1>
                <h2 className="text-center"> { this.props.children[1] } </h2>
            </div>
        );

    }

}

export default Title