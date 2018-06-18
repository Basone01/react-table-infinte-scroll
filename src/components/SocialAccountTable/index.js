import React, { Component } from 'react';
import ReactTable, { ReactTableDefaults } from 'react-table';
import 'react-table/react-table.css';
import { getSocialAccountQuery } from '../../parse/';
import './index.css';
import { columns, formatSocialAccountData } from './tableHelper';
import TableBody from './tableBody';
export default class SocialAccountTable extends Component {
	state = {
		SocialAccounts: [],
		loading: false,
		filter:{
			
		}
	};

	async componentDidMount() {
		const SocialAccounts = await getSocialAccountQuery().limit(20).include('influencerProfile').find();
		this.setState({
			SocialAccounts: SocialAccounts
		});
	}

	async fetchData(state, instance) {
		const { loading, SocialAccounts } = this.state;
		console.log('on Fetch');
		if (loading) {
			return;
		}
		this.setState({ loading: true });
		try {
			const data = await getSocialAccountQuery()
				.skip(SocialAccounts.length)
				.limit(20)
				.include('influencerProfile')
				.find();
			if (data.length > 0) {
				this.setState({
					SocialAccounts: [
						...SocialAccounts,
						...data
					]
				});
			}
		} catch (e) {
			console.log(e);
		}
		this.setState({ loading: false });
	}

	render() {
		const { SocialAccounts, loading } = this.state;
		return (
			<ReactTable
				data={SocialAccounts}
				resolveData={(data) => data.map(formatSocialAccountData)}
				columns={columns}
				TbodyComponent={TableBody}
				column={{
					...ReactTableDefaults.column,
					minWidth: 120,
					headerStyle: {
						padding: '16px 0',
						outline: 'none'
					},
					className: [
						'cell'
					]
				}}
				showPaginationBottom={false}
				style={{
					height: '96vh', //fixed for scrolling
					border: 'none'
				}}
				loading={loading}
				defaultPageSize={25}
				pageSize={SocialAccounts.length > 25 ? SocialAccounts.length + 5 : undefined}
				className="-striped -highlight"
				getTbodyProps={(state, rowInfo, column, instance) => {
					return {
						onScrollEnd: () => {
							console.log('BASE END');
							this.fetchData(state, instance);
						}
					};
				}}
			/>
		);
	}
}
