import React, { Component } from "react";
import Nav from "./Navbar";
import ArticleContainer from "./contentArticles";
import API from "../utils/API";

class AppContainer extends Component {
  state = {
    query: "",
    yearStart: "",
    yearEnd: "",
    results: [],
    savedArticles: []
  };

  componentDidMount() {
    console.log("Mounted");
    this.getSavedArticles();
  }

  getSavedArticles = () => {
    console.log("getting articles");
    API.getArticles()
      .then(res => {
        const savedArticles = res.data;
        this.setState({ savedArticles });
        console.log(savedArticles);
      })
      .catch(err => console.log(err));
  };

  saveArticle = event => {
    console.log("saving article");
    console.log(event.target);
    const utitle = event.target.attributes.articlename.nodeValue;
    const udate = event.target.attributes.articledate.nodeValue;
    const uurl = event.target.attributes.articleurl.nodeValue;
    console.log(utitle + ", " + udate + ", " + uurl);
    API.saveArticle({
      title: utitle,
      date: udate,
      url: uurl
    })
      .then(res => {
        console.log(res);
        this.getSavedArticles();

      })
      .catch(err => console.log(err));
  };

  deleteArticle = event => {
    API.deleteArticle(event.target.attributes.articleid.nodeValue)
      .then(res => {
        console.log(res);
        this.getSavedArticles();

      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  testFunction = event => {
    event.preventDefault();
    if (this.state.query && this.state.yearStart && this.state.yearEnd) {
      this.getAPI(this.state.query, this.state.yearStart, this.state.yearEnd);
    }
  };

  handleFormSubmit = event => {
    event.preventDefault();
  };

  getAPI = (query, yearStart, yearEnd) => {
    API.search(query, yearStart, yearEnd)
      .then(res => {
        const results = res.data.response.docs;
        this.setState({ results });
        console.log(results);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Nav
          testFunction={this.testFunction}
          handleInputChange={this.handleInputChange}
        />
        <ArticleContainer
          articles={this.state.results}
          saveArticle={this.saveArticle}
          savedArticles={this.state.savedArticles}
          deleteArticle={this.deleteArticle}
        />
      </div>
    );
  }
}

export default AppContainer;