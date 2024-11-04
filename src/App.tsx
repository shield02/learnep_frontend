import { Routes, Route } from 'react-router-dom'
import './App.css'

import Welcome from './pages/Welcome';

const App = () => {

  return (
    <>
      <Routes>
        {/*<Route path='/create' element={<CreateOrganization />} />*/}
        <Route path='/onboarding/welcome' element={<Welcome />} />
        {/*<Route path='/accounts/register' element={<Register />} />*/}

        {/*<Route path='/auth/login' element={<Login />} />*/}
        {/*<Route path='/' element={<Dashboard />} />*/}
      </Routes>
    </>
  );
};

export default App;
