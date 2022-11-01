/* eslint-disable import/no-anonymous-default-export */
import { useContext } from 'react';
import axios from 'axios';
import CryptoJs from 'crypto-js';
import { statusProgressContext } from '../Store';


const BASE_URL = process.env.REACT_APP_BASE_URL
// const BASE_URL='http://127.0.0.1:8000/api/v1'


const https = axios.create({
    // baseURL: BASE_URL,
    baseURL: 'https://test-kobo.herokuapp.com',
    responseType: "json"
})

function getHeaders(secure = false, multipart = false) {
    const encryptedToken = localStorage.getItem("UserLoginInformation") ? localStorage.getItem("UserLoginInformation") : '';
    const decreptedToken = encryptedToken ? CryptoJs.AES.decrypt(encryptedToken, 'sd2u3u27sadasdlskdqwko;dasdkqweasjdlasjd'
        // process.env.REACT_APP_SECRET_ENCRYPT_KEY
        // 'asld:"":sad1231234@#$@#sdalwew'

    ) : ''
    const originalToken = decreptedToken ? decreptedToken.toString(CryptoJs.enc.Utf8) : '';
    let headers;
    if (secure) {
        headers = multipart ? {
            'content-type': 'multipart/form-data',
            Authorization: "Bearer " + originalToken,
        } : {
            "content-Type": "application/json",
            Authorization: "Bearer " + originalToken,
        }
    } else {
        headers = multipart ? {
            'content-type': 'multipart/form-data',

        } : {
            "Content-Type": "application/json",
        };
    }
    return headers;
}
function post(url, data, isSecure, isMultipart, setStatusProgress) {

    return https.post(
        url, data,
        {
            headers: getHeaders(isSecure, isMultipart),
            onUploadProgress: (progressEvent) => {
                const progress = (progressEvent.loaded / progressEvent.total) * 50;
                console.log("This is progress", progressEvent.loaded)
                console.log("This is output", progressEvent.total)
                console.log("This is final progress", progress)
                setStatusProgress(progress)

            },
            onDownloadProgress: (progressEvent) => {
                const progress = 50 + (progressEvent.loaded / progressEvent.total) * 50;
                console.log("Final test for ouptut", progress);
                setStatusProgress(progress)

            },
        },

    )
}
function remove(url, isSecure) {
    return https.delete(
        url, { headers: getHeaders(isSecure) }
    )
}
function put(url, data, isSecure) {
    return https.put(
        url, data,
        {
            headers: getHeaders(isSecure)
        }
    )
}
function get(url, issecure) {
    return https.get(url, {
        headers: getHeaders(issecure)
    })
}

export default { post, get, remove, put };