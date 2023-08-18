import axios from 'axios'
export const registerUser = (data) => axios.post('http://13.233.107.85:8080/register', data);
export const totalPendingQuery = () => axios.get('http://13.233.107.85:8080/totalPendingQuery');
export const replyToClient = (data) => axios.post('http://13.233.107.85:8080/replyToClient',data);
export const fetchPreviousQuestion = (data) => axios.post('http://13.233.107.85:8080/fetchPreviousQuestion', data);
export const fetchPendingQuestion = (data) => axios.post('http://13.233.107.85:8080/fetchPendingQuestion', data);
export const replyToPendingQuestion = (data) => axios.post('http://13.233.107.85:8080/replyToPendingQuestion',data);