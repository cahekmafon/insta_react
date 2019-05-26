import React, {Component} from 'react';
import User from './User';
export default class Post extends Component {
    render() {
        return (
            <div className="post">
                <User 
                src="https://cdn-images-1.medium.com/max/1600/1*F_ttuYWPAVBGSMyHlX9l9A.jpeg" 
                alt="man" 
                name="Larry_fank"
                min/>
                <img src={this.props.src} alt={this.props.src}></img>
                <div className="post__name">
                    some account
                </div>
                <div className="post__descr">
                    safdsfsd gfdgdg dfg dfg
                </div>
            </div>
        )
    }
}