import React from 'react';
import { profileLogo, settingsLogo} from '../assets/logos';

export default function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebar__profile-logo">{profileLogo}</div>
			<div className="sidebar__settings-logo">{settingsLogo}</div>
		</div>
	);
};
