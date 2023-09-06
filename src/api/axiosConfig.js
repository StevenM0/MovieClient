import axios from 'axios';

// ## TODO: Look into Ngrok for a better solution
export default axios.create({
    baseURL:'http://localhost:8080',
});