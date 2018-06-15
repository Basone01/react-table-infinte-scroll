import React from 'react';

import { Anchor, Box, Button, Footer, Header, Menu, Sidebar, Title, UserIcon } from 'grommet';
const AppSidebar = () => {
	return (
		<Sidebar colorIndex="neutral-1" size="small">
			<Header pad="medium" justify="between">
				<Title>Title</Title>
			</Header>
			<Box flex="grow" justify="start">
				<Menu primary={true}>
					<Anchor href="#" className="active">
						First
					</Anchor>
					<Anchor href="#">Second</Anchor>
					<Anchor href="#">Third</Anchor>
				</Menu>
			</Box>
			<Footer pad="medium">
				<Button icon={<UserIcon />} />
			</Footer>
		</Sidebar>
	);
};

export default AppSidebar;
