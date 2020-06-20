import React from 'react';
import './App.css';
import Posts from './components/Posts/Posts';
import { setData, filterPostsAC } from './redux/mainReducer';
import { connect } from 'react-redux';
import loupeImg from '../src/images/loupe.svg';

class App extends React.Component {

  onSearchChange = (e) => {

    this.props.filterPostsAC(e.currentTarget.value);
  }

  componentDidMount() {
    this.props.setData();
  }

  render() {
    if (!this.props.posts) {
      return <div>Loading...</div>;
    }
    return (<div className="Container">
      <div className ='filter'>
        <img src={loupeImg} />
        <input onChange={this.onSearchChange} placeholder='Filter by author...'></input>
      </div>
      <Posts posts={this.props.posts} />
    </div>);
  }
}

const mapStateToProps = (state) => ({
  posts: state.main.filtredPosts
})

export default connect(mapStateToProps, { setData, filterPostsAC })(App);

