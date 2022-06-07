import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import App from './Containers'
import store from './Reducer/store'
import './style.scss'
import 'antd/dist/antd.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
const client = new QueryClient()

root.render(
  <Provider store={store}>
  <QueryClientProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QueryClientProvider>
  </Provider>
)