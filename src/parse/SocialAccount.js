import Parse from 'parse';

export default class SocialAccount extends Parse.Object {
	constructor() {
		super('SocialAccount');
	}
}

export const getSocialAccountQuery = () => new Parse.Query(SocialAccount);
