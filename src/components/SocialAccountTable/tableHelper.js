import moment from 'moment';
import React from 'react';

export const formatSocialAccountData = (account) => {
	return {
		...account.attributes,
		id: account.id
	};
};
export const columns = [
	{
		Header: 'ProfilePicture',
		accessor: 'profilePicture',
		Cell: (props) => (
			<img
				src={props.value}
				alt="none"
				style={{
					borderRadius: '50%',
					width: 64,
					height: 64,
					objectFit: 'cover',
					objectPosition: 'center'
				}}
			/>
		),
		style: {
			textAlign: 'center'
		}
	},
	{
		Header: 'Username',
		accessor: 'username',
		width:200
	},
	{
		Header: 'Follower',
		accessor: 'follower',
		style: {
			textAlign: 'end'
		}
	},
	{
		id: 'commentAvg', //require when accessor is not string
		Header: 'CommentAvg',
		accessor: (acc) => acc.commentAvg.toFixed(2),
		style: {
			textAlign: 'end'
		}
	},
	{
		id: 'likeAvg',
		Header: 'LikeAvg',
		accessor: (acc) => acc.likeAvg.toFixed(2),
		style: {
			textAlign: 'end'
		}
	},
	{
		Header: 'Following',
		accessor: 'following',
		style: {
			textAlign: 'end'
		}
	},
	{
		Header: 'SocialType',
		accessor: 'socialType',
		style: {
			textAlign: 'end'
		}
	},
	{
		id: 'point',
		Header: 'Point',
		accessor: (acc) => acc.point.toFixed(2),
		style: {
			textAlign: 'end'
		}
	},
	{
		id: 'estimatedPoint',
		Header: 'EstimatedPoint',
		accessor: (acc) => acc.estimatedPoint.toFixed(2),
		style: {
			textAlign: 'end'
		},
		width: 160
	},
	{
		id: 'maxPoint',
		Header: 'MaxPoint',
		accessor: (acc) => acc.maxPoint.toFixed(2),
		style: {
			textAlign: 'end'
		}
	},
	{
		id: 'influencerProfile',
		Header: 'InfluencerProfile',
		accessor: (acc) => acc.influencerProfile.objectId,
		width: 200,
		style: {
			textAlign: 'center'
		}
	},
	{
		Header: 'SocialAccountId',
		accessor: 'socialAccountId',
		width: 200,
		style: {
			textAlign: 'center'
		}
	},
	{
		id: 'categories',
		Header: 'Categories',
		accessor: (acc) => acc.categories.join(','),
		width: 200,
		style: {
			textAlign: 'center'
		}
	},
	{
		id: 'createdAt',
		Header: 'createdAt',
		accessor: (acc) => moment(acc.createdAt).format('DD/MM/YYYY-h:mm'),
		style: {
			textAlign: 'center'
		},
		width: 200
	},
	{
		id: 'updatedAt',
		Header: 'UpdatedAt',
		accessor: (acc) => moment(acc.updatedAt).format('DD/MM/YYYY-h:mm'),
		style: {
			textAlign: 'center'
		},
		width: 200
	},
	{
		Header: 'ID',
		accessor: 'id',
		width: 200,
		style: {
			textAlign: 'center'
		}
	}
];

export const data = [
	{
		username: 'WIRI.FAH',
		estimatedPoint: 0,
		point: 0,
		maxPoint: 72,
		influencerProfile: {
			telephoneNumber: '0991235061',
			updated: true,
			point: 500,
			gender: 'female',
			inviteCode: 'wiriya1',
			welcomeCode: 'WELCOMEBUDDY',
			user: {
				__type: 'Pointer',
				className: '_User',
				objectId: 'tFKXEMmfXt'
			},
			shortName: 'wiriya',
			lineId: 'fahwiriya',
			email: 'wiriya.au@gmail.com',
			createdAt: '2018-06-13T04:36:11.424Z',
			updatedAt: '2018-06-13T04:36:11.424Z',
			objectId: 'jYEvBb9AkR'
		},
		socialType: 1,
		likeAvg: 0,
		follower: 72,
		commentAvg: 0,
		socialAccountId: '6947012187',
		following: 0,
		profilePicture:
			'https://scontent-sit4-1.cdninstagram.com/vp/df1945049b247a74c4b3074d4bfdf743/5B08796C/t51.2885-19/s150x150/26871950_356436471426533_1158432329899704320_n.jpg',
		categories: [
			1000,
			2000,
			3000,
			4000
		],
		createdAt: '2018-06-13T04:32:15.838Z',
		updatedAt: '2018-06-13T04:32:15.838Z',
		id: '4cVECxw4Yt'
	},
	{
		username: 'nw___tk',
		estimatedPoint: 701,
		point: 0,
		maxPoint: 798,
		influencerProfile: {
			telephoneNumber: '0959834933',
			updated: true,
			point: 500,
			gender: 'female',
			inviteCode: 'namwan1',
			welcomeCode: 'Welcomebuddy',
			user: {
				__type: 'Pointer',
				className: '_User',
				objectId: 'ae3JKLvwsp'
			},
			shortName: 'namwan',
			lineId: 'Namwan_tk',
			email: 'thanyapak.1999@gmail.com',
			createdAt: '2018-06-13T04:36:11.193Z',
			updatedAt: '2018-06-13T04:36:11.193Z',
			objectId: 'DFxOJIQuAi'
		},
		socialType: 1,
		likeAvg: 140.2,
		lastUpdateDate: '2018-06-05T02:48:14.043Z',
		follower: 798,
		commentAvg: 0.4,
		photoLikeAvg: 140.2,
		socialAccountId: '1511965920',
		following: 114,
		profilePicture:
			'https://instagram.fbkk5-5.fna.fbcdn.net/vp/401d1c8cece274fb4673e3d3f3dfb927/5BC03EAA/t51.2885-19/s150x150/24327449_525262194506178_6475022210741305344_n.jpg?_nc_eui2=AeFCqj7qAIPqRYfCRxwzOENq5k5T2iyXSzwGzvsZPD70HgBqEuD0Hcf0Z67MQWz5dWzCob9GhEj9psRiOpm9CPTl',
		categories: [
			1000,
			2000,
			3000,
			4000
		],
		createdAt: '2018-06-13T04:32:15.999Z',
		updatedAt: '2018-06-13T04:32:15.999Z',
		id: 'gEfaRjxYpC'
	},
	{
		username: 'phaaeyyblog_',
		estimatedPoint: 144.72222222222223,
		point: 40,
		maxPoint: 239,
		influencerProfile: {
			telephoneNumber: '0900295551',
			updated: true,
			point: 540,
			gender: 'female',
			inviteCode: 'aly1',
			birthDate: {
				__type: 'Date',
				iso: '1991-07-30T00:00:00.000Z'
			},
			welcomeCode: 'WELCOMEBUDDY',
			user: {
				__type: 'Pointer',
				className: '_User',
				objectId: 'exDzqQJjxp'
			},
			shortName: 'aly',
			lineId: 'phaaey',
			email: 'pphaaey@gmail.com',
			createdAt: '2018-06-13T04:36:11.444Z',
			updatedAt: '2018-06-13T04:36:11.444Z',
			objectId: '56EX1BVG2a'
		},
		socialType: 1,
		likeAvg: 28.944444444444443,
		lastUpdateDate: '2018-06-10T01:54:32.197Z',
		follower: 239,
		commentAvg: 0.4444444444444444,
		photoLikeAvg: 28.944444444444443,
		socialAccountId: '5491062453',
		following: 77,
		profilePicture:
			'https://instagram.fbkk2-4.fna.fbcdn.net/vp/d9867bc700f72a21544197ba783e1a1f/5B9E59F6/t51.2885-19/s150x150/33640314_213829295898369_34171820663898112_n.jpg?_nc_eui2=AeGjmBSTHNnkrPKOsG-9yxa5gDWC9UkQ9lTD3yVcMQaSX4rC3-zOqrMO1ThWg1v6_KpOlD0Ad1hNK4Rb0QafrPCH',
		categories: [
			1000,
			4000
		],
		estimatePhotoReach: 144.72222222222223,
		createdAt: '2018-06-13T04:32:15.987Z',
		updatedAt: '2018-06-13T04:32:15.987Z',
		id: 'iIkx1ApWry'
	},
	{
		username: 'chere_darling',
		estimatedPoint: 127.22222222222221,
		point: 0,
		maxPoint: 459,
		influencerProfile: {
			telephoneNumber: '0815544419',
			updated: true,
			point: 0,
			gender: 'female',
			inviteCode: 'chere1',
			user: {
				__type: 'Pointer',
				className: '_User',
				objectId: 'Pwm3kJNR3Q'
			},
			shortName: 'chere',
			lineId: 'chere_darling',
			email: 'chere_darling@hotmail.com',
			createdAt: '2018-06-13T04:36:11.114Z',
			updatedAt: '2018-06-13T04:36:11.114Z',
			objectId: 'nvG0S5s9xg'
		},
		socialType: 1,
		likeAvg: 25.444444444444443,
		lastUpdateDate: '2018-04-23T13:49:25.238Z',
		follower: 459,
		commentAvg: 0.5,
		photoLikeAvg: 25.444444444444443,
		socialAccountId: '18950473',
		following: 230,
		profilePicture:
			'https://instagram.fbkk5-3.fna.fbcdn.net/vp/5ba538ce23a600a532e657f35a942ea2/5B998425/t51.2885-19/s150x150/25038608_206759006551213_4431452521919152128_n.jpg',
		categories: [],
		createdAt: '2018-06-13T04:32:15.854Z',
		updatedAt: '2018-06-13T04:32:15.854Z',
		id: 'jMHP4noL0Y'
	},
	{
		username: 'bfairfern',
		estimatedPoint: 486.11111111111114,
		point: 905,
		maxPoint: 997,
		influencerProfile: {
			telephoneNumber: '0845405133',
			updated: true,
			point: 3940,
			gender: 'female',
			inviteCode: 'baifern1',
			birthDate: {
				__type: 'Date',
				iso: '1997-10-08T00:00:00.000Z'
			},
			welcomeCode: 'WELCOMEBUDDY',
			user: {
				__type: 'Pointer',
				className: '_User',
				objectId: '1Ocb6cg88P'
			},
			shortName: 'baifern',
			lineId: 'baifern.69',
			email: 'frun-happy@hotmail.com',
			createdAt: '2018-06-13T04:36:11.209Z',
			updatedAt: '2018-06-13T04:36:11.209Z',
			objectId: 'Uu0A7xZjBE'
		},
		socialType: 1,
		likeAvg: 97.22222222222223,
		lastUpdateDate: '2018-03-02T10:57:45.472Z',
		follower: 997,
		commentAvg: 4.833333333333333,
		socialAccountId: '2960630357',
		following: 284,
		profilePicture:
			'https://instagram.fbkk5-2.fna.fbcdn.net/vp/bc716dd339049373c9543a9c8682b3a5/5B455671/t51.2885-19/s150x150/27893437_1975639602703512_675440382468685824_n.jpg',
		categories: [
			1000,
			2000,
			3000,
			4000
		],
		createdAt: '2018-06-13T04:32:16.007Z',
		updatedAt: '2018-06-13T04:32:16.007Z',
		id: 'VyZbGytgfR'
	},
	{
		username: 'aum_nutnicj',
		estimatedPoint: 288.05555555555554,
		point: 0,
		maxPoint: 517,
		influencerProfile: {
			telephoneNumber: '0869465600',
			updated: true,
			point: 500,
			gender: 'female',
			inviteCode: 'nuttanichar1',
			welcomeCode: 'WELCOMEBUDDY',
			user: {
				__type: 'Pointer',
				className: '_User',
				objectId: 'xN2a8sBMXC'
			},
			shortName: 'nuttanichar',
			lineId: '0869465600aum',
			email: 'nichar45@hotmail.com',
			createdAt: '2018-06-13T04:36:11.193Z',
			updatedAt: '2018-06-13T04:36:11.193Z',
			objectId: 'qnpDMr1Pqb'
		},
		socialType: 1,
		likeAvg: 57.611111111111114,
		lastUpdateDate: '2018-06-10T01:54:32.197Z',
		follower: 517,
		commentAvg: 4.055555555555555,
		photoLikeAvg: 57.611111111111114,
		socialAccountId: '1701530935',
		following: 1258,
		profilePicture:
			'https://instagram.fbkk2-4.fna.fbcdn.net/vp/93d19cedd0e087871fe212864940e2cc/5BA9F9CB/t51.2885-19/s150x150/30604109_219867955263189_6873202624389185536_n.jpg?_nc_eui2=AeGed0fhWDZl_URuR9LlK0hp7_cCxlsw4l74Ksd93Gy632BgNuxqFk6Ji8oMyJ6fpEoHKnIevWx7C_IvPMzPB0rh',
		categories: [
			1000,
			2000,
			3000,
			4000
		],
		estimatePhotoReach: 288.05555555555554,
		createdAt: '2018-06-13T04:32:15.987Z',
		updatedAt: '2018-06-13T04:32:15.987Z',
		id: '290gtfcMDB'
	},
	{
		username: 'ployrinrapat',
		estimatedPoint: 189.72222222222223,
		point: 0,
		maxPoint: 351,
		influencerProfile: {
			telephoneNumber: '0873406433',
			updated: true,
			point: 500,
			gender: 'female',
			inviteCode: 'rinrapat1',
			welcomeCode: 'WELCOMEBUDDY',
			user: {
				__type: 'Pointer',
				className: '_User',
				objectId: 'P3u718Fg2x'
			},
			shortName: 'rinrapat',
			lineId: 'Ployrinn',
			email: 'rinrapat_ploy@hotmail.com',
			createdAt: '2018-06-13T04:36:11.443Z',
			updatedAt: '2018-06-13T04:36:11.443Z',
			objectId: '7EWMpXJdDa'
		},
		socialType: 1,
		likeAvg: 37.94444444444444,
		lastUpdateDate: '2018-06-10T01:54:32.197Z',
		follower: 351,
		commentAvg: 2.5,
		photoLikeAvg: 37.94444444444444,
		socialAccountId: '16073811',
		following: 583,
		profilePicture:
			'https://instagram.fbkk2-4.fna.fbcdn.net/vp/7376561bb344e4970eb32ad59497b770/5BAF13D1/t51.2885-19/s150x150/32597902_925754354272125_5672302022938853376_n.jpg?_nc_eui2=AeHRrCKmSkxf68MbArA5JwyEBbyOumlUH_IB8ppDx4x0Bw6hB95ltih3Q8mK13BSbuyjTweQeMTpIj0obcUJpdyI',
		categories: [
			1000
		],
		estimatePhotoReach: 189.72222222222223,
		createdAt: '2018-06-13T04:32:15.999Z',
		updatedAt: '2018-06-13T04:32:15.999Z',
		id: '6Wp4hUcaam'
	},
	{
		username: 'แหลกไปเรื่อย',
		likeAvg: 3.88,
		likeRatio: 0.047901234567901234,
		estimatedPoint: 63.44,
		point: 0,
		maxPoint: 81,
		influencerProfile: {
			telephoneNumber: '0804719900',
			updated: true,
			point: 500,
			gender: 'female',
			inviteCode: 'kuntaya1',
			welcomeCode: 'Welcomebuddy',
			user: {
				__type: 'Pointer',
				className: '_User',
				objectId: 'qRX2Etk7yB'
			},
			shortName: 'kuntaya',
			lineId: 'Oilkc',
			email: 'kuntaya.chomp@gmail.com',
			createdAt: '2018-06-13T04:36:11.114Z',
			updatedAt: '2018-06-13T04:36:11.114Z',
			objectId: 'lx7pq6nfaC'
		},
		socialType: 3,
		profilePicture: 'https://graph.facebook.com/1838171076512178/picture?type=large&w‌​idth=720&height=720',
		pageLike: 81,
		lastUpdateDate: '2018-04-07T02:39:37.083Z',
		follower: 71,
		commentAvg: 0.92,
		socialAccountId: '1838171076512178',
		accessToken:
			'EAAB5ij8RTdUBAIZC4ZBOmUTCerACqCDvPjrGh61ObnPCtBBblkWxJZAxr92HPMFVpnZCEkgDwtWF8oOcVR7pdZCZAE53Kgt5IxpoPXkVPZBZBTqCIiyUHRy0eYSZAc2wV8Ir9lwfSy7fqpiASsgQLEIPwDWEkt88w0QEZCS3PjyONDOwZDZD',
		categories: [
			1000
		],
		createdAt: '2018-06-13T04:32:16.008Z',
		updatedAt: '2018-06-13T04:32:16.008Z',
		id: '4enQ3cWYxP'
	},
	{
		username: 'Hato & Hana The meow',
		likeAvg: 3.92,
		likeRatio: 0.1568,
		estimatedPoint: 233.24,
		point: 0,
		maxPoint: 25,
		influencerProfile: {
			telephoneNumber: '0908862197',
			updated: true,
			point: 500,
			gender: 'female',
			inviteCode: 'kamonnet1',
			welcomeCode: 'WELCOMEBUDDY',
			user: {
				__type: 'Pointer',
				className: '_User',
				objectId: 'McQmDienjO'
			},
			shortName: 'kamonnet',
			lineId: 'I-whale',
			email: 'crazy_earn@hotmail.com',
			createdAt: '2018-06-13T04:36:11.066Z',
			updatedAt: '2018-06-13T04:36:11.066Z',
			objectId: 'UidO2Cjwkh'
		},
		socialType: 3,
		profilePicture: 'https://graph.facebook.com/1695891133796546/picture?type=large&w‌​idth=720&height=720',
		pageLike: 25,
		lastUpdateDate: '2018-04-07T02:39:37.083Z',
		follower: 25,
		commentAvg: 0.36,
		socialAccountId: '1695891133796546',
		accessToken:
			'EAAB5ij8RTdUBAGNoyaxJTbo6s0EogGMgiz5w8Qqfd9UJtLxF4LyFqK9AaYcNiZBtKEwAy4XBqgZAMmSsNUj450OtueOXjOcpPwt3HTGshTnvj54CUWPBGbsKa9gNrF7z6s6S2T5FZBMREZCiaz6UNXxZCawO09zOlogCXGJmWLAZDZD',
		categories: [
			1000,
			3000
		],
		createdAt: '2018-06-13T04:32:15.987Z',
		updatedAt: '2018-06-13T04:32:15.987Z',
		id: '8v8DveR3Mo'
	},
	{
		username: 'ซักรีดลุงอุ้ย',
		likeAvg: 0,
		likeRatio: 0,
		estimatedPoint: 0,
		point: 0,
		maxPoint: 0,
		influencerProfile: {
			telephoneNumber: '0877171619',
			bankBranch: 'แฟชันไอส์แลนด์',
			updated: true,
			shippingPostcode: '10510',
			point: 644,
			shortName: 'chonpapat',
			gender: 'male',
			inviteCode: 'chonpapat1',
			bankName: 'กสิกรไทย',
			bankAccountName: 'ชนปภัส อภิรมย์เสมอ',
			bankAccountId: '7202201632',
			idCardNumber: '1101401757933',
			user: {
				__type: 'Pointer',
				className: '_User',
				objectId: 'HytJSbQj8p'
			},
			birthDate: {
				__type: 'Date',
				iso: '1989-08-04T00:00:00.000Z'
			},
			shippingProvince: 'กรุงเทพ',
			lineId: 'chonpapat.a',
			shippingAddress: '1 ซ.รามอินทรา115 แยก5 ถ.รามอินทรา มีนบุรี ',
			email: 'chonpapat.a@gmail.com',
			createdAt: '2018-06-13T04:36:11.329Z',
			updatedAt: '2018-06-13T04:36:11.329Z',
			objectId: 'z505GGcyTz'
		},
		socialType: 3,
		profilePicture: 'https://graph.facebook.com/1158376710898167/picture?type=large&w‌​idth=720&height=720',
		pageLike: 0,
		lastUpdateDate: '2018-04-07T02:39:37.083Z',
		follower: 0,
		commentAvg: 0,
		socialAccountId: '1158376710898167',
		accessToken:
			'EAAB5ij8RTdUBAN400z4MmiwIl4ELA8DHRA0VBeI2RsZB4nZBZByUETMD7vzmHcaugZCqVZCZC37o63i2kSLonr33A4RvonHvwJYfUuZA2P4v0XAz9DCdGarqDNKxD57bC9Bwy8ZCdtmzmd9vcFs24O8y5oU7VW07lwRh4tkg2CleAQZDZD',
		categories: [],
		createdAt: '2018-06-13T04:32:16.008Z',
		updatedAt: '2018-06-13T04:32:16.008Z',
		id: 'Lv9uceFl7U'
	}
];
