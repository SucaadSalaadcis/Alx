import { Route, Routes } from 'react-router-dom'

import Index from '../Index'
import Widgets from '../pages/Widgets'
// layout
import Top_nav_sidebar from '../pages/layout/Top_nav_sidebar'
import Top_nav from '../pages/layout/Top_nav'
import Fixed_top_nav from '../pages/layout/Fixed_top_nav'
import Fixed_sidebar from '../pages/layout/Fixed_sidebar'
import Fixed_footer from '../pages/layout/Fixed_footer'
import Fixed_sidebar_custom from '../pages/layout/Fixed_sidebar_custom'
import Collapsed_sidebar from '../pages/layout/Collapsed_sidebar'
import Boxed from '../pages/layout/Boxed'
// charts
import Chartjs from '../pages/charts/Chartjs'
import Flot from '../pages/charts/Flot'
import Inline from '../pages/charts/Inline'
import Uplot from '../pages/charts/uplot'
// UI
import Buttons from '../pages/UI/Buttons'
import General from '../pages/UI/General'
import Icon from '../pages/UI/Icon'
import Sliders from '../pages/UI/Sliders'
import Modals from '../pages/UI/Modals'
import Navbar from '../pages/UI/Navbar'
import Timeline from '../pages/UI/Timeline'
import Ribbons from '../pages/UI/Ribbons'
import Calendar from '../pages/Calendar'
import Gallery from '../pages/Gallery'
import Kanban from '../pages/Kanban'
// form
import GeneralF from '../pages/forms/GeneralF'
// import Advanced from '../pages/forms/Advanced'
import Editors from '../pages/forms/Editors'
import Validation from '../pages/forms/Validation'
// tables
import Simple from '../pages/tables/Simple'
import Data from '../pages/tables/Data'
import JsGrid from '../pages/tables/JsGrid'

// mailbox
import Compose from '../pages/mailbox/Compose'
import Mailbox from '../pages/mailbox/Mailbox'
import Read_mail from '../pages/mailbox/Read_mail'

// examples
import Blank from '../pages/examples/Blank'
import Contact_us from '../pages/examples/Contact_us'
import Contacts from '../pages/examples/Contacts'
import E_commerce from '../pages/examples/E_commerce'
import Err_404 from '../pages/examples/Err_404'
import Err_500 from '../pages/examples/Err_500'
import Faq from '../pages/examples/Faq'
import Forgot_password from '../pages/examples/Forgot_password'
import Forgot_password_v2 from '../pages/examples/Forgot_password_v2'
import Invoice_print from '../pages/examples/Invoice_print'
import Invoice from '../pages/examples/Invoice'
import Language_menu from '../pages/examples/Language_menu'
import Legacy_user_menu from '../pages/examples/Legacy_user_menu'
import Lockscreen from '../pages/examples/Lockscreen'
import Login_v2 from '../pages/examples/Login_v2'
import Pace from '../pages/examples/Pace'
import Profile from '../pages/examples/Profile'
import Project_add from '../pages/examples/Project_add'
import Project_detail from '../pages/examples/Project_detail'
import Project_edit from '../pages/examples/Project_edit'
import Login from '../pages/examples/Login'
import Projects from '../pages/examples/Projects'
import Recover_password from '../pages/examples/Recover_password'
import Recover_password_v2 from '../pages/examples/Recover_password_v2'
import Register_v2 from '../pages/examples/Register_v2'
import Register from '../pages/examples/Register'


// search
import Enhanced from '../pages/search/Enhanced'
import Enhanced_results from '../pages/search/Enhanced_results'
import Simple_Search from '../pages/search/Simple'
import Simple_results from '../pages/search/Simple_results'
// iframe
import Iframe from '../iframe'

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
        <Route path='/charts/flot' element={<Flot/>} />
        <Route path='/charts/inline' element={<Inline />} />
        <Route path='/charts/uplot' element={<Uplot />} />


        {/* UI */}
        <Route path='/ui/general' element={<General />} />
        <Route path='/ui/buttons' element={<Buttons />} />
        <Route path='/ui/icon' element={<Icon />} />
        <Route path='/ui/sliders' element={<Sliders />} />
        <Route path='/ui/modals' element={<Modals />} />
        <Route path='/ui/navbar' element={<Navbar />} />
        <Route path='/ui/timeline' element={<Timeline />} />
        <Route path='/ui/ribbons' element={<Ribbons />} />
        {/* examples */}
        <Route path='/ui/calender' element={<Calendar />} />
        <Route path='/ui/galery' element={<Gallery />} />
        <Route path='/ui/kanban' element={<Kanban />} />


        {/* forms */}
        <Route path='/forms/general' element={<GeneralF />} />
        {/* <Route path='/forms/advanced' element={<Advanced />} /> */}
        <Route path='/forms/editors' element={<Editors />} />
        <Route path='/forms/validations' element={<Validation />} />

        {/* tables */}
        <Route path='/table/simple' element={<Simple />} />
        <Route path='/table/data' element={<Data />} />
        <Route path='/table/jsgrid' element={<JsGrid />} />

        {/* mailbox */}
        <Route path='/mailbox/compose' element={<Compose />} />
        <Route path='/mailbox/mailbox' element={<Mailbox />} />
        <Route path='/mailbox/read_mail' element={<Read_mail />} />

        
        {/* search */}
        <Route path='/search/enhanced' element={<Enhanced/>} />
        <Route path='/search/enhanced_results' element={<Enhanced_results/>} />
        <Route path='/search/simple_search' element={<Simple_Search/>} />
        <Route path='/search/simple_results' element={<Simple_results/>} />

        {/* exmaple */}
        <Route path='/example/blank' element={<Blank />} />
        <Route path='/example/contact_us' element={<Contact_us />} />
        <Route path='/example/contacts' element={<Contacts />} />
        <Route path='/example/ecommerce' element={<E_commerce />} />
        <Route path='/example/404' element={<Err_404 />} />
        <Route path='/example/500' element={<Err_500 />} />
        <Route path='/example/faq' element={<Faq />} />
        <Route path='/example/forgot_password_v2' element={<Forgot_password_v2 />} />
        <Route path='/example/forgot_password' element={<Forgot_password />} />
        <Route path='/example/invoice_print' element={<Invoice_print />} />
        <Route path='/example/invoice' element={<Invoice />} />
        <Route path='/example/language_menu' element={<Language_menu />} />
        <Route path='/example/legacy_user_menu' element={<Legacy_user_menu />} />
        <Route path='/example/lockscreen' element={<Lockscreen />} />
        <Route path='/example/login_v2' element={<Login_v2 />} />
        <Route path='/example/login' element={<Login />} />
        <Route path='/example/pace' element={<Pace />} />
        <Route path='/example/profile' element={<Profile />} />
        <Route path='/example/projects' element={<Projects />} />
        <Route path='/example/project_edit' element={<Project_edit />} />
        <Route path='/example/project_add' element={<Project_add />} />
        <Route path='/example/project_detail' element={<Project_detail />} />
        <Route path='/example/recover_password_v2' element={<Recover_password_v2 />} />
        <Route path='/example/recover_password' element={<Recover_password />} />
        <Route path='/example/register_v2' element={<Register_v2 />} />
        <Route path='/example/register' element={<Register />} />

       {/* iframe */}
        <Route path='/iframe' element={<Iframe />} />
      </Routes>

    </>
  )
}
