import React from 'react'

class FormContato extends React.Component {

    constructor(props) {
        super(props)

        this.state = { name: '', email: '', subject: 'react', msg: '' }

        // INPUTS
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubjectChange = this.handleSubjectChange.bind(this);
        this.handleMsgChange = this.handleMsgChange.bind(this);
        
        // SUBMIT
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        });
    }

    handleEmailChange(e) {
        this.setState({
            email: e.target.value
        });
    }

    handleSubjectChange(e) {
        this.setState({
            subject: e.target.value
        });
    }

    handleMsgChange(e) {
        this.setState({
            msg: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        let name = this.state.name.trim();
        let email = this.state.email;
        let subject = this.state.subject.trim();
        let msg = this.state.msg.trim();

        this.props.onContactSubmit({ id: this.props.nextIdNumber, name: name, email: email, subject: subject, msg: msg });
    }

    render() {

        return (
            <form className="text-left container" id="formContato" onSubmit={ this.handleSubmit }>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" className="form-control" placeholder="João da Silva" onChange={ this.handleNameChange } />
                </div>
                <div className="form-group">
                    <label htmlFor="email">E-mail:</label>
                    <input type="text" id="email" className="form-control" placeholder="exemplo@exemplo.com.br" onChange={ this.handleEmailChange } />
                </div>
                <div className="form-group">
                    <label htmlFor="subject">Assunto:</label>
                    <select id="subject" className="form-control" defaultValue={ this.state.subject } onChange={ this.handleSubjectChange } >
                        <option value="angular">AngularJS</option>
                        <option value="react">React</option>
                        <option value="vue">VueJS</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="msg">Message:</label>
                    <textarea id="msg" className="form-control" rows="3"  onChange={ this.handleMsgChange } />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-success">Enviar</button>
                </div>
            </form>
        );
    }

}

export default FormContato