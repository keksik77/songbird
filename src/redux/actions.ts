import { SET_NEXT_LEVEL, RIDDLE_INDEX, VIEW_BIRD_INDEX, SCORE, IS_RIGHT } from "./actionTypes";


export const SET_NEXT_LEVEL_ACTION = (content: boolean) => ({
  type: SET_NEXT_LEVEL,
  payload: {
    content
  }
});

export const SET_VIEW_BIRD_INDEX = (content: number) => ({
  type: VIEW_BIRD_INDEX,
  payload: {
    content
  }
});

export const SET_IS_RIGHT = (content: boolean) => ({
  type: IS_RIGHT,
  payload: {
    content
  }
});

export const SET_SCORE = (content: number) => ({
  type: SCORE,
  payload: {
    content
  }
});


export const SET_RIDDLE_INDEX = (content: number) => ({
  type: RIDDLE_INDEX,
  payload: {
    content
  }
});
