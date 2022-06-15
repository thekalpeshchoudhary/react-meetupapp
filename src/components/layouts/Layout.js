import classes from './Layout.module.scss'
import MainNav from './MainNav'

const Layout = (props) => {
  return (
    <div>
        <MainNav/>
        <main className={classes.main}>
            {props.children}
        </main>
    </div>
  )
}

export default Layout