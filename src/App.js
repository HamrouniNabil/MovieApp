import React from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import Add from "./components/Add";
import Search from "./components/Search";

class App extends React.Component {
  state = {
    movieArray:  [
      {
        id: Date.now(),
        title: "Lost In Space",
        image:
          "https://img.over-blog-kiwi.com/1/50/78/51/20180702/ob_47caba_perdus-dans-l-espace-photo-perdus-dans.jpg",
        categorie:"Film de science-fiction‎",
        rate: 3
      },
      {
        id: Date.now(),
        title: "The Matrix",
        image:
          "https://s.scifi-universe.com/galeries/images/0/217-affiche-the-matrix-reloaded.jpg",
          categorie:"Film de science-fiction‎",
        rate: 3
      },
      {
        id: Date.now(),
        title: "Batman The Dark Night Rises",
        image:
          "https://fr.web.img2.acsta.net/medias/nmedia/18/63/97/89/18949761.jpg",
          categorie:"Film d'Action",
        rate: 5
      }
    ],
    searchValue: "",
    searchRate: 0
  };
  addMovie = x => {
   
    this.setState({
      movieArray: [...this.state.movieArray, x]
    })
  }
  
      
    
    
  render() {
    return (
      <div className="App">
        <Search
          search={x => this.setState({ searchValue: x })}
          starInd={x =>
            this.setState({
              searchRate: x
            })
          }
        />
        <MovieList
          movie={this.state.movieArray}
          searchVal={this.state.searchValue}
          rateVal={this.state.searchRate}
        />
        <Add add={this.addMovie} />
      </div>
    );
  }
}

export default App;
