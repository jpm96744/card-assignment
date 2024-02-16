import { useState } from "react";

import Genre from "./components/Genre";
import Rating from "./components/Ratings";
import MOVIES from "./movies"
import filmPic from "./assets/film.png"

function App() {
  const [selectedGenre, setSelectedGenre] = useState();
  const [selectedRating, setSelectedRating] = useState();

  function handleSelect(selectedButton) {
    setSelectedGenre(selectedButton);
  }

  function handleSelectRating(selectedButton) {
    setSelectedRating(selectedButton);
  }

  let filteredMovies = null;

  if (selectedGenre !== null && selectedRating != null) {
    filteredMovies = MOVIES.filter(movie => {
      return movie.genre === selectedGenre && movie.rating === selectedRating;
    })
  }

  return (
    <div>
      <header>
        <img src={filmPic} alt="pic of film" />
        <h1>Movies</h1>
        <p>
          Choose a genre and desired rating!
        </p>
      </header>
      <section id="examples">
        <main>
          <div id="genre-format">
            <ol className="titles">
              <Genre 
                isSelected={selectedGenre === 'Horror'} 
                onSelect={() => handleSelect('Horror')} 
                genre='Horror'
              />
              <Genre isSelected={
                selectedGenre === 'Action'} 
                onSelect={() => handleSelect('Action')}
                genre='Action'
              />
              <Genre isSelected={
                selectedGenre === 'Comedy'} 
                onSelect={() => handleSelect('Comedy')}
                genre='Comedy'
              />
              <Genre isSelected={
                selectedGenre === 'Drama'} 
                onSelect={() => handleSelect('Drama')}
                genre='Drama'
              />
              <Genre isSelected={
                selectedGenre === 'Romance'} 
                onSelect={() => handleSelect('Romance')}
                genre='Romance'
              />
            </ol>
          </div>
          <div id="rating-format">
            <ol className="titles">
              <Rating 
                isSelected={selectedRating === 'PG'}
                onSelect={() => handleSelectRating('PG')}
                rating='PG' 
              />
              <Rating 
                isSelected={selectedRating === 'PG-13'}
                onSelect={() => handleSelectRating('PG-13')}
                rating='PG-13' 
              />
              <Rating 
                isSelected={selectedRating === 'R'}
                onSelect={() => handleSelectRating('R')}
                rating='R' 
              />
            </ol>
          </div>
        </main>
      </section>
      <section id="movies">
        <ol>
          {filteredMovies === null ? "" : 
            filteredMovies.map((movie, index) => (
            <li key={index}>
              <p>{movie.title}</p>
              <p>{movie.year}</p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}

export default App;
