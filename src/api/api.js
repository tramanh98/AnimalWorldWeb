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
        return error 
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
        return error
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

const updateAvatar = async (url) =>{
    const token = window.localStorage.getItem('token');
    const typetoken = window.localStorage.getItem('typetoken'); 
    try{
        const response = await httpClient.put(`account/avatar/update/`,
        {
            avatar: {avatar: url}
        },
        {
            headers: {
                Authorization: `${typetoken} ${token}`,
            }
        }
        )
        return response 
    }
    catch(error){
        return error
    }
      
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
        return error
    }
}

const getTagsFollowing = async (idUser) => {
    try {
        const response = await httpClient.get(`api/get/followingtag/${idUser}/`);
        return response
    } catch (error) {
        return error
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
        return error
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
        return error
    }
}

const uploadImg = async (blob) =>{
    let formData = new FormData();
    formData.append("image", blob);
    try {
        const response = await httpClient.post(`api/img/upload/`, formData,
        {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        return response
    } catch (error) {
        return error
    }

}

const postBlog = async (intro, img, content) =>{
    const token = window.localStorage.getItem('token');
    const typetoken = window.localStorage.getItem('typetoken'); 
    try {
        const response = await httpClient.post(`api/create/article/`,
        {
                title: intro.title ,
                image: img ,
                content: content ,
                typeClass: intro.typeClass ,
                dangerous: intro.dangerous ,
                underwater: intro.underwater ,
                terrestrial: intro.terrestrial ,
                pets: intro.pets ,
                wild: intro.wild ,
                rare: intro.rare ,
        },
        {
            headers: {
                Authorization: `${typetoken} ${token}`,
            }
        });
        return response
    } catch (error) {
        return error
    }
}

const getDetailBlog = async (id) =>{
    const response = await httpClient.get(`api/get/article/${id}`)
    return response
}

const apiComment = async (idPost, content) =>{
    
    const token = window.localStorage.getItem('token');
    const typetoken = window.localStorage.getItem('typetoken'); 
    try {
        const response = await httpClient.post(`api/write/comment/`,
        {
            article: idPost,
            content: content
        },
        {
            headers: {
                Authorization: `${typetoken} ${token}`, 
            }
        });
        return response
    } catch (error) {
        return error
    }

}

const likeComment = async (idComment) =>{
    const token = window.localStorage.getItem('token');
    const typetoken = window.localStorage.getItem('typetoken'); 
    try {
        const response = await httpClient.post(`api/vote/comment/`,
        {
            comment: idComment,
            vote: '1'
        },
        {
            headers: {
                Authorization: `${typetoken} ${token}`,
            }
        });
        return response
    } catch (error) {
        return error
    }
}

const dislikeComment = async (idVoteCmt) =>{
    const token = window.localStorage.getItem('token');
    const typetoken = window.localStorage.getItem('typetoken'); 
    try {
        const response = await httpClient.delete(`api/delete/vote/comment/${idVoteCmt}/`,
        {
            headers: {
                Authorization: `${typetoken} ${token}`,
            }
        });
        return response
    } catch (error) {
        return error
    }
}

const updatePost = async (idPost, intro, img, content) =>{
    const token = window.localStorage.getItem('token');
    const typetoken = window.localStorage.getItem('typetoken'); 
    try {
        const response = await httpClient.put(`api/update/article/${idPost}/`,
        {
                title: intro.title ,
                image: img ,
                content: content ,
                typeClass: intro.typeClass ,
                dangerous: intro.dangerous ,
                underwater: intro.underwater ,
                terrestrial: intro.terrestrial ,
                pets: intro.pets ,
                wild: intro.wild ,
                rare: intro.rare ,
        },
        {
            headers: {
                Authorization: `${typetoken} ${token}`,
            }
        });
        return response
    } catch (error) {
        return error
    }
}

const EditProfile = async (values) =>{
    const token = window.localStorage.getItem('token');
    const typetoken = window.localStorage.getItem('typetoken'); 
    try{
        const response = await httpClient.put(`account/myprofile/`,
        {
            profileUpdate: {
                first_name: values.fname,
                last_name: values.lname,
                phone: values.phone 
            }
        },
        {   headers: {
                Authorization: `${typetoken} ${token}`,
            }
        })
        return response
    }
    catch(error){
        return error
    }
}

const GetArticleToUpdate = async (idPost) =>{
    try{
        const response = await httpClient.get(`api/get/your/article/${idPost}`)
        return response
    }
    catch(error){
        return error
    }
}

const ApiDeleteArticle = async (idPost) =>{
    const token = window.localStorage.getItem('token');
    const typetoken = window.localStorage.getItem('typetoken'); 
    try {
        const response = await httpClient.delete(`api/delete/article/${idPost}/`,
        {
            headers: {
                Authorization: `${typetoken} ${token}`,
            }
        });
        return response
    } catch (error) {
        return error
    } 
}

const GetInforUser = async (idUser) =>{
    try{
        const response = await httpClient.get(`api/get/infor/user/${idUser}`)
        return response
    }
    catch(error){
        return error
    } 
}

// lấy tất cả các bài báo của user đó ( của mình hoặc của người khác)
const GetAllUserArticle = async (idUser) =>{
    try{
        const response = await httpClient.get(`api/get/all/articles/?idUser=${idUser}`)
        return response
    }
    catch(error){
        return error
    } 
}

const GetCommentsArticle = async (idPost) =>{
    try{
        const response = await httpClient.get(`api/get/comments/?idPost=${idPost}`)
        return response
    }
    catch(error){
        return error
    } 
}

const VoteArticle = async (idPost) =>{
    const token = window.localStorage.getItem('token');
    const typetoken = window.localStorage.getItem('typetoken'); 
    try {
        const response = await httpClient.post(`api/vote/article/`,
        {
            article: idPost,
            vote: '1'
        },
        {
            headers: {
                Authorization: `${typetoken} ${token}`,
            }
        });
        return response
    } catch (error) {
        return error
    }
}

const UnvoteArticle = async (idVote) =>{
    const token = window.localStorage.getItem('token');
    const typetoken = window.localStorage.getItem('typetoken'); 
    try {
        const response = await httpClient.delete(`api/delete/vote/article/${idVote}/`,
        {
            headers: {
                Authorization: `${typetoken} ${token}`,
            }
        });
        return response
    } catch (error) {
        return error
    }
}

const latestPost = async (page) =>{
    try {
        if(page == 1){
            const response = await httpClient.get(`api/latest/article`);
            return response
        }
        else{
            const res = await httpClient.get(`api/latest/article?page=${page}`);
            return res
        }
    } catch (error) {
        return error
    }
}

const trendingPost = async (page) =>{

    try {
        if(page == 1){
            const response = await httpClient.get(`api/trending/article`);
            return response
        }
        else{
            const res = await httpClient.get(`api/trending/article?page=${page}`);
            return res
        }
    } catch (error) {
        return error
    }  
}

const favoritePost = async (page) =>{

    try {
        if(page == 1){
            const response = await httpClient.get(`api/favorite/article`);
            return response
        }
        else{
            const res = await httpClient.get(`api/favorite/article?page=${page}`);
            return res
        }
    } catch (error) {
        return error
    }  
}

const animalClassPost = async (page, idClass) =>{

    try {
        if(page == 1){
            const response = await httpClient.get(`api/filter/animalclass/article/?idClass=${idClass}`);
            return response
        }
        else{
            const res = await httpClient.get(`api/filter/animalclass/article/?idClass=${idClass}&page=${page}`);
            return res
        }
    } catch (error) {
        return error
    }  
}

export { 
    Login_Fb, Login_GG, getProfile, updateAvatar, 
    logout, Login_sv, Register_sv, getTagsFollowing, apiFollowTag,
    apiUnfollowTag, uploadImg, postBlog, getDetailBlog, apiComment, 
    likeComment, dislikeComment, updatePost, EditProfile, GetArticleToUpdate, ApiDeleteArticle,
    GetInforUser, GetAllUserArticle, GetCommentsArticle, VoteArticle, UnvoteArticle, latestPost,
    trendingPost, favoritePost,animalClassPost
}