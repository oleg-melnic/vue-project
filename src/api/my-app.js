import axios from 'axios'

const KEY = 'a427604465';
const BASE_URL = `https://my-app-52ehg.ondigitalocean.app/iv`;

axios.defaults.headers.common['x-api-key'] = KEY;

export function getMessages() {
    return axios.get(`${BASE_URL}/chat/new-messages`);
}
