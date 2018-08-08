import axios from 'axios';

let host = 'http://www.johnkee.com';

// 获取项目信息
export const queryProjects = params => { return axios.get(`${host}/projects/`); };

// get news infos
export const getNews = params => { return axios.get(`${host}/news/`); };

// get district infos
export const getDistrict = params => { return axios.get(`${host}/regions/`); };

// 获取项目类别信息
export const getCategory = params => {
    if ('id' in params) {
        return axios.get(`${host}/industrytype/`, params);
    } else {
        return axios.get(`${host}/industrytype/`, params);
    }
};
