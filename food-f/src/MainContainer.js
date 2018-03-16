import React, { Component } from 'react';
import './App.css';
import Login from "./Login"
import SearchPanel from "./SearchPanel"
import TitleList from "./TitleList"
import Article from "./Article"
import MapsList from "./MapsList"
import Maps from "./Maps"

class App extends Component {
  state = {
    searchTerm: "",
    currentArticle: "",
    allArticles: []
  }

componentDidMount = () => {
  fetch("http://localhost:3000/articles")
  .then(response => response.json())
  .then(data => this.setState({allArticles:data}))
}

changeCurrentArticle = (article) => {
  this.setState({currentArticle:article})
  console.log("in the current article change func", this.state.currentArticle)
}

  // display = () => {
  //   if (this.state.currentArticle){
  //     console.log("there is a current article")
  //     return  (<div >
  //               <SearchPanel/>
  //               <Article currentArticle= {this.state.currentArticle}/>
  //               <MapsList/>
  //             </div>)
  //   } else {
  //       console.log("there is no current article")
  //     return (<div >
  //               <TitleList allArticles= {this.state.allArticles} changeCurrentArticle={this.changeCurrentArticle}/>
  //            </div>)
  //   }
  // }

  render() {
    return (
      <div className="main-container">
        <MapsList/>
      </div>
    );
  }
}

export default App;
