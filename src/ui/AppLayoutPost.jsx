import { Outlet } from 'react-router-dom';
import styles from '../styles/AppLayout.module.css';
import Header from './Header';
import SideBar from './SideBar';
import CommunityProfile from './CommunityProfile';
import Posts from './Posts'; 

function AppLayout() {
	return (
		<div>
			<Header />
			<main className={styles.container}>
				<SideBar />
				<CommunityProfile/>
                
				<Outlet />
			</main>
		</div>
	);
}

export default AppLayout;
