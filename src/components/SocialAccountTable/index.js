import React, { Component } from 'react';
import ReactTable, { ReactTableDefaults } from 'react-table';
import 'react-table/react-table.css';
import { getSocialAccountQuery } from '../../parse/';
import './index.css';
import { columns, formatSocialAccountData,data } from './tableHelper';
export default class SocialAccountTable extends Component {
	state = {
		SocialAccounts: []
	};
	async componentDidMount() {
		// const SocialAccounts = await getSocialAccountQuery().limit(25).include('influencerProfile').find();
		// console.log(SocialAccounts);
		// this.setState({ SocialAccounts });
	}

	render() {
		// const data = this.state.SocialAccounts;
		return (
			<ReactTable
				data={data}
				// resolveData={(data) => data.map(formatSocialAccountData)}
				columns={columns}
				column={{
					...ReactTableDefaults.column,
					minWidth: 120,
					headerStyle: {
						padding: '16px 0'
					}
				}}
				defaultPageSize={20}
				style={{
					height: '96vh', //fixed for scrolling
					border: 'none'
				}}
				className="-striped -highlight"
			/>
		);
	}
}
