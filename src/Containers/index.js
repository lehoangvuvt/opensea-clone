import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Routes, Route } from "react-router-dom"
import Header from '../Components/Header'
import Loading from '../Components/Loading'
import { fetchAppSetting } from "../Reducer/slices/AppSetting"
import Homepage from "./Pages/Homepage"
import Search from "./Pages/Search"
import { Container } from './style'

function App() {
  const dispatch = useDispatch()
  const appSetting = useSelector(state => state.APP_SETTING)

  useEffect(() => {
    
  }, [])

  useEffect(() => {
    dispatch(fetchAppSetting())
  }, [dispatch])

  return (
    appSetting.loading !== 'pending' ?
      <Container className={appSetting?.darkMode ? 'dark' : ''}>
        <Header />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/assets' element={<Search />} />
        </Routes>
      </Container>
      :
      <Container className="loading">
        <Loading />
      </Container>
  )
}

export default App
