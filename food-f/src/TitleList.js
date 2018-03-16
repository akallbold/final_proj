import React, { Component } from 'react';

class TitleList extends Component {

// handleClick = (article) => {
//   this.props.changeCurrentArticle(article)
// }

  createElements = () => {
    console.log(this.props)
    return this.props.allArticles.map(article => {
      return(
        <div>
          <a className= "article" key={article.id} article= {article} onClick={this.props.changeCurrentArticle} href={article.url}>{article.title}</a>
        </div>
      )
    })
  }
  render() {

    return (
      <div >
        <p>"Title List"</p>
        {this.createElements()}
      </div>
    );
  }
}

export default TitleList;
