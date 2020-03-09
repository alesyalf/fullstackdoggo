export const ADDLIKE = 'ADDLIKE';
export const REMOVELIKE = 'REMOVELIKE';

export const addLike = item => ({
    type: ADDLIKE,
    payload: { item }
});

export const removeLike = id => ({
    type: REMOVELIKE,
    payload: { id }
});