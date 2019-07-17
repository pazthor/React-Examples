import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization:
         'Client-ID 67ba399ab71c8f64db23cc76ac3ba0aeee725213487fcf5f7b4aab327368f7ed'
      }
});

