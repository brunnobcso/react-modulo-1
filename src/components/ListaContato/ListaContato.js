import React from 'react'
import Contato from './../Contato/Contato'
import './ListaContato.css'

class ListaContato extends React.Component {

    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         data: [
    //             {}
    //         ]
    //     }
    // }

    render() {

        let contactNode = this.props.data.map( (contact) => {
            return (
                <Contato key={contact.id} idNumber={ contact.id } name={ contact.name } email={ contact.email } subject={ contact.subject } msg={ contact.msg } />
            );
        } );

        return( 
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>E-mail</th>
                            <th>Subject</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        { contactNode }
                    </tbody>
                </table>
            </div>
        );

    }

}

export default ListaContato