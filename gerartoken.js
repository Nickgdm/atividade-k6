import http from 'k6/http'
import { BASE_URL } from './config.js'

export function getToken() {
    const url = `${BASE_URL}/api/login`

    const payload = JSON.stringify(
        {
            "email":"admin@biblioteca.com",
            "password":"admin123"
        }
    )

    const headers = {
        accept: 'application/json',
        'content-Type': 'application/json'
    }

    const response = http.post(url, payload, {headers})

    const token = response.json('token')
    return token
}

