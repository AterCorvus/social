import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "13cfaf89-045b-4562-a42a-04fc576de7b4"
    }
});

export const UserApi = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },

    followUser(uid) {
        return instance.post(`follow/${uid}`).then(response => response.data.resultCode);
    },

    unfollowUser(uid) {
        return instance.delete(`follow/${uid}`).then(response => response.data.resultCode);
    }
}

export const AuthApi = {
    Authorize() {
        return instance.get('auth/me').then(response => response.data);
    }
}

export const ProfileApi = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`).then(response => response.data);
    }
}