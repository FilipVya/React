import React from 'react';
import classes from './Profile.module.css';

const Profile = () => {
    return <div className='content'>
        <div>
            <img src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'></img>
        </div>
        <div>
            ava + description
        </div>
        <div>
            my posts
            <div className={classes.posts}>New post</div>
            <div>
                <div className={classes.item}>1 post</div>
                <div className={classes.item}>2 post</div>
            </div>
        </div>

    </div>
}

export default Profile;