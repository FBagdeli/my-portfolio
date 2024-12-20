import React from 'react'
import {getImageUrl} from '../../utils.js'
import styles from './Hero.module.css'
const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
      
        <h1 className={styles.title}>Hi, I’m Farshad</h1>
        <p className={styles.description}>I’m a passionate full-stack developer dedicated to crafting efficient and scalable solutions. I thrive on building robust applications and writing clean, maintainable code.</p>
        <a href="mailto:f.bagdeli13@outlook.com" className={styles.contactBtn}>Contact Me</a>
      </div>
      
      <img src={getImageUrl('avatar.png')} alt="my image" className={styles.avatarImg}/>
      
      <div className={styles.topBlur}/>
      <div className={styles.bottomBlur}/>
    </section>
    
  )
}

export default Hero
