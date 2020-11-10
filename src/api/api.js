import httpClient from './http-client';
import { message, notification } from 'antd';

// const restoreInforUser = (iduser, fname, lname, email, type_tk, image, username, token, onLogin ) =>{
    
//     const dt = {  
//                     iduser: iduser, 
//                     fname: fname, 
//                     lname: lname,
//                     email: email,
//                     typeToken: type_tk,
//                     image: image,
//                     username: username, 
//                     token: token 
//                 }
//     onLogin({ user: dt });
// }

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
        // .then((response) =>{
        //     const { data } = response;
        //     console.log("login successful " + inforfb);
        //     restoreInforUser('','','','',data.token_type, inforfb.image, inforfb.username, data.access_token, onLogin )
        //     message.success('Đăng nhập thành công') 
        //     return 'success'  
        //     }
        // )
        ;

    } catch (error) {
        // notifi_error(error)
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
        // const { data } = response2;
        // console.log(response2);
        // // console.log("login successful ");
        // restoreInforUser('','','','', data.token_type, infor_gg.image, infor_gg.username, data.access_token, onLogin )
        // return "success"
    } catch (error) {
        // notifi_error(error)
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
        // notifi_error(error)
        return error
    }
}
export { Login_Fb, Login_GG, getProfile, updateAvatar, logout, Login_sv}