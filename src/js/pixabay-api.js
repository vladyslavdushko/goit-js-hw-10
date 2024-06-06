import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const PIXABAY_API_KEY = '44111421-e553a4c4acf6f519f7af5aa9e';
const PIXABAY_API_URL = "https://pixabay.com/api/";

export default async function getPicture(query) {
  const options = {
    origin: PIXABAY_API_URL,
    key: PIXABAY_API_KEY,
    image_type: 'photo',
    q: query,
    orientation: 'horizontal',
    safesearch: true,
  };

  const searchStr = `${options.origin}?key=${options.key}&q=${options.q}&image_type=${options.image_type}&orientation=${options.orientation}&safesearch=${options.safesearch}`;

  return fetch(searchStr)
    .then(res => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    })
    .then(res => {
      if (res.total === 0) {
        iziToast.error({
          title: 'Error',
          message: `Sorry, there are no images matching your search query. Please try again!`
        });
        return null;
      }
      return res;
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: error.message,
      });
      return null;
    });
}
