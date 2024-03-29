import React from 'react'
import './button.css'

const sayHello = () => {
    console.log("Ola")
}

const Button = (props) => {
    return <button className="btn" onClick={sayHello}>{props.label}</button>
}

// class Button extends React.Component{
//     render() {
//         return <button className="btn" onClick={sayHello}>{this.props.label}</button>
//     }
// }

Button.defaultProps = {
    label: 'Clique aqui'
}

export default Button 