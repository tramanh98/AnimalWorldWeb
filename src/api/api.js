import httpClient from './http-client';
import { message, notification } from 'antd';
import { useDispatch, useSelector } from 'react-redux'

const Login_Fb = async (token) =>{
    try {
        const response2 = await httpClient.post(`auth/social/convert-token/`, {
            grant_type: "convert_token",
            client_id:"2595169840730749",
            client_secret: "93fcc97b1a720b98a6df0462d6ac0ad5",
            backend: "facebook",
            token: token
        })
        return response2;
        ;

    } catch (error) {
        return 'error' 
    }
}

const Login_GG = async (token) =>{
    try {
        const response2 = await httpClient.post(`auth/social/convert-token/`, {
            grant_type: "convert_token",
            client_id:"311307780250-ns2lg1103qoblsnbmklpr3f8c6d1v53e.apps.googleusercontent.com",
            client_secret: "_2iQp_APiWURPtKfiibkcvCY",
            backend: "google-oauth2",
            token: token
        });
        return response2;
    } catch (error) {
        return 'error'
    }
}



const getProfile = async (token) =>{
    const response = await httpClient.get(`account/myprofile`,
    {
        headers: {
            Authorization: token,
        }
    }
    )
    return response       
}

const updateAvatar = async (token, url) =>{
    const response = await httpClient.put(`account/avatar/update/`,
    {
        avatar: {avatar: url}
    },
    {
        headers: {
            Authorization: token,
        }
    }
    )
    return response       
}

const logout = async () =>{
    const response = await httpClient.post(`auth/logout/`);
    return response
} 

const Login_sv = async (email, password) =>{
    try{
        const response = await httpClient.post(`auth/login/`, {
            username: '',
            email: email,
            password: password
        });
        return response
    } catch(error) {
        return error
    }
}

const Register_sv = async (values) =>{
    try {
        console.log(values)
        const response = await httpClient.post(`auth/registration/`, {
            username: String(values.usrname),
            firstName: String(values.fname),
            lastName:  String(values.lname) ,
            email: String(values.email),
            password1: String(values.password1),
            password2: String(values.password2),
        });
        return response
    } catch (error) {
        return 'error'
    }
}

const getTagsFollowing = async (idUser) => {
    try {
        const response = await httpClient.get(`api/get/followingtag/${idUser}/`);
        return response
    } catch (error) {
        return 'error'
    }
}

const apiFollowTag = async (idTag) =>{
    const token = window.localStorage.getItem('token');
    const typetoken = window.localStorage.getItem('typetoken'); 
    try {
        const response = await httpClient.post(`api/follow/animal/`,
        {
            animal: parseInt(idTag)
        },
        {
            headers: {
                Authorization: `${typetoken} ${token}`,
            }
        });
        return response
    } catch (error) {
        return 'error'
    }
}

// idFollow  khác với idTag 
const apiUnfollowTag = async (idFollow) =>{
    const token = window.localStorage.getItem('token');
    const typetoken = window.localStorage.getItem('typetoken'); 
    try {
        const response = await httpClient.delete(`api/unfollow/animal/${idFollow}/`,
        {
            headers: {
                Authorization: `${typetoken} ${token}`,
            }
        });
        return response
    } catch (error) {
        return 'error'
    }
}
export { Login_Fb, Login_GG, getProfile, updateAvatar, 
    logout, Login_sv, Register_sv, getTagsFollowing, apiFollowTag,
    apiUnfollowTag
}