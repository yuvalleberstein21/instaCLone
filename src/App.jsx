import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import AuthPage from './pages/HomePage/AuthPage/AuthPage'
import PageLayout from './Layouts/PageLayout/PageLayout'


function App() {


  return (
    <PageLayout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/auth' element={<AuthPage />} />
      </Routes>
    </PageLayout>
  )
}

export default App
