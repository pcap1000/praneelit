import { Outlet } from 'react-router-dom';
import styles from '../styles/AppLayout.module.css';
import Header from './Header';
import SideBar from './SideBar';
import CommunityProfile from './CommunityProfile';
import ProfileHeader from './ProfileHeader';
import SocialPost from './SocialPost';


function AppLayoutBlog() {
	return (
		<div>
			<Header />
			<main className={styles.container}>
			<ProfileHeader/>
				<SideBar />
				<CommunityProfile/>
				<Outlet />
			</main>
		</div>
	);
}

export default AppLayoutBlog;
