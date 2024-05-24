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
import { Vision } from './pages/Vision'
import { Stafflist } from './pages/Stafflist'
import { Consultancy } from './pages/Consultancy'
import { Act } from './pages/Activities'
import { Initiatives } from './pages/Initiatives'
import { Features } from './pages/Features'
import { Syllabus } from './pages/Syllabus'

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
        <Route path='/vision' element={<Vision />} />
        <Route path='/stafflist' element={<Stafflist />} />
        <Route path='/consultancy' element={<Consultancy />} />
        <Route path='/act' element={<Act/>} />
        <Route path='/initiatives' element={<Initiatives/>} />
        <Route path='/features' element={<Features/>} />
        <Route path='/syllabus' element={<Syllabus/>} />








      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
