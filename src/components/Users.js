import React from 'react';
import User from './User';

export default function Users() {
    return(
        <div className="right">
            <User 
                src="https://cdn-images-1.medium.com/max/1600/1*F_ttuYWPAVBGSMyHlX9l9A.jpeg" 
                alt="man" 
                name="Larry_fank"/>
            <div className="users__block">
            <User 
                src="https://cdn-images-1.medium.com/max/1600/1*F_ttuYWPAVBGSMyHlX9l9A.jpeg" 
                alt="man" 
                name="Larry_fank"
                min/>
            <User 
                src="https://cdn-images-1.medium.com/max/1600/1*F_ttuYWPAVBGSMyHlX9l9A.jpeg" 
                alt="man" 
                name="Larry_fank"
                min/>
            <User 
                src="https://cdn-images-1.medium.com/max/1600/1*F_ttuYWPAVBGSMyHlX9l9A.jpeg" 
                alt="man" 
                name="Larry_fank"
                min/>
            <User 
                src="https://cdn-images-1.medium.com/max/1600/1*F_ttuYWPAVBGSMyHlX9l9A.jpeg" 
                alt="man" 
                name="Larry_fank"
                min/>
            </div>
        </div>
    )
}