import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
  let {title , description , url , urlToImage} = this.props;
    return (
      <div >
          <div className="card ">
          <img className="card-img-top" src= {urlToImage} style={{height : '30px' , height : '140px'}} alt="Card image cap"/>
          <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={url} className="btn btn-primary">Read More</a>
        </div>
        </div>
      </div>

    )
  }
}

export default NewsItem