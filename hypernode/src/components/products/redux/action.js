import axios from "axios";

export const COURSEDATA = "COURSEDATA";
export const coursedata = (payload) => ({
  type: COURSEDATA,
  payload,
});
export const fetchcourses = (payload) => async (dispatch) => {
  let res = await axios.get(`https://hypernodebe.herokuapp.com/${payload}`);
  dispatch(coursedata(res.data));
};

export const COURSEFILTER = "COURSEFILTER";
export const platformfilter = (payload) => ({
  type: COURSEFILTER,
  payload,
});
export const filtercourses = (payload) => async (dispatch) => {
  let res = await axios.get(`https://hypernodebe.herokuapp.com/${payload}`);
  dispatch(platformfilter(res.data));
};

export const COURSESORTER = "COURSESORTER";
export const coursesort = (payload) => ({
  type: COURSESORTER,
  payload,
});
export const sortcourses = (payload) => async (dispatch) => {
  let res = await axios.get(`https://hypernodebe.herokuapp.com/${payload}`);
  dispatch(coursesort(res.data));
};
