import { Route, Switch } from 'react-router-dom'

import MainPage from './pages/MainPage'
import AddPage from './pages/AddPage'
import Layout from './components/layout/Layout'

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <MainPage />
        </Route>
        <Route path='/add-character'>
          <AddPage />
        </Route>
      </Switch>
    </Layout>
  )
}

export default App;