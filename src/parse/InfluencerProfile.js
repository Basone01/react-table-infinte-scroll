import Parse from 'parse';
export default class InfluencerProfile extends Parse.Object {
	constructor() {
		super('InfluencerProfile');
	}
}

export const InfluencerProfileQuery = new Parse.Query(InfluencerProfile);
