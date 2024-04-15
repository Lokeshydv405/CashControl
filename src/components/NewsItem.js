import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
        let {title,description,Urlimage,newsUrl,author,time,source}=this.props;
    return (
        <div className="container my-3">
<span className="badge bg-secondary bg-danger">{source}</span>
<div className="card" >
  <img src={Urlimage} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={newsUrl} className="btn btn-primary">Read More</a>
  </div>
  <div className="card-footer text-muted">
    By {author} on {time}
  </div>
</div>
</div>
    )
  }
}
