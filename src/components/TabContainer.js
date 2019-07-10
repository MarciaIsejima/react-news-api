import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import CountryNews from './CountryNews';
import SearchResults from './SearchResults';




function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//     width: '100%',
//     backgroundColor: theme.palette.background.paper,
//   },
// }));


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CenteredTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(2);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
				<Tabs
					value={value}
					onChange={handleChange}
					indicatorColor="primary"
					textColor="primary"
					centered
				>
						<Tab label="Canada" />
						<Tab label="Brazil" />
						<Tab id="searchTab" label="Search Results" />
						<Tab label="Great Britain" />
						<Tab label="France" />
				</Tabs>
			</AppBar>
			{value === 0 && <TabContainer><CountryNews countryId="ca"/></TabContainer>}
      {value === 1 && <TabContainer><CountryNews countryId="br"/></TabContainer>}
      {value === 2 && <TabContainer><SearchResults newsList={props.newsList}/></TabContainer>}
      {value === 3 && <TabContainer><CountryNews countryId="gb"/></TabContainer>}
      {value === 4 && <TabContainer><CountryNews countryId="fr"/></TabContainer>}
    </div>
  );
}

// export default function ScrollableTabsButtonAuto(props) {
//   const classes = useStyles();
//   const [value, setValue] = React.useState(2);

//   function handleChange(event, newValue) {
//     setValue(newValue);
//   }

//   return (
//     <div className={classes.root}>
//       <AppBar position="static" color="default">
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           indicatorColor="primary"
//           textColor="primary"
//           variant="scrollable"
//           scrollButtons="auto"
//         >
//           <Tab label="Canada" />
//           <Tab label="Brazil" />
//           <Tab id="searchTab" label="Search Results" />
//           <Tab label="Great Britain" />
//           <Tab label="France" />
//         </Tabs>
//       </AppBar>
//       {value === 0 && <TabContainer><CountryNews countryId="ca"/></TabContainer>}
//       {value === 1 && <TabContainer><CountryNews countryId="br"/></TabContainer>}
//       {value === 2 && <TabContainer><SearchResults newsList={props.newsList}/></TabContainer>}
//       {value === 3 && <TabContainer><CountryNews countryId="gb"/></TabContainer>}
//       {value === 4 && <TabContainer><CountryNews countryId="fr"/></TabContainer>}
//     </div>
//   );
// }