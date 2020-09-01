import { SET_NEXT_LEVEL, RIDDLE_INDEX, IS_RIGHT, SCORE, VIEW_BIRD_INDEX} from "../actionTypes";

const initialState = {
  levelIndex: 0,
  riddleIndex: 0,
  score: 0,
  isRight: false,
  viewBirdIndex: 0,
}

const visibilityFilter = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_NEXT_LEVEL: {
      return { ...state, levelIndex: action.payload.content ? state.levelIndex + 1 : 0};
    }
    case RIDDLE_INDEX: {
      return { ...state, riddleIndex: action.payload.content }
    }
    case IS_RIGHT: {
      return { ...state, isRight: action.payload.content }
    }
    case SCORE: {
      return { ...state, score: action.payload.content }
    }
    case VIEW_BIRD_INDEX: {
      return {...state, viewBirdIndex: action.payload.content}
    }
    default: {
      return state;
    }
  }
};

export default visibilityFilter;
