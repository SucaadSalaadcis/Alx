import { Route, Routes } from 'react-router-dom'

import Index from '../Index'
import Widgets from '../pages/Widgets'

import Top_nav_sidebar from '../pages/layout/Top_nav_sidebar'
import Top_nav from '../pages/layout/Top_nav'
import Fixed_top_nav from '../pages/layout/Fixed_top_nav'
import Fixed_sidebar from '../pages/layout/Fixed_sidebar'
import Fixed_footer from '../pages/layout/Fixed_footer'
import Fixed_sidebar_custom from '../pages/layout/Fixed_sidebar_custom'
import Collapsed_sidebar from '../pages/layout/Collapsed_sidebar'
import Boxed from '../pages/layout/Boxed'

import Chartjs from '../pages/charts/Chartjs'
// import Flot from '../pages/charts/Flot'
import Inline from '../pages/charts/Inline'
import Uplot from '../pages/charts/uplot'

export default function App() {
  return (
    <>
      <Routes>
        {/* home */}
        <Route path='/' element={<Index />} />

        <Route path='/widgets' element={<Widgets />} />

        {/* layouts */}
        <Route path='/layout/top_nav_sidebar' element={<Top_nav_sidebar />} />
        <Route path='/layout/top_nav' element={<Top_nav />} />
        <Route path='/layout/fixed_top_nav' element={<Fixed_top_nav />} />
        <Route path='/layout/fixed_sidebar' element={<Fixed_sidebar />} />
        <Route path='/layout/fixed_footer' element={<Fixed_footer />} />
        <Route path='/layout/fixed_sidebar_custom' element={<Fixed_sidebar_custom />} />
        <Route path='/layout/collapsed_sidebar' element={<Collapsed_sidebar />} />
        <Route path='/layout/boxed' element={<Boxed />} />

        {/* charts */}
        <Route path='/chartjs' element={<Chartjs />} />
        {/* <Route path='/charts/flot' element={<Flot/>} /> */}
        <Route path='/charts/inline' element={<Inline />} />
        <Route path='/charts/uplot' element={<Uplot />} />

      </Routes>

    </>
  )
}
