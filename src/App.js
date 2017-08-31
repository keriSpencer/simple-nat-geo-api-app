import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      article: [],
      author: '',
      title: '',
      description: '',
      url: '',
      urlToImage: ''
    }
  }

  componentDidMount() {
    let url =
      'https://newsapi.org/v1/articles?source=national-geographic&sortBy=top&apiKey=d40317f5a8204f4294095524287c3bf7'
    fetch(url)
      .then(r => r.json())
      .then(data => {
        let article = data.articles[1]
        let author = article.author
        let title = article.title
        let description = article.description
        let url = article.url
        let urlToImage = article.url
        this.setState({
          author: author, title: title, description: description, url: url, urlToImage: urlToImage
        })
        // articles.author
        console.log(article)
    })
  }

  render() {
    return (
      <div className="App">
        <div>
          <img src={this.state.urlToImage}/>
        </div>
        <h2>
          {this.state.title}
        </h2>
        <h3>
          {this.state.author}
        </h3>
        <p>
          {this.state.description}
        </p>
      </div>
    )
  }
}

export default App
