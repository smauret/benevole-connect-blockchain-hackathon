import axios from 'axios'

export default mail => {
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();
  return axios.get(`https://robohash.org/${mail}?size=300x300`, {cancelToken: source.token})
    .then(
      //Success
      () => {
        return ({isLoaded: true, avatarURL: `https://robohash.org/${mail}?size=300x300`, error: ''})
      })
    .catch(//Error
      (error) => {
        return ({isLoaded: false, avatarURL: '', error: error})
      })
}
