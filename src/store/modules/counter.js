// action
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';
const CHANGE_COLOR = 'counter/CHANGE_COLOR';
const CHANGE_OPACITY = 'counter/CHANGE_OPACITY';

// action creator
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const changeColor = color => ({ type: CHANGE_COLOR, color });
export const changeOpacity = opacity => ({ type: CHANGE_OPACITY, opacity});

const initialState = {
    number: 0,
    color: '#bfcd7e',
    opacity: 1,
};

// counter reducer
export default function counter(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                number: state.number + 1
            };

        case DECREMENT:
            return {
                ...state,
                number: state.number - 1
            };

        case CHANGE_COLOR:
            return {
                ...state,
                color: action.color,
            };
        case CHANGE_OPACITY: 
        return{
            ...state,
            opacity: action.opacity,

        };
        default:
            return state;
    }
}