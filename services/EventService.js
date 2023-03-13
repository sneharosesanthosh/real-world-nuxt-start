import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        Accept: 'application/JSON',
        ContentType: 'application/JSON'
    }
})

export default {
    getEvents() {
        return apiClient.get("/events")
    },
    getEvent(id) {
        return apiClient.get('/events/'+id)
    }
}