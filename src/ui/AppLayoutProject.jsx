import { Outlet } from 'react-router-dom';
import styles from '../styles/AppLayout.module.css';
import Header from './Header';
import SideBar from './SideBar';
import CommunityProfile from './CommunityProfile';
import ProfileHeader from './ProfileHeader';
import SocialPost from './SocialPost';


function AppLayoutProject() {
	return (
		<div>
			<Header />
			<main className={styles.container}>
			<ProfileHeader/>
				<SideBar />
				<CommunityProfile/>
				<SocialPost
					title="My Projects"
					content="Optimizing Time-Slotted Deliveries for Post Offices and Courier Companies Managing time-window-based deliveries has always been a challenge for post offices and courier companies"
					username="praneelchetty"
					avatar="https://i.pinimg.com/474x/74/9d/48/749d48da0ae85583aee308f6947d5179.jpg"
					postId="project-post-1"
				/>
				<Outlet />
			</main>
		</div>
	);
}

export default AppLayoutProject;
