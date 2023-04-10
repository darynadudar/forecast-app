import Axios from "axios";

import { defineStore } from 'pinia';

const BASE_URL = 'https://api.weatherapi.com/v1';

export const useWeatherStore = defineStore('weather', {
    state: () => ({
        API_KEY: 'a32967cbc7c04d1d982213031223012',
        ipData: {},
        forecastData: [],
    }),
    // getters: {
    //     doubleCount: (state) => state.count * 2,
    // },
    actions: {
        getIpData() {
            Axios.get(`${BASE_URL}/ip.json?key=${this.API_KEY}&q=auto:ip`)
                .then(response => { this.ipData = response.data })
        },
        getForecastData() {
            Axios.get(`${BASE_URL}/forecast.json?key=${this.API_KEY}&q=auto:ip`)
                .then(response => { this.forecastData = response.data })
        },
    },
});