import Text from "@/components/primitive/Text/Text"
import styles from "@/components/global/Footer/footer.module.sass"

const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <Text
        text="© 2026 Bridge Auction Intelligence. All Rights Reserved. Tournament data sourced from Bridge Base Online."
        align="center"
        color="secondary"
      />
    </footer>
  )
}

export default Footer