import axios from 'axios'
// require syntax
//const Unsplash = require('unsplash-js').default;

/*const unsplash = new Unsplash({
  client_id: 'd4b2f5c14a1815effdaf02f343703ef12909b3c9aab14ff6d0ef6f1b0cb155d4',
  secret: 'de1e31fd61103863c0f9bbeff46670cb68c2b4b4a03f437050e522d10ac0c986'
});*/

export default () => {
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();
  return axios.get(`https://api.unsplash.com/search/photos?client_id=d4b2f5c14a1815effdaf02f343703ef12909b3c9aab14ff6d0ef6f1b0cb155d4&query=sport`, {cancelToken: source.token})
    .then(
      //Success
      (res) => {
        return ({results: res.data.results})
      })
    .catch(//Error
      (error) => {
        return ({error: error})
      })
}

