/* eslint-disable no-unused-vars */
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Enterprise from '../pages/enterprise'
import Index from '../pages/Index'
import Individuals from '../pages/individuals'
import Teams from '../pages/teams'

const Routing = () => {
  return (
    <div>
        
        {/* this part is what will give the path for the nav bar */}
        <Routes>
          <Route path="/" element={<Index/>} />
          <Route path="/individuals" element={<Individuals/>} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/enterprise" element={<Enterprise />} />
        </Routes>

    </div>
  )
}

export default Routing;