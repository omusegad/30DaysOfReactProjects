import NavBar from '../NavBar'
import Footer from '../Footer'
// import Counter from '../Counter'

export default function Layout({children}) {
  return (
    <>
        <NavBar />
        <main>
            <div className="container">
            {children}
            </div>
        </main>
        {/* <Counter/> */}
        <Footer />
    </>
  )
}
