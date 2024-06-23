"use strict";

//  ============libraries import==========

import axios from 'axios';

//  ============main const==========

const axios1 = axios.create({
    baseURL: 'https://pixabay.com/api/',
    params: {
        key: '44401278-613f3c82386bcb5b22d8a73ae',
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        per_page: 15,
    },
});

//  ============functions==========

export async function fetchImg(searchedImg, page) {
    const res = await axios1.get('', {
        params: {
            q: searchedImg,
            page: page,
        }
    });
    return res.data;
};