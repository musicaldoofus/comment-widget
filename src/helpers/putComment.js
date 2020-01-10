import axios from 'axios';

const putComment = (comment) => {
    const ENDPOINT_URL = 'https://h1qa6lowel.execute-api.us-west-2.amazonaws.com/prod/';
    axios.put(comment, ENDPOINT_URL)
        .then(d => console.log(d))
        .catch(err => console.error(err))
}

export default putComment;