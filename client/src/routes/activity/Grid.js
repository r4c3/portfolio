import { useState } from 'react';
import axios from 'axios';

import TextStyles from "../../common/TextStyles"
import PullRequest from './cards/PullRequest';
import StackOverflowAnswer from './cards/StackOverflowAnswer';
import Tweet from './cards/Tweet';

export default function Grid() {
  // axios.get('https://api.stackexchange.com/2.3/users/20668816/answers?order=desc&sort=creation&site=stackoverflow&filter=!.f9fwfe3Gt00-e)jxd2e')
  // .then(function (response) {
  //   console.log("stack overflow: ", response.data.items);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });

  // axios.get('https://api.github.com/users/r4c3/events/public')
  // .then(function (response) {
  //   console.log("github:", response.data);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });

  // axios.get('https://api.twitter.com/2/users/1595190378122059777/tweets?tweet.fields=attachments', {
  //   headers: {
  //     Authorization: `Bearer AAAAAAAAAAAAAAAAAAAAAKKPkgEAAAAAkcCTaRYt9emYSc4EKVU%2FqAcqrck%3DABzHhwdjga3AUd5zgWhIbis0GfVHpVR6bmgpJKdYxiWoVivJPh`
  //   }
  // })
  // .then(function (response) {
  //   console.log("twitter:", response.data.data);
  // })
  // .catch(function (error) {
  //   console.log(error);
	// });

	const styles = {
		container: {
			position: 'relative',
			display: 'flex',
			gap: '2em',
			transition: 'all 0.3s ease',
			marginBottom: '8em'
		},
		column: {
			display: 'flex',
			flexDirection: 'column',
			gap: '2em',
			flex: 1
		},
		fader: {
			zIndex: 3,
			position: 'absolute',
			bottom: '10vh',
			display: "block",
			width: "100%",
   	 	height: "9em",
			background: "linear-gradient(transparent, var(--bk))",
			transition: 'all 0.3s ease',
			pointerEvents: 'none'
		}
	}

	return (<>
		<div style={styles.fader} />
		<div style={styles.container}>
			<div style={styles.column}>
				<Tweet text="this is hardcoded for now" date="6:39 PM · Dec 20, 2022" link="https://twitter.com/racewilliamscom/status/1605347222362914817"/>
				<Tweet text="a b c d e f g h i j k l m n o p q r s t u v w x y z 1 2 3 4 5 6 7 8 9 0 й ц у к е н г ш щ з х" date="6:39 PM · Dec 20, 2022" link="https://twitter.com/racewilliamscom/status/1605347222362914817"/>
				<StackOverflowAnswer title="Problem with tailwind css" link="https://stackoverflow.com/a/74659516/20668816" tags={["react", "javascript", "css", "mern-stack"]} timeAgo="3 hours"/>
				<PullRequest repo="r4c3/repo200" title="This is a pull request msg" link="https://github.com/eatcode-gt/eatcodeweb/pull/70"/>
				<PullRequest repo="r4c3/react-native" title="ed" link="https://github.com/eatcode-gt/eatcodeweb/pull/70"/>
				<StackOverflowAnswer title="How to use axios to fetch StackOverflow api user answers" link="https://stackoverflow.com/a/74659516/20668816" tags={["react", "javascript", "css", "mern-stack"]} timeAgo="3 hours"/>
				<StackOverflowAnswer title="нщгк ьщь" link="https://stackoverflow.com/a/74659516/20668816" tags={["react", "javascript", "css", "mern-stack"]} timeAgo="3 hours"/>
				<Tweet text="ideally this is a text string of one hundred and 40 characters. merry crihmih. living off borrowed time the clock ticks f" date="6:39 PM · Dec 20, 2022" link="https://twitter.com/racewilliamscom/status/1605347222362914817"/>
				<StackOverflowAnswer title="Very verbose long lengthy extra large title for no reason what is the charmax on these thingys thingamabobers" link="https://stackoverflow.com/a/74659516/20668816" tags={["react", "javascript", "css", "mern-stack"]} timeAgo="3 hours"/>
				<PullRequest repo="r4c3/repo200" title="Longer pr title that is annoying but ok" link="https://github.com/eatcode-gt/eatcodeweb/pull/70"/>
				<PullRequest repo="r4c3/react-native" title="ed" link="https://github.com/eatcode-gt/eatcodeweb/pull/70"/>
			</div>
			<div style={styles.column}>
				<PullRequest repo="r4c3/portfolio" title="Updated Russian page" link="https://github.com/eatcode-gt/eatcodeweb/pull/70"/>
				<StackOverflowAnswer title="нщгк ьщь" link="https://stackoverflow.com/a/74659516/20668816" tags={["react", "javascript", "css", "mern-stack"]} timeAgo="3 hours"/>
				<Tweet text="ideally this is a text string of one hundred and 40 characters. merry crihmih. living off borrowed time the clock ticks f" date="6:39 PM · Dec 20, 2022" link="https://twitter.com/racewilliamscom/status/1605347222362914817"/>
				<StackOverflowAnswer title="Very verbose long lengthy extra large title for no reason what is the charmax on these thingys thingamabobers" link="https://stackoverflow.com/a/74659516/20668816" tags={["react", "javascript", "css", "mern-stack"]} timeAgo="3 hours"/>
				<PullRequest repo="r4c3/repo200" title="Longer pr title that is annoying but ok" link="https://github.com/eatcode-gt/eatcodeweb/pull/70"/>
				<PullRequest repo="r4c3/react-native" title="ed" link="https://github.com/eatcode-gt/eatcodeweb/pull/70"/>
				<StackOverflowAnswer title="нщгк ьщь" link="https://stackoverflow.com/a/74659516/20668816" tags={["react", "javascript", "css", "mern-stack"]} timeAgo="3 hours"/>
				<Tweet text="ideally this is a text string of one hundred and 40 characters. merry crihmih. living off borrowed time the clock ticks f" date="6:39 PM · Dec 20, 2022" link="https://twitter.com/racewilliamscom/status/1605347222362914817"/>
				<StackOverflowAnswer title="Very verbose long lengthy extra large title for no reason what is the charmax on these thingys thingamabobers" link="https://stackoverflow.com/a/74659516/20668816" tags={["react", "javascript", "css", "mern-stack"]} timeAgo="3 hours"/>
				<PullRequest repo="r4c3/repo200" title="Longer pr title that is annoying but ok" link="https://github.com/eatcode-gt/eatcodeweb/pull/70"/>
				<PullRequest repo="r4c3/react-native" title="ed" link="https://github.com/eatcode-gt/eatcodeweb/pull/70"/>
			</div>
			<div style={styles.column}>
				<StackOverflowAnswer title="How to use axios to fetch StackOverflow api user answers" link="https://stackoverflow.com/a/74659516/20668816" tags={["react", "javascript", "css", "mern-stack"]} timeAgo="3 hours"/>
				<Tweet text="tweet example" date="6:39 PM · Dec 20, 2022" link="https://twitter.com/racewilliamscom/status/1605347222362914817"/>
				<StackOverflowAnswer title="How to use axios to fetch StackOverflow api user answers" link="https://stackoverflow.com/a/74659516/20668816" tags={["react", "javascript", "css", "mern-stack"]} timeAgo="3 hours"/>
				<StackOverflowAnswer title="Problem with tailwind css" link="https://stackoverflow.com/a/74659516/20668816" tags={["react", "javascript", "css", "mern-stack"]} timeAgo="3 hours"/>
				<PullRequest repo="r4c3/eatcodeweb" title="Added worker README" link="https://github.com/eatcode-gt/eatcodeweb/pull/70"/>
				<StackOverflowAnswer title="Problem with tailwind css" link="https://stackoverflow.com/a/74659516/20668816" tags={["react", "javascript", "css", "mern-stack"]} timeAgo="3 hours"/>
				<PullRequest repo="r4c3/eatcodeweb" title="Added worker README" link="https://github.com/eatcode-gt/eatcodeweb/pull/70"/>
				<StackOverflowAnswer title="нщгк ьщь" link="https://stackoverflow.com/a/74659516/20668816" tags={["react", "javascript", "css", "mern-stack"]} timeAgo="3 hours"/>
				<Tweet text="ideally this is a text string of one hundred and 40 characters. merry crihmih. living off borrowed time the clock ticks f" date="6:39 PM · Dec 20, 2022" link="https://twitter.com/racewilliamscom/status/1605347222362914817"/>
				<StackOverflowAnswer title="Very verbose long lengthy extra large title for no reason what is the charmax on these thingys thingamabobers" link="https://stackoverflow.com/a/74659516/20668816" tags={["react", "javascript", "css", "mern-stack"]} timeAgo="3 hours"/>
			</div>
		</div>
	</>)
}