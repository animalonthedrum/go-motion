import React, { Component } from 'react'

export default class Gymnastics extends Component {
  constructor () {
    super()
    this.state = {
      isHidden: true,
      isHiddenTwo:true,
      isHiddenThree:true,
    }
  }
  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden,
      isHiddenTwo:true,
      isHiddenThree:true
    })
  }
  toggleHiddenTwo () {
    this.setState({
      isHidden: true,
      isHiddenTwo:!this.state.isHiddenTwo,
      isHiddenThree:true
    })
  }
  toggleHiddenThree () {
    this.setState({
      isHidden: true,
      isHiddenTwo:true,
      isHiddenThree:!this.state.isHiddenThree
    })
  }
  render() {
    return (
      <div>
      <nav>
        <div onClick={this.toggleHidden.bind(this)} >
          Click to show modal
          {!this.state.isHidden && <ul>
            <li><a>Gymanastics</a></li>
          <li><a>Gymanastics</a></li>
          <li><a>Gymanastics</a></li>
          <li><a href='/sports'>Sports</a></li>
        </ul>}
        </div>

        <div onClick={this.toggleHiddenTwo.bind(this)} >
          Modal Two
          {!this.state.isHiddenTwo && <ul>
            <li><a>Gymanastics Two</a></li>
          <li><a>Gymanastics Two</a></li>
          <li><a>Gymanastics Two</a></li>
          <li><a>Gymanastics Two</a></li>
        </ul>}
        </div>
  
        <div onClick={this.toggleHiddenThree.bind(this)} >
          Modal Three
          {!this.state.isHiddenThree && <ul>
          <li><a>Gymanastics Three</a></li>
          <li><a>Gymanastics Three</a></li>
          <li><a>Gymanastics Three</a></li>
          <li><a>Gymanastics Three</a></li>
    
        </ul>}
        </div>

        </nav>
      </div>
    )
  }
}

