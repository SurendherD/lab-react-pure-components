import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            count:0,
            toggle:false
        }
    }

    handeltoggel=()=>{
        this.setState(prevState => ({
            toggle: !prevState.toggle,
        }))
    }

    handelcounter=()=>{
        if(this.state.toggle){
        this.setState(prev=>({
            count: prev.count+1
        }))
      }
    }
  render() {
    console.log("Class Component")
    return (
      <div>
        <h1>Simple Component</h1>
        <h1>{this.state.count}</h1>
        <button onClick={this.handeltoggel}>SetToggel</button>
        <button onClick={this.handelcounter}>Increament</button>
      </div>
    )
  }
}
