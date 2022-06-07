import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Routes, Route } from "react-router-dom"
import Header from '../Components/Header'
import Loading from '../Components/Loading'
import { useRouter } from "../Hooks/useRouter"
import { fetchAppSetting } from "../Reducer/slices/AppSetting"
import { addChain } from "../Reducer/slices/Metamask"
import Web3Services from "../Services/Web3"
import Homepage from "./Pages/Homepage"
import Search from "./Pages/Search"
import { Container } from './style'

function App() {
  const router = useRouter()
  const dispatch = useDispatch()
  const appSetting = useSelector(state => state.APP_SETTING)
  const metamask = useSelector(state => state.METAMASK)

  useEffect(() => {
    getNetworkInfo()
    dispatch(fetchAppSetting())
  }, [])

  const getNetworkInfo = async () => {
    const network = await Web3Services.detectNetwork()
    dispatch(addChain(network))
  }

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
