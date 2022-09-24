import React from 'react'
import './SideBar.css'
import SideBarRow from  './../SideBarRow/SideBarRow'
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';


function SideBar (){
    return (
        <div className='sidebar'>
            <SideBarRow selected Icon={HomeIcon} title='Home'/>
            <SideBarRow Icon={WhatshotIcon} title='Trending'/>
            <SideBarRow Icon={SubscriptionsIcon} title='Subscription' />
            <SideBarRow Icon={VideoLibraryIcon} title='Library'/>
            <SideBarRow Icon={HistoryIcon} title='History'/>
            <SideBarRow Icon={OndemandVideoIcon} title='Your videos' />
            <SideBarRow Icon={WatchLaterIcon} title='Watch Later'/>
            <SideBarRow Icon={ThumbUpIcon} title='Liked Videos'/>
        </div>
    )
}

export default SideBar