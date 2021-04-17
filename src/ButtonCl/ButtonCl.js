import React from 'react';
import ButtonFl from '../ButtonFl/ButtonFl';

export default class ButtonCl extends React.Component {

   

    render(){
        // console.log(this.props)
        return(
            <ButtonFl suma={this.props.suma2} text={this.props.text} color={this.props.color} padding={this.props.padding}/>
        )
    }   
}