import axios from 'axios'

const api =  axios.create({
    baseURL: 'https://ghibliapi.vercel.app/films'
})

export default api