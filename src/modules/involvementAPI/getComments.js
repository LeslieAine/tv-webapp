const comments = async (movieId) => {
  movieId = movieId.toString();
  const coms = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/mjFvlMYeU34N8ufbOBkO/comments?item_id=${movieId}`,
  );
  const res = coms.json();
  return res;
};
export default comments;
