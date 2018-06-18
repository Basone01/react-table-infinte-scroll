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
		width: 160,
		style: {
			textAlign: 'center'
		}
	},
	{
		id: 'username',
		Header: 'Username',
		accessor: (acc) => <span style={{ wordBreak: 'break-all' }}>{acc.username}</span>,
		width: 200,
		style: {
			fontWeight: 'bold'
		}
	},
	{
		Header: 'Follower',
		accessor: 'follower',
		style: {
			justifyContent: 'flex-end'
		}
	},
	{
		id: 'commentAvg', //require when accessor is not string
		Header: 'CommentAvg',
		accessor: (acc) => Number(acc.commentAvg).toFixed(2),
		style: {
			justifyContent: 'flex-end'
		}
	},
	{
		id: 'likeAvg',
		Header: 'LikeAvg',
		accessor: (acc) => Number(acc.likeAvg).toFixed(2),
		style: {
			justifyContent: 'flex-end'
		}
	},
	{
		Header: 'Following',
		accessor: 'following',
		style: {
			justifyContent: 'flex-end'
		}
	},
	{
		Header: 'SocialType',
		accessor: 'socialType',
		style: {
			textAlign: 'center'
		}
	},
	{
		id: 'point',
		Header: 'Point',
		accessor: (acc) => Number(acc.point.toFixed(2)),
		style: {
			justifyContent: 'flex-end'
		}
	},
	{
		id: 'estimatedPoint',
		Header: 'EstimatedPoint',
		accessor: (acc) => Number(acc.estimatedPoint).toFixed(2),
		style: {
			justifyContent: 'flex-end'
		},
		width: 160
	},
	{
		id: 'maxPoint',
		Header: 'MaxPoint',
		accessor: (acc) => Number(acc.maxPoint).toFixed(2),
		style: {
			justifyContent: 'flex-end'
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
		Header: 'ID',
		accessor: 'id',
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
	}
];
