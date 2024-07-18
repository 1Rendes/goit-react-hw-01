/* eslint-disable react/prop-types */
/* eslint-disable no-irregular-whitespace */
import css from './Profile.module.css'
import clsx from 'clsx'

const Profile = (props) => {
    return (
    <div className={clsx(css.profile)}>
 <div className={clsx(css.profileBlock)}
>
                <img className={clsx(css.profilePhoto)}
     src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
     alt="User avatar"/>
        <p className={clsx(css.mainSign)}>{props.name}</p>
        <p className={clsx(css.secondarySign)}>@{props.tag}</p>
        <p className={clsx(css.secondarySign)}>{props.location}</p>
 </div>

 <ul className={clsx(css.listStyle)}>
 <li className={clsx(css.elStyle)}>
 <span className={clsx(css.elName)}>Followers</span>
 <span className={clsx(css.elValue)}>{props.stats.followers}</span>
 </li>
 <li className={clsx(css.elStyle, css.elDivider)}>
 <span className={clsx(css.elName)}>Views</span>
 <span className={clsx(css.elValue)}>{props.stats.views}</span>
 </li>
 <li className={clsx(css.elStyle)}>
 <span className={clsx(css.elName)}>Likes</span>
        <span className={clsx(css.elValue)}>{props.stats.likes}</span>
 </li>
 </ul>
</div>

)
}

export default Profile;