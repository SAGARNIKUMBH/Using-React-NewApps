import React, { Component } from "react";
import NewsItem from "./NewsItem";
import spinner from "./spinner";

export class News extends Component {
  constructor() {
    super();
    console.log("Hello I M Constructor");
    this.state = {
      articles: [],
      //   loading: flase,
      page: 1,
      totalResults: 0,
    };
  }
  async componentDidMount() {
    console.log("cdm");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=f9a56250b7fd490b8223d72b500d0e6b&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }
  handleprevClick = async () => {
    console.log("previews");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=f9a56250b7fd490b8223d72b500d0e6b&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });

    this.setState({
      page: this.state.page - 1,
    });
  };
  handleNextClick = async () => {
    console.log("Next");
    if (
      this.state.page + 1 >
      Math.ceil(this.state.totalResults / this.props.pageSize)
    ) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=f9a56250b7fd490b8223d72b500d0e6b&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      // this.setState({ articles: parsedData.articles });
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
      });
    }
  };
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">Daily Top Headlines</h1>
        <spinner />
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element?.title?.slice(0, 41)}
                  description={element?.description?.slice(0, 88)}
                  imageUrl={element.urlToImage}
                  newUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <hr />
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handleprevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
