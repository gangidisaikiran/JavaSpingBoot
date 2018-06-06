import axios from 'axios';

export function HttpHelper(type, method, data, params) {
    let url = `${process.env.SERVER_HOST}/${type}`;
    if (type.includes(process.env.SERVER_HOST)) {
        url = type
    }
    return axios({
        method,
        url,
        params,
        data
    })
        .then(function (response) {
            return response
        })
        .catch(function (error) {
            return error.response
        });
}