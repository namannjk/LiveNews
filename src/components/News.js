import React, { Component } from 'react'
import NewsItem from './NewsItem'
export class News extends Component {
    articles = []
    constructor(){
      super();
      this.state = {
        articles : this.articles,
      }
    }

    async componentDidMount(){
      let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=e44a084fcefb4890ad858fde306e744e";
      let data = await fetch(url);
      let parseData = await data.json()
      this.setState({articles : parseData.articles});
    }
  render() {
    return (
      <div className="container my-3">
        <h1>Top Headlines</h1>
        <div className="row">
          {
            this.state.articles.map((element)=>{
              return <div className="col-md-4" key = {element.url}>
              <NewsItem title = {element.title} description = {element.description?element.description.slice(0,80)+"...":"Noting to show"} url = {element.url} urlToImage = {element.urlToImage}/>
             </div>
            })
          }
        </div>
      </div>
    )
  }
}

export default News