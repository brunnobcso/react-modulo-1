import React from 'react'
import './Counter.css'

class Counter extends React.Component {

    constructor(props) {
        super(props);

        // Quando um state for alterado, o componente será renderizado
        this.state = {
            counter: props.initialCount
        }

        // Usa o bind para vincular o metodo a classe,
        // evitando essa declaração no eevento do btn
        this.handleDecrementClick = this.handleDecrementClick.bind(this);
        this.handleIncrementClick = this.handleIncrementClick.bind(this);
    }

    // Subtracao
    handleDecrementClick(target) {
        this.toggleDecrement();
        this.setState({ counter: this.state.counter -1 })
    }

    toggleDecrement() {
        this.setState({
            decrementStatus: true,
            incrementStatus: false
        });
    }

    // Soma
    handleIncrementClick(target) {
        this.toggleIncrement();
        this.setState({ counter: this.state.counter +1 })
    }

    toggleIncrement() {
        this.setState({
            decrementStatus: false,
            incrementStatus: true
        });
    }

    render() {
        let btnDecrement = this.state.decrementStatus ? 'btn btn-sm btn-success' : 'btn btn-sm btn-default';
        let btnIncrement = this.state.incrementStatus ? 'btn btn-sm btn-success' : 'btn btn-sm btn-default';

        const style = {
            color: this.props.color
        }
    
        return (
            <div>
                <span style={style} >A conta está em: { this.state.counter } </span>
                <button className={ btnDecrement } onClick={ this.handleDecrementClick }>-</button>
                <button className={ btnIncrement } onClick={ this.handleIncrementClick }>+</button>
            </div>
        );
    }
}

export default Counter