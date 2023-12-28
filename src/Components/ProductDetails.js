import React, { Component } from 'react'
import Card from './Card'

export default class ProductDetails extends Component {
    constructor(props){
        super(props)
        this.state={
            id:window.location.href.split('/')[4],
            data:null
        }
    }
    componentDidMount(){
        fetch('https://dummyjson.com/products/'+this.state.id).then(response=>response.json()).then(data=>this.setState({data:data}))
    }
  render() {
    return (
      <>
       <div className="container mt-3">
        <h1 className='text-center mb-3'>Product Details</h1>
        {(this.state.data!=null)?<div className="row">
            <div className="col-md-6 pt-1">
                <img src={this.state.data.thumbnail} alt="" style={{width:'550px', height:'350px'}} className='rounded-1' />
            </div>
            <div className="col-md-6 p-5">
                <h1>{this.state.data.title}</h1>
                <h4 className='text-primary'>Brand: {this.state.data.brand}</h4>
                <p>{this.state.data.description}</p>
                <h3 className='text-danger'>$ {this.state.data.price}</h3>
                <h6 className='text-warning'>Rating: {this.state.data.rating}</h6>
            </div>
        </div>:<div className='display-1'>Loading...</div>}
       </div>
      </>
    )
  }
}
