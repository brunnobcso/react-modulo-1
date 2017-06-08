import React from 'react'
import './Contato.css'

class Contato extends React.Component {

    render() {

        return(
            <tr id={ "contato-" + this.props.idNumber } >
                <td> { this.props.idNumber } </td>
                <td> { this.props.name } </td>
                <td> { this.props.email } </td>
                <td> { this.props.subject } </td>
                <td> { this.props.msg } </td>
            </tr>
        );

    }

}

export default Contato