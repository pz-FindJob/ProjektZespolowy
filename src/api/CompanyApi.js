import Api from './index';

const registerAccount = async (data) => {
    return await Api.post('/api/company/signup', data);
}

const login = async (data) => {
    return await Api.post('/api/company/signin', data);
}

const getProfile = async () => {
    return await Api.get('/api/company/profile');
}

const getProfileById = async (id) => {
    return await Api.get('/api/company/' + id);
}

const getProfileData = async (id) => {
    return await Api.get(`/api/company/${id}/job`);
}

const getAll = async () => {
    return await Api.get('/api/company/list');
}

const search = async (params) => {
    return await Api.get('/api/company/search?' + params);
}

const updateProfile = async (data) => {
    return await Api.post(`/api/company/profile`, data);
}


const helper = {
    registerAccount: registerAccount,
    login: login,
    search:search,
    getProfile: getProfile,
    getProfileData: getProfileData,
    getAll: getAll,
    updateProfile: updateProfile,
    getProfileById: getProfileById
}

export {
    registerAccount,
    login
}

export default helper;