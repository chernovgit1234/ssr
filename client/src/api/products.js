export default http => ({
	async all(){
		let { data } = await http.get('users');
		return data;
	},
})