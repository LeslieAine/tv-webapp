const url = 'https://www.tvmaze.com/shows';
// const moviesEndpoint = 'shows';
// const moviesRange = '2';


const getMovies = async () => {
  const response = await fetch(`${url}`, {
    method: 'GET',
    mode: 'no-cors',
  });
  const data = await response.json();
  console.log(data);
  return data;
};

// export default getMovies;

// const getMovies = async () => {
//     const response = await fetch(`${url}${moviesEndpoint}${moviesRange}`, {
//       method: 'GET',
//       mode: 'no-cors',
//     });
//     const data = await response.json();
//     console.log(data);
//     return data;
//   };

//   export default getMovies;
// const url = 'http://localhost:8081/proxy?url=https://api.tvmaze.com/shows/2';
// const getMovies = async () => {
//     try {
//       const response = await fetch(`${url}`);
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };
  
//   export default getMovies;