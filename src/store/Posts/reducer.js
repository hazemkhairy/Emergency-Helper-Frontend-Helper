import types from './types';
const initialState = [{ name: 'post1', id: '1' }]

export default (state = initialState, action) => {
    
    switch (action.type) {
        case (types.DATA_LOADED):
            return action.payload;
        default:
            return state;
    }
}