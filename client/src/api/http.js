import axios from 'axios';

export default () => {
	const baseURL = 'http://localhost:5000';
	const instance = axios.create({
		baseURL,
		timeout: 10000,
		withCredentials: false
	});

	return instance;
}