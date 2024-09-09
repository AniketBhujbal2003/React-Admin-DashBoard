import React from 'react'
import "./index.css"
import { Route,Routes } from 'react-router-dom'
import OverviewPages from './Pages/OverviewPages'
import ProductPage from './Pages/ProductPage'
import Sidebar from './Components/Sidebar'
import SettingPage from './Pages/SettingPage'
import SalesPage from './Pages/SalesPage'
import OrderPage from './Pages/OrderPage'
import AnalyticsPage from './Pages/AnalyticsPage'
import UsersPage from './Pages/UsersPage'

function App() {
  return (
    <div className='flex h-screen bg-gray-900 text-gray-100 overflow-hidden'>
     
     <div className='fixed inset-0 z-0'>
				<div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80' />
				<div className='absolute inset-0 backdrop-blur-sm' />
			</div>

      <Sidebar></Sidebar>
      <Routes>
				<Route path='/' element={<OverviewPages />} />
				<Route path='/products' element={<ProductPage />} />
				<Route path='/users' element={<UsersPage></UsersPage>} />
				<Route path='/sales' element={<SalesPage></SalesPage>} />
				<Route path='/orders' element={<OrderPage></OrderPage>} />
				<Route path='/analytics' element={<AnalyticsPage></AnalyticsPage>} />
				<Route path='/settings' element={<SettingPage></SettingPage>} />
			</Routes>

    </div>
  )
}

export default App