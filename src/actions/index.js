import { SIGN_IN, SIGN_OUT, CREATE_STREAM} from './actionsTypes';

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload:{
      userId: userId
    }
  }
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  }
};

export const createStream = (data) => {
  return {
    type: CREATE_STREAM,
    payload: {
      data: null
    }
  }
}