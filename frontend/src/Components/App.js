import React from 'react';
import axios from 'axios';
import './App.css';
import CommentList from './Comment/CommentList';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: [],
      currentComment: {},
    }
  }

  componentDidMount() {
    this.updateComments()
  }

  updateComments = () => {
    const url = 'http://localhost:4000/comments'
    axios.get(url, { crossdomain: true })
      .then((res) => {
      this.setState({
        comments: res.data
      })
    })
      .catch((error) =>
        console.log(error))
  }

  render () {
    return (
      <div className="container-fluid">
        <div className="row">
        <div className="col s10">
          <CommentList comments={this.state.comments} updateComments={this.updateComments} />
        </div>
        </div>
      </div>
    );
  }
}

export default App;