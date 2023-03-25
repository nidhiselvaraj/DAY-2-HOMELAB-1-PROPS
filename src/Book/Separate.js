import React, { Component } from 'react'

export class Separate extends Component {
  render() {
    return (
      <div>
           <p> {this.props.bookname} is the book name and {this.props.authorname} is the author</p>
      
      </div>
    )
  }
}

export default Separate