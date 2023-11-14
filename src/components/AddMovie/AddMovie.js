// import React, { useState } from 'react';
// import './AddMovie.module.css'; // Pastikan file CSS di-import di sini

// const MovieForm = () => {
//   const [imageUrl, setImageUrl] = useState('');
//   const [movieType, setMovieType] = useState('Action');
//   const [movies, setMovies] = useState([]);

//   const handleImageUrlChange = (e) => {
//     setImageUrl(e.target.value);
//   };

//   const handleMovieTypeChange = (e) => {
//     setMovieType(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newMovie = {
//       imageUrl,
//       movieType,
//     };
//     setMovies([...movies, newMovie]);
//     setImageUrl('');
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Image URL:
//           <input type="text" value={imageUrl} onChange={handleImageUrlChange} />
//         </label>
//         <label>
//           Movie Type:
//           <select value={movieType} onChange={handleMovieTypeChange}>
//             <option value="Action">Action</option>
//             <option value="Drama">Drama</option>
//             <option value="Horror">Horror</option>
//             <option value="Comedy">Comedy</option>
//             {/* Tambahkan opsi lain sesuai kebutuhan */}
//           </select>
//         </label>
//         <button type="submit">Tambah Film</button>
//       </form>

//       <div>
//         <h2>Daftar Film:</h2>
//         <ul>
//           {movies.map((movie, index) => (
//             <li key={index}>
//               <img src={movie.imageUrl} alt={`Movie ${index + 1}`} />
//               <p>Type: {movie.movieType}</p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default MovieForm;

import React, { useState } from 'react';
import './AddMovie.module.css'; // Pastikan file CSS di-import di sini

const MovieForm = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [movieType, setMovieType] = useState('Action');
  const [movies, setMovies] = useState([]);

  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleMovieTypeChange = (e) => {
    setMovieType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      imageUrl,
      movieType,
    };
    setMovies([...movies, newMovie]);
    setImageUrl('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Image URL:
          <input type="text" value={imageUrl} onChange={handleImageUrlChange} />
        </label>
        <label>
          Movie Type:
          <select value={movieType} onChange={handleMovieTypeChange}>
            <option value="Action">Action</option>
            <option value="Drama">Drama</option>
            <option value="Horror">Horror</option>
            <option value="Comedy">Comedy</option>
            {/* Tambahkan opsi lain sesuai kebutuhan */}
          </select>
        </label>
        <button type="submit">Tambah Film</button>
      </form>

      <div>
        <h2>Daftar Film:</h2>
        <ul>
          {movies.map((movie, index) => (
            <li key={index}>
              <img src={movie.imageUrl} alt={`Movie ${index + 1}`} />
              <p>Type: {movie.movieType}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieForm;