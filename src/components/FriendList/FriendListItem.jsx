/* eslint-disable react/prop-types */
import clsx from 'clsx'
import css from './FriendListItem.module.css'

const FriendListItem = ({avatar, name, isOnline}) => {
    return (
        <li className={clsx(css.friendCard)}>
  <img src={avatar} alt="Avatar" width="48" />
  <p className={clsx(css.friendName)}>{name}</p>
  <p className={clsx(isOnline ? css.online : css.offline)}>{isOnline ? 'Online' : "Offline"}</p>
</li>
    )
}

export default FriendListItem;