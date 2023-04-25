import { Alert } from 'react-native';
// Storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// common service URL
const SERVICEURL = 'https://reqres.in/api/users?page=2';

/**
* @function signUp signUp
* @param  firstName {string} - firstName for new create firebase user
* @param  lastName {string} - lastName for new create firebase user
* @param  email {string} - email for new create firebase user
* @param  password {string} - password for new create firebase user
*/
export const signUp = (firstName, lastName, email, password) => {
    // register(user: User) {
	// 	return request({
	// 		url: `${environment.authServerUrl.authority}${environment.authServerUrl.signUpPath}`,
	// 		method: 'POST',
	// 		headers: { 'Content-Type': 'application/json' },
	// 		content: JSON.stringify({
	// 			email: user.email,
	// 			password: user.password,
	// 		}),
	// 	});
	// }

}

/**
* @function signIn signIn
* @param  email {string} - email for login user
* @param  password {string} - password for login user
*/
export const signIn = async (email, password) => {
    // login(user: User) {
	// 	return request({
	// 		url: `${environment.authServerUrl.authority}${environment.authServerUrl.loginPath}`,
	// 		method: 'POST',
	// 		headers: { 'Content-Type': 'application/json' },
	// 		content: JSON.stringify({
	// 			email: user.email,
	// 			password: user.password,
	// 		}),
	// 	}).then((response) => {
	// 		this.user = user;
	// 		const token = this.extractToken(response);
	// 		this.saveToken(token);

	// 		if (token != null) {
	// 			// return true to indicate successful login
	// 			return true;
	// 		} else {
	// 			// return false to indicate failed login
	// 			return false;
	// 		}
	// 	});
	// }

}

/**
* @function forgotPassword forgotPassword
* @param  email {string} - email for forgot user password
* @param  navigation {object} - navigation for screen navigate
*/
export const forgotPassword = (email, navigation) => {
    // resetPassword(email) {
    //     return request({
    //         url: `${environment.authServerUrl.authority}${environment.authServerUrl.resetPasswordPath}`,
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         content: JSON.stringify({
    //             email,
    //         }),
    //     });
    // }
}

// logout() {
//     // 	// console.log(token);
//     // 	// const base64Url = token.split('.')[1];
//     // 	// const decoded = Buffer.from(base64Url, 'base64').toString();
//     // 	// console.log('decoded', decoded);
//     this.secureStorage
//         .removeAll()
//         .then((success) =>
//             console.log('Successfuly removed authorization? ' + success)
//         );

//     request({
//         url: `${environment.authServerUrl.authority}${environment.authServerUrl.logoutPath}`,
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         content: '',
//     });
// }

// handleErrors(error: any) {
//     console.error(error.message);

//     return Promise.reject(error.message);
// }

// getToken(): Promise<any> {
//     return this.secureStorage.get({ key: 'authorization' });
// }

// getUseEmail(): Promise<any> {
//     return this.secureStorage.get({ key: 'email' });
// }

// saveToken(token: string): void {
//     this.secureStorage.set({ key: 'authorization', value: token });
//     this.secureStorage.set({ key: 'email', value: this.user.email });
// }

// private extractToken(response: any): string {
//     return response.headers.Authorization;
// }


/**
* @function clearAsyncStorageData clear AsyncStorage Data
* @description clear all local async storage data
*/
const clearAsyncStorageData = async () => {
    try {
        await AsyncStorage.getAllKeys()
            .then(keys => AsyncStorage.multiRemove(keys))
            .then(() => console.log('success'));
    } catch (error) {
        console.error('Error clearing app data.');
    }
}

