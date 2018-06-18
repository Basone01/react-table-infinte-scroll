import { App, Box, Split } from 'grommet';
import React from 'react';
import AppSidebar from './components/appSidebar';
// import { hot } from 'react-hot-loader';
import SocialAccountTable from './components/SocialAccountTable';
import { Switch, Route } from 'react-router-dom';
const Main = (props) => (
	<App centered={false}>
		<Split flex="right">
			<AppSidebar />
			<Box full="vertical">
				<Box flex="grow">
					<Switch>
						<Route path="/" component={SocialAccountTable} />
					</Switch>
				</Box>
			</Box>
		</Split>
	</App>
);

// export default hot(module)(Main);
export default Main;
