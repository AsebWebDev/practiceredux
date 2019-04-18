import React, { Component } from 'react'

class Postform extends Component {

  constructor(){
    super();
    this.state = {
      title: '',
      body: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(post)
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }

  render() {

    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label htmlFor="title">Title</label><br />
            <input name="title" type="text" onChange={this.onChange} value={this.state.title}/>
          </div>
          <br />
          <div>
            <label htmlFor="">Body</label><br />
            <textarea name="body" id="" cols="30" rows="10" onChange={this.onChange} value={this.state.body}></textarea>
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Postform;
