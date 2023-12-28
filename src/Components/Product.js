import React, { Component } from 'react'
import Card from './Card'

export default class Product extends Component {
    constructor(props){
        super(props)
        this.state = {
            data:null,
            message: 'Data is loading...'
        }
    }
    componentDidMount(){
        fetch('https://dummyjson.com/products').then(response => response.json()).then(data => this.setState({data:data.products}))
    }
  render() {
    return (
      <>
        <div className="container">
          <h1 className='text-center mt-3'>Products</h1>
            <div className="row">
                {(this.state.data!=null)?this.state.data.map((item=><div className="col-md-3"><Card id={item.id} image={item.thumbnail} title={item.title.slice(0,20) + '...'} description={item.description.slice(0,50) + '...'} price={'$'+ item.price} /></div>)):<div className='display-1'>{this.state.message}</div>}
                
            </div>
        </div>
      </>
    )
  }
}
