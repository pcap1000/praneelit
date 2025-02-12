import { Outlet } from 'react-router-dom';
import styles from '../styles/AppLayout.module.css';
import Header from './Header';
import SideBar from './SideBar';
import CommunityProfile from './CommunityProfile';
import ProfileHeader from './ProfileHeader';
import SocialPost from './SocialPost';


function AppLayout() {
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
				<SocialPost
					title="My Projects"
					content="Optimizing Time-Slotted Deliveries for Post Offices and Courier Companies Managing time-window-based deliveries has always been a challenge for post offices and courier companies"
					username="praneelchetty"
					avatar="https://i.pinimg.com/474x/74/9d/48/749d48da0ae85583aee308f6947d5179.jpg"
					postId="project-post-1"
				/>
				{/* <EmptyProfileHeader /> */}
				{/* <ProfileHeader/> */}
				<Outlet />
			</main>
		</div>
	);
}

export default AppLayout;
