const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/mjFvlMYeU34N8ufbOBkO/likes';

const getLikes = async () => {
  const response = await fetch(`${url}`);
  return response.json();
};

const addLike = async (id) => {
  const response = await fetch(`${url}`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return response;
};

export { getLikes, addLike };