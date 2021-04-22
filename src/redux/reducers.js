export const showWeatherForNowReducer = (state, payload) => {
    console.log('egor say 1')
    console.log(payload)
    return { ...state, posts: state.posts.concat([payload]) };
};

export const showWeatherFor3DaysReducer = (payload) => {
    console.log('say egor 3')
    console.log(payload)
    return { posts: [] };
};
