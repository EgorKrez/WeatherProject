export const showWeatherForNowReducer = (payload) => {
    return { posts: [payload] };
};

export const showWeatherFor3DaysReducer = (payload) => {
    return { posts: [payload] };
};

export const clearAllForecastReducer = () => {
    return { posts: [] };
};
