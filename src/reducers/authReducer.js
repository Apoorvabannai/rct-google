import { SIGN_IN, SIGN_OUT } from '../actions/actionsTypes';

const INITIAL_STATE = {
  isSignedIn: null,
  userId: null
};

export default (prevData = INITIAL_STATE, action) => {
  switch(action.type){
    case SIGN_IN:
      return {...prevData, isSignedIn: true, userId: action.payload};
    case SIGN_OUT:
        return {...prevData, isSignedIn: false, userId: null};
    default:
      return prevData;
  };
};
