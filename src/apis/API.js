import axios from "axios"
import {LocalStorage} from 'quasar'

let BaseApi = axios.create({
    //baseURL: "http://localhost:8000/api"
    baseURL: "https://shielded-shelf-72676.herokuapp.com/api"
});

let Api = function(){
    let token = LocalStorage.getItem("token");

    if(token){
        BaseApi.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }

    return BaseApi;
}

//Api.defaults.withCredentials = true;

export default Api;