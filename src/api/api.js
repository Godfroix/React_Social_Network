import * as axios from 'axios';


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: { 'API-KEY': 'a37bcffb-14a0-44ac-b3cc-129e1f6fffe9' },
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => { return response.data })
    },
    getProfile(userId = 1) {
        return instance.get(`profile/${userId}`)
            .then(response => { return response.data })
    },
    deleteFollow(userId = 1) {
        return instance.delete(`follow/${userId}`)
            .then(response => { return response.data })
    },
    postFollow(userId = 1) {
        return instance.post(`follow/${userId}`)
            .then(response => { return response.data })
    },
}

export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`)
            .then(response => { return response.data })
    },
}




