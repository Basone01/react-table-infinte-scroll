import moment from 'moment';
import React from 'react';

export const formatSocialAccountData = (account) => {
	return {
		...account.attributes,
		id: account.id
	};
};


const formatDate = (date) => moment(date).format('DD/MM/YYYY-h:mm');
const formatNumber = (number) => Number(number).toFixed(2);
const numberSortMethod = (a, b, desc) => {
	if (typeof a === 'string') {
		a = Number(a);
	}
	if (typeof b === 'string') {
		b = Number(b);
	}
	if (a > b) {
		return 1;
	}
	if (a < b) {
		return -1;
	}
	return 0;
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
		width: 160
	},
	{
		id: 'username',
		Header: 'Username',
		accessor: (acc) => acc.username,
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
		accessor: (acc) => formatNumber(acc.commentAvg),
		style: {
			justifyContent: 'flex-end'
		},
		sortMethod:numberSortMethod	
	},
	{
		id: 'likeAvg',
		Header: 'LikeAvg',
		accessor: (acc) => formatNumber(acc.likeAvg),
		style: {
			justifyContent: 'flex-end'
		},
		sortMethod:numberSortMethod	
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
		accessor: 'socialType'
	},
	{
		id: 'point',
		Header: 'Point',
		accessor: (acc) => formatNumber(acc.point),
		style: {
			justifyContent: 'flex-end'
		},
		sortMethod:numberSortMethod	
	},
	{
		id: 'estimatedPoint',
		Header: 'EstimatedPoint',
		accessor: (acc) => formatNumber(acc.estimatedPoint),
		style: {
			justifyContent: 'flex-end'
		},
		width: 160,
		sortMethod:numberSortMethod	
	},
	{
		id: 'maxPoint',
		Header: 'MaxPoint',
		accessor: (acc) => formatNumber(acc.maxPoint),
		style: {
			justifyContent: 'flex-end'
		},
		sortMethod:numberSortMethod	
	},
	{
		id: 'influencerProfile',
		Header: 'InfluencerProfile',
		accessor: (acc) => acc.influencerProfile.id,
		width: 200
	},
	{
		Header: 'SocialAccountId',
		accessor: 'socialAccountId',
		width: 200
	},
	{
		id: 'categories',
		Header: 'Categories',
		accessor: (acc) => acc.categories.join(','),
		width: 200
	},
	{
		Header: 'ID',
		accessor: 'id',
		width: 200
	},
	{
		id: 'createdAt',
		Header: 'createdAt',
		accessor: (acc) => formatDate(acc.createdAt),
		width: 200
	},
	{
		id: 'updatedAt',
		Header: 'UpdatedAt',
		accessor: (acc) => formatDate(acc.updatedAt),
		width: 200
	}
];

