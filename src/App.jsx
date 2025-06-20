import { Suspense, useEffect} from "react"
import { Routes, Route } from "react-router-dom"
import Navigation from './components/navigation'
import HomePage from "./pages/homePage"
import LoginPage from "./pages/loginPage"
import RegistrationPage from "./pages/registrationPage"
import ContactsPage from "./pages/contactsPage"
import AppBar from "./components/appBar"
import { refreshUser } from "./redux/auth/operations"
import { useDispatch, useSelector } from "react-redux"
import Layout from "./components/Layout"
import styles from './components/componentsCss/app.module.css'
import { selectIsRefreshing } from "./redux/auth/selectors"
import RestrictedRoute from "./components/RestrictedRoute"
import PrivateRoute from "./components/PrivateRoute"

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing)
  useEffect(() => {
    dispatch(refreshUser())
  },[dispatch])


  return !isRefreshing &&
  (<div className={styles.mainContainer}>
    <Layout>
    <Suspense fallback={null}>
      <Routes>
          <Route path="/" element={<HomePage />} />
          
          <Route path="/login"
            element={<RestrictedRoute
              component={<LoginPage />} />}
          />
          <Route path="/registration"
            element={<RestrictedRoute
              component={<RegistrationPage />}
            />}
          />
          <Route path="/contacts"
            element={<PrivateRoute
              component={<ContactsPage />} />}
          />
          
      </Routes>
      </Suspense>
      </Layout>
  </div>
)
}

export default App
