import Image from 'next/image'
import styles from '../styles/About.module.css'

export default function About(){
return(
    <div className={styles.about}>
        <h1>lorem</h1>
        <p>loremdsaiodsaiudhsauidhsauihdasiuhdsauihdsaiuhdiusahiusaiushaiudashudiahsuidhasi</p>
        <Image src="/images/charizard.png" width={300} height={300} alt='pokemon-dragon' />    
        </div>
)

}