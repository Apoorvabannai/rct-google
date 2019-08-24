const INITIAL_STATE = {
  isSignedIn: null
};

export default (prevData = INITIAL_STATE, action) => {
  switch(action.type){
    case 'SIGN_IN':
      return {...prevData, isSignedIn: true};
    case 'SIGN_OUT':
        return {...prevData, isSignedIn: false};
    default:
      return prevData;
  };
};
