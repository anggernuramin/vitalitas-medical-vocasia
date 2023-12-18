const BASE_URL = 'https://contact-api.dicoding.dev/v1';
import {jwtDecode} from "jwt-decode"


export const getAccesToken = () => {
    return localStorage.getItem('accessToken')
}

export const getTokenUsername = () => {
    const token = getAccesToken()
    if(token){
        const decoded = jwtDecode(token)
        console.log("decode",decoded)
        return decoded
    }

} 
export const putAccesToken = (accessToken) => {
    return localStorage.setItem('accessToken', accessToken)
}

export const fetchWithToken = async (url,options={}) => {
    return fetch(url,{
        ...options,
        headers: {
            ...options.headers,
            Authorization: `Bearer ${getAccesToken()}`
        }
    })
}

export const login = async({email,password}) => {
    const response = await fetch(`${BASE_URL}/login`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email,password})
    })

    const responseJson = await response.json()

    if(responseJson.status !== 'success'){
        // alert(responseJson.message)
        return({error: true,message: responseJson.message, data: null})
    }

    return {error: false, data: responseJson.data}
}

export const register = async({name,email,password}) => {
    const response = await fetch(`${BASE_URL}/register`,{
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },body: JSON.stringify({name,email,password})
    })

    const responseJson = await response.json()

    if(responseJson !== 'successs'){
        // alert(responseJson.message)
        return {error: true,message: responseJson.message}
    }

    return {error: false}
}

export const getUserLogged = async () => {
    const response = await fetchWithToken(`${BASE_URL}/users/me`)
    const responseJson = await response.json()

    if(responseJson.status !== 'success'){
        return {error: true, data: null}
    }

    return {error: false, data: responseJson.data}
}