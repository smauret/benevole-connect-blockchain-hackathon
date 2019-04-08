import unsplash from "../services/unsplash";

export const LOAD_IMAGES = 'LOAD_IMAGES';

export const renderImages = (results) => ({
  type: LOAD_IMAGES,
  results: results
});

export const loadImages = () =>

  async (dispatch) => {

    await unsplash().then((res) => {
      dispatch(dispatch(renderImages(res.results)))
    })
  };
