const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '31272949-a0a925fef89e853c2c9e4d673';

async function fetchImage({ query, page }) {
  return await fetch(
    `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(
      new Error(`Sorry, but nothing was found for your query ${query}`)
    );
  });
}

export default fetchImage;
