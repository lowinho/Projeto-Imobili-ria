import React, { Component } from 'react';


export default class InformationItem extends Component {
    render() {
      return(
        <div className="vantagens">
        <div className="vantagensItem">
          <div className="vantagensItemImg">
            <img src={this.props.image} alt={this.props.alt} title={this.props.title} />
          </div>
          <div className="vantagensItemTxt">
            {this.props.text} <br/>
          R${this.props.value}
            
          </div>
        </div>
      </div>
      )
    }

  }