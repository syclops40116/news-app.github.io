import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
export default class News extends Component {

    static defaultProps = {
        category : "general",
        country : "in",
        pageSize : 20
    }

    static propTypes = {
        category : PropTypes.string,
        pageSize : PropTypes.number,
        country : PropTypes.string
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults : 0,
        }
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=67b422f8001a4bedbe65e2eb7333983a&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading : true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles : parsedData.articles,
            totalResults: parsedData.totalResults,
            loading : false
        })
    }
    handleNextClick = async () => {
        if(this.state.page + 1 > Math.ceil(this.state.totalResults/20)) return;
        let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=67b422f8001a4bedbe65e2eb7333983a&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading : true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({});
        this.setState({
            page : this.state.page + 1,
            articles : parsedData.articles,
            loading : false
        })
    }
    handlePrevCLick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=67b422f8001a4bedbe65e2eb7333983a&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading : true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page : this.state.page - 1,
            articles : parsedData.articles,
            loading : false
        })
    }
    render() {
        return (<>
            <div className="container my-3 text-center">
                <h1>React News - {this.props.title}</h1>
                {this.state.loading && <Spinner />}
                {!this.state.loading && <div className="row">
                    {
                        this.state.articles.map((x, idx) => {
                            return <div className="col-md-3 col-sm-12" key={idx}>
                                <NewsItem imgUrl={x.urlToImage} title={x.title} description={x.description} url={x.url} />
                            </div>
                        })
                    }
                </div>}
                <div className="container d-flex justify-content-between">
                    <button onClick={this.handlePrevCLick} disabled = {this.state.page <= 1} type="button" className="btn btn-dark"> &larr; Prev</button>
                    <button onClick={this.handleNextClick} disabled = {this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark"> Next &#8594; </button>
                </div>
            </div>
        </>)
    }
} 