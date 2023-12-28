import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Card extends Component {
    constructor(props){
        super(props)
       this.state={
        thumbnail:props.image,
        title:props.title,
        description:props.description,
        price:props.price,
        id:props.id
       }
    }
  render() {
    return (
      <>
        <div className="card mt-3">
          <img src={this.state.thumbnail} className="card-img-top" style={{width:'258px', height:'200px'}} alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{this.state.title}</h5>
                <p className="card-text">{this.state.description}</p>
                <h4>{this.state.price}</h4>
                <Link to={"/users/"+this.state.id} className="btn btn-primary">See Details</Link>
            </div>
        </div>
     </>
    )
  }
}
