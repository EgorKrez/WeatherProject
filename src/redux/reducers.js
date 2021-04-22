export const showWeatherForNowReducer = (payload) => {
    console.log(payload)
    return { posts: [payload] };
};

export const showWeatherFor3DaysReducer = (payload) => {
    console.log(payload)
    return { posts: [payload] };
};

export const clearAllForecastReducer = () => {
    return { posts: [] };
};
