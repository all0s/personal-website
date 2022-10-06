import Avatar from 'components/base/Avatar'
import imageAvatar from 'images/avatar.jpg'
import { SITE_DESCRIPTION } from 'modules/site/constants'

import styles from './SiteDescription.module.scss'

function SiteDescription() {
  return (
    <div className={styles.container}>
      <Avatar alt="Avatar" size={48} src={imageAvatar} />
      <div>{SITE_DESCRIPTION}</div>
    </div>
  )
}

export default SiteDescription
