import Image from 'next/image'

import styles from './Avatar.module.scss'

import type { ImageProps } from 'next/image'

export type AvatarProps = {
  alt: ImageProps['alt']
  size: number | string
  src: ImageProps['src']
}

function Avatar({ alt, size, src }: AvatarProps) {
  return (
    <div className={styles.container}>
      <Image alt={alt} height={size} src={src} width={size} />
    </div>
  )
}

export default Avatar
