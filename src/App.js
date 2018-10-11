import React, { Component } from 'react'
import './App.css'
import Form from './components/Form'
import Order from './components/Order'

class App extends Component {
  state={
    orders: [],
    orderId:0
  }

  addOrder = (order) => {
    console.log("Order data contains...:", order)
    this.setState({
      orders: this.state.orders.concat(order)
    })
  }

  render() {
    const orders = this.state.orders.map( (order, idx) => {
      return <Order key={idx} {...order} />
    })

   // setOrderId=()=>{
   //   this.setState()
   // }
   //
   // getOrderId=()=>{
   //
   // }
    return (
      <div className="App">
        <header className="App-header">
          <img src={require('./images/logo.png')} className="App-logo" alt="logo" />
        </header>

        <Form addOrder={this.addOrder} orderId={this.state.orderId}/>

        <div className="ui raised container segment">
          <h1 className="ui block header">All Orders</h1>
          <div className="ui three cards">
            { orders }
          </div>
        </div>
      </div>
    )
  }
}

export default App
