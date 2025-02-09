import { Outlet } from 'react-router-dom';
import styles from '../styles/AppLayout.module.css';
import Header from './Header';
import SideBar from './SideBar';
import CommunityProfile from './CommunityProfile';
import ProfileHeader from './ProfileHeader';
import SocialPost from './SocialPost';


function AppLayoutAbout() {
	return (
		<div>
			<Header />
			<main className={styles.container}>
				<ProfileHeader />
				<SideBar />
				<CommunityProfile />
				<SocialPost
					title="About Me"
					content="I’m from Bangalore, born and raised. Can’t say I love this place, but there are parts of it and the people here that I really do. The chaos, the food, the weirdly unpredictable weather—sometimes annoying, but it has its own charm."
					username="praneelchetty"
					avatar="https://i.redd.it/6mz5s8nskzna1.jpg"
					postId="about-post-1"

				/>
				{/* <EmptyProfileHeader /> */}
				{/* <ProfileHeader/> */}
				<Outlet />
			</main>
		</div>
	);
}

export default AppLayoutAbout;
