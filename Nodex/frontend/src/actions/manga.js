import axios from "axios";
import { DELETE_MANGA, GET_MANGA, ADD_MANGA } from "./types";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";

// GET MANGA
export const getManga = () => (dispatch, getState) => {
  axios
    .get("/api/manga/", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_MANGA,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// DELETE MANGA

export const deleteManga = id => (dispatch, getState) => {
  axios
    .delete(`/api/manga/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ deleteManga: "Manga deleted" }));
      dispatch({
        type: DELETE_MANGA,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

// ADD MANGA

export const addManga = manga => (dispatch, getState) => {
  axios
    .post("/api/manga/", manga, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ addManga: "Manga added" }));
      dispatch({
        type: ADD_MANGA,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
