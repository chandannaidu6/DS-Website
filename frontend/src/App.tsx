import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { PEO } from './pages/PEO'
import { StaffDesk } from './pages/StaffDesk'
import { Academics } from './pages/Academics'
import { TLP } from './pages/TLP'
import { Alumni } from './pages/Alumni'
import { IQAC } from './pages/IQAC'
import { CentralFacilities } from './pages/CentralFacilities'
import { Roles } from './pages/Roles'
function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/peo' element={<PEO />} />
        <Route path='/staffdesk' element={<StaffDesk />} />
        <Route path='/academics' element={<Academics />} />
        <Route path='/tlp' element={<TLP />} />
        <Route path='/alumni' element={<Alumni />} />
        <Route path='/iqac' element={<IQAC />} />
        <Route path='/centralfacilities' element={<CentralFacilities />} />
        <Route path='/roles' element={<Roles />} />





      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
