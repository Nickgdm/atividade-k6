import http from 'k6/http'
import { check, sleep } from 'k6'
import { getToken } from '../gerartoken.js'
import { BASE_URL } from '../config.js'

/* 
$env:K6_WEB_DASHBOARD="true"
$env:K6_WEB_DASHBOARD_EXPORT="../reports/load-test.html"
$env:K6_WEB_DASHBOARD_PERIOD="5s"
k6 run load-test.js
*/

export const options = {
    stages: [
        { duration: '30s', target: 10 },
        { duration: '1m', target: 10 },
        { duration: '30s', target: 0 },
    ],
    thresholds: {
        http_req_failed: ['rate<0.01'],
        http_req_duration: ['p(95)<1000'],
    },
}

export default function () {
    const token = getToken()
    const response = http.get(
        `${BASE_URL}/api/reservations`,
        {
            headers: {
                accept: 'application/json',
                Authorization: token,
            },
        }
    )
    check(response, {
        'status é 200': (r) => r.status === 200,
        'resposta contém reservas': (r) =>
            r.json('reservations') !== undefined,
        'tempo de resposta menor que 1s': (r) =>
            r.timings.duration < 1000,
    })
    sleep(1)
}