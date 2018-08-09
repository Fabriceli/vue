import axios from 'axios';

let host = 'https://www.johnkee.com';

// let host = 'http://127.0.0.1:8000';

// 获取项目信息
export const queryProjects = params => { return axios.get(`${host}/projects/`, params); };

// get district infos
export const getDistrict = params => { return axios.get(`${host}/regions/`, params); };

// 获取项目类别信息
export const getCategory = params => {
    if ('id' in params) {
        return axios.get(`${host}/industrytype/`, params);
    } else {
        return axios.get(`${host}/industrytype/`, params);
    }
};

//添加新闻
export const addNews = params => {return axios.post(`${host}/news/`, params)};

//删除新闻
export const delNews = newsId => {return axios.delete(`${host}/news/`+newsId+'/')};

//修改新闻
export const updateNews = (newsId, params) => {return axios.patch(`${host}/news/`+newsId+'/', params)};

// get news infos
export const getNews = params => { return axios.get(`${host}/news/`, params); };
