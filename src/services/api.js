import axios from 'axios'

//json-server --watch -d 180 --host YOUR-IP db.json

const api = axios.create({
    baseURL: 'http://YOUR-IP:3000'
})

export default api;