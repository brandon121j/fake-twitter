const fakeUserData = 
	{
		id: '001',
		email: 'brandon@email.com',
		firstName: 'Brandon',
		lastName: 'Johnson',
	}


export const fetchUser = (email, password) =>
	new Promise((resolve, reject) => {
		console.log('fetching user Data');
		setTimeout(() => {
			try {
				resolve(fakeUserData);
			} catch (err) {
				reject(err);
			}
		}, 1000);
	});
