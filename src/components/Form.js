import React, { Component } from 'react'
import ProteinForm from './ProteinForm'
import FillingForm from './FillingForm'
import ToppingForm from './ToppingForm'
import SideForm from './SideForm'

const DEFAULT_STATE = {
  protein: [],
  fillings: [],
  toppings: [],
  sides: []
}

class Form extends Component {
  state = {
    ...DEFAULT_STATE
  }

  handleSubmit=(event)=> {
    event.preventDefault()
    document.getElementById("order-form").reset()
    console.log(this.state)
    const orderData = Object.assign({},this.state)
    this.props.addOrder(orderData)
    this.setState({
      ...DEFAULT_STATE
    })
  }

  // componentDidUpdate(prevProps, prevState){
  //   console.log(prevProps.orderId)
  //   console.log(this.props.orderId)
  //   if (prevProps.orderId!=this.props.orderId) {
  //     this.setState({
  //       ...DEFAULT_STATE
  //     })
  //   }
  // }

  handleChange=(event) =>{
    const that = this
    console.log('about to update form')
    const itemType = event.target.name
    const item = event.target.value
    debugger
    // const that = this
    // debugger
    !this.state[`${itemType}`].includes(item) ?
      this.setState({
        [itemType]: this.state[`${itemType}`].concat(item)
      })
    :
      this.setState({
        [itemType]: this.state[`${itemType}`].filter(
          ingr => ingr !== item
        )
      })

    console.log(this.state);
  }

  render() {
    return(
      <div className="ui raised container segment">
        <h1 className="ui block header">Order Form</h1>
        <form className="ui form" id="order-form" onSubmit={this.handleSubmit}>
          <ProteinForm handleChange={this.handleChange} />

          <FillingForm handleChange={this.handleChange} />

          <ToppingForm handleChange={this.handleChange} />

          <SideForm handleChange={this.handleChange} />

          <br />

          <button className="ui blue big button" type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Form
