import React, { Component } from 'react';
import NewsItem from './NewsItem.js';
import Spinner from './spinner.js';

export default class News extends Component {
  static defaultProps = {
    country: "in",
    cat: "general",
    pagesize: 8
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    };
  }

  async componentDidMount() {
    this.fetchNews();
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.country !== this.props.country ||
      prevProps.cat !== this.props.cat ||
      prevProps.pagesize !== this.props.pagesize ||
      prevState.page !== this.state.page
    ) {
      this.fetchNews();
    }
  }
  async fetchNews() {
    this.setState({ loading: true });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.cat}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pagesize}`;
    const data = await fetch(url);
    const parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
  }

  handlePrev = async () => {
    this.setState({ page: this.state.page - 1 }, () => {
      this.fetchNews();
    });
  };

  handleNext = async () => {
    this.setState({ page: this.state.page + 1 }, () => {
      this.fetchNews();
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center text-capitalize " style={{margin: '80px 0px'}}>
          {this.props.topic} news
        </h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element, index) => {
              return (
                <div key={index} className="col-md-3">
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    Urlimage={element.urlToImage}
                    newsUrl={element.url}
                    author = {element.author}
                    time = {element.publishedAt}
                    source= {element.source.name}
                  />
                </div>
              );
            })}
        </div>
        <div className="d-flex justify-content-between my-5">
          <button
            type="button"
            disabled={this.state.page <= 1}
            className="btn btn-secondary"
            onClick={this.handlePrev}
          >
            &#x21e6; Previous
          </button>
          <button
            type="button"
            disabled={this.state.page * 12 >= this.state.totalResults}
            className="btn btn-secondary"
            onClick={this.handleNext}
          >
            Next &#x21e8;
          </button>
        </div>
      </div>
    );
  }
}
