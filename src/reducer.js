const SET_A = 'SET_A';
const SET_B = 'SET_B';
const SET_C = 'SET_C';

export const setA = () => ({
  type: SET_A
});
export const setB = () => ({
  type: SET_B
});
export const setC = () => ({
  type: SET_C
});

const initialState = {
  a: 'a 의 init 값',
  b: 'b 의 init 값',
  c: 'c 의 init 값',
};

const reducers = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case SET_A:
      return { ...state, a: 'a를 변경하는 액션이 호출됨' };
    case SET_B:
      return { ...state, b: 'b를 변경하는 액션이 호출됨' };
    case SET_C:
      return { ...state, c: 'c를 변경하는 액션이 호출됨' };
    default:
      return state;
  }
};

export default reducers;
