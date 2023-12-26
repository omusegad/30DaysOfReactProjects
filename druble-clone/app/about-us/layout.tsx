
import styles from "./styles.module.css"
export default function AboutLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section className={styles.aboutcont}>
        <div className="container mx-auto">
             {children}
        </div>
      </section>
    )
  }