const movies = [
    {
      title: "The Conjuring",
      year: 2013,
      rating: "R",
      genre: "Horror"
    },
    {
      title: "The Dark Knight",
      year: 2008,
      rating: "PG-13",
      genre: "Action"
    },
    {
      title: "The Hangover",
      year: 2009,
      rating: "R",
      genre: "Comedy"
    },
    {
      title: "Forrest Gump",
      year: 1994,
      rating: "PG-13",
      genre: "Drama"
    },
    {
      title: "Pride and Prejudice",
      year: 2005,
      rating: "PG",
      genre: "Romance"
    },
    {
      title: "The Shining",
      year: 1980,
      rating: "R",
      genre: "Horror"
    },
    {
      title: "Die Hard",
      year: 1988,
      rating: "R",
      genre: "Action"
    },
    {
      title: "Superbad",
      year: 2007,
      rating: "R",
      genre: "Comedy"
    },
    {
      title: "The Shawshank Redemption",
      year: 1994,
      rating: "R",
      genre: "Drama"
    },
    {
      title: "Titanic",
      year: 1997,
      rating: "PG-13",
      genre: "Romance"
    },
    {
      title: "The Exorcist",
      year: 1973,
      rating: "R",
      genre: "Horror"
    },
    {
      title: "Indiana Jones and the Raiders of the Lost Ark",
      year: 1981,
      rating: "PG",
      genre: "Action"
    },
    {
      title: "Anchorman: The Legend of Ron Burgundy",
      year: 2004,
      rating: "PG-13",
      genre: "Comedy"
    },
    {
      title: "The Godfather",
      year: 1972,
      rating: "R",
      genre: "Drama"
    },
    {
      title: "La La Land",
      year: 2016,
      rating: "PG-13",
      genre: "Romance"
    },
    {
      title: "Psycho",
      year: 1960,
      rating: "R",
      genre: "Horror"
    },
    {
      title: "Gladiator",
      year: 2000,
      rating: "R",
      genre: "Action"
    },
    {
      title: "Bridesmaids",
      year: 2011,
      rating: "R",
      genre: "Comedy"
    },
    {
      title: "Schindler's List",
      year: 1993,
      rating: "R",
      genre: "Drama"
    },
    {
      title: "The Notebook",
      year: 2004,
      rating: "PG-13",
      genre: "Romance"
    },
    {
      title: "A Nightmare on Elm Street",
      year: 1984,
      rating: "R",
      genre: "Horror"
    },
    {
      title: "Terminator 2: Judgment Day",
      year: 1991,
      rating: "R",
      genre: "Action"
    },
    {
      title: "Napoleon Dynamite",
      year: 2004,
      rating: "PG",
      genre: "Comedy"
    },
    {
      title: "The Green Mile",
      year: 1999,
      rating: "R",
      genre: "Drama"
    },
    {
      title: "Romeo + Juliet",
      year: 1996,
      rating: "PG-13",
      genre: "Romance"
    },
    {
      title: "Halloween",
      year: 1978,
      rating: "R",
      genre: "Horror"
    },
    {
      title: "Mad Max: Fury Road",
      year: 2015,
      rating: "R",
      genre: "Action"
    },
    {
      title: "Mean Girls",
      year: 2004,
      rating: "PG-13",
      genre: "Comedy"
    },
    {
      title: "The Pursuit of Happyness",
      year: 2006,
      rating: "PG-13",
      genre: "Drama"
    },
    {
      title: "500 Days of Summer",
      year: 2009,
      rating: "PG-13",
      genre: "Romance"
    },
    {
      title: "Scream",
      year: 1996,
      rating: "R",
      genre: "Horror"
    },
    {
      title: "Inception",
      year: 2010,
      rating: "PG-13",
      genre: "Action"
    },
    {
      title: "Zoolander",
      year: 2001,
      rating: "PG-13",
      genre: "Comedy"
    },
    {
      title: "The Revenant",
      year: 2015,
      rating: "R",
      genre: "Drama"
    },
    {
      title: "The Princess Bride",
      year: 1987,
      rating: "PG",
      genre: "Romance"
    },
    {
      title: "The Texas Chain Saw Massacre",
      year: 1974,
      rating: "R",
      genre: "Horror"
    },
    {
      title: "Jurassic Park",
      year: 1993,
      rating: "PG-13",
      genre: "Action"
    },
    {
      title: "Dumb and Dumber",
      year: 1994,
      rating: "PG-13",
      genre: "Comedy"
    },
    {
      title: "Saving Private Ryan",
      year: 1998,
      rating: "R",
      genre: "Drama"
    },
    {
      title: "Dirty Dancing",
      year: 1987,
      rating: "PG-13",
      genre: "Romance"
    },
    {
      title: "A Quiet Place",
      year: 2018,
      rating: "PG-13",
      genre: "Horror"
    },
    {
      title: "The Matrix",
      year: 1999,
      rating: "R",
      genre: "Action"
    },
    {
      title: "Step Brothers",
      year: 2008,
      rating: "R",
      genre: "Comedy"
    },
    {
      title: "The Departed",
      year: 2006,
      rating: "R",
      genre: "Drama"
    },
    {
      title: "Pretty Woman",
      year: 1990,
      rating: "R",
      genre: "Romance"
    },
    {
      title: "It",
      year: 2017,
      rating: "R",
      genre: "Horror"
    },
    {
      title: "Avatar",
      year: 2009,
      rating: "PG-13",
      genre: "Action"
    },
    {
      title: "Elf",
      year: 2003,
      rating: "PG",
      genre: "Comedy"
    },
    {
      title: "The Godfather: Part II",
      year: 1974,
      rating: "R",
      genre: "Drama"
    },
    {
      title: "La La Land",
      year: 2016,
      rating: "PG-13",
      genre: "Romance"
    },
    {
      title: "The Silence of the Lambs",
      year: 1991,
      rating: "R",
      genre: "Horror"
    },
    {
      title: "Avengers: Endgame",
      year: 2019,
      rating: "PG-13",
      genre: "Action"
    },
    {
      title: "Anchorman 2: The Legend Continues",
      year: 2013,
      rating: "PG-13",
      genre: "Comedy"
    },
    {
      title: "Good Will Hunting",
      year: 1997,
      rating: "R",
      genre: "Drama"
    },
    {
      title: "The Fault in Our Stars",
      year: 2014,
      rating: "PG-13",
      genre: "Romance"
    }
  ];

  export default movies;