import axios from 'axios';

const apiurl = 'https://93870v1pgk.execute-api.ap-south-1.amazonaws.com/latest/shipments';
const token = 'tTU3gFVUdP';

export default axios.create({
    baseURL: apiurl,
    headers: {
        'Authorization': 'Bearer '+ token,
        'Accept':'application/json, text/plain'
    }
})
