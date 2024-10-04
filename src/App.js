import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
// login
import Sign_in from './pages/Login/Sign_in';
import Sign_up from './pages/Login/Sign_up';
import Forgot_password from './pages/Login/Forgot_password';
// all services
import All_service from './pages/All_Services/All_service';
import Company_reg from './pages/All_Services/Company_reg';
import Company_Reg_ApplyNew from './pages/All_Services/Company_Reg_ApplyNew';
import Gazzette_DOB_change from './pages/All_Services/Gazzette_DOB_change';
import Gazzette_name_change from './pages/All_Services/Gazzette_name_change';
import Gazzette_religon_change from './pages/All_Services/Gazzette_religon_change';
import Gazzette from './pages/All_Services/Gazzette';
import GST_registration from './pages/All_Services/GST_registration';
import GST_registration_apply from './pages/All_Services/GST_registration_apply';
import Income_certificate from './pages/All_Services/Income_certificate';
import IT_services from './pages/All_Services/IT_services';
import ITR_filing_online from './pages/All_Services/ITR_filing_online';
import Kisan_point from './pages/All_Services/Kisan_point';
import PAN_Company_trust from './pages/All_Services/PAN_Company_trust';
import PAN_Individual from './pages/All_Services/PAN_Individual';
import Pan_service from './pages/All_Services/Pan_service';
import Passport from './pages/All_Services/Passport';
import Uddyam_aadhar from './pages/All_Services/Uddyam_aadhar';
import Votter_id from './pages/All_Services/Votter_id';
import Votter_new from './pages/All_Services/Votter_new';
import Votter_shift from './pages/All_Services/Votter_shift';
import Tredmark from './pages/All_Services/Tredmark';
import Import_Export from './pages/All_Services/Import_Export';
import Digital_signature from './pages/All_Services/Digital_signature';
import Legal_consultancy from './pages/All_Services/Legal_consultancy';
import Domicile from './pages/All_Services/Domicile';
// company registration
import Appointment_director from './pages/Company_Registration/Appointment_director';
import Business_registration from './pages/Company_Registration/Business_registration';
import Change_company_name from './pages/Company_Registration/Change_company_name';
import Credit_management_analysis from './pages/Company_Registration/Credit_management_analysis';
import Director_DIN_eKYC_update from './pages/Company_Registration/Director_DIN_eKYC_update';
import Increase_authorized_capital from './pages/Company_Registration/Increase_authorized_capital';
import India_subdiary_lic from './pages/Company_Registration/India_subdiary_lic';
import Jansamarth_registration from './pages/Company_Registration/Jansamarth_registration';
import LLP_registration from './pages/Company_Registration/LLP_registration';
import LLP_winding_up from './pages/Company_Registration/LLP_winding_up';
import MOA_amendmend_public_ltd from './pages/Company_Registration/MOA_amendmend_public_ltd';
import MOA_amendmend_pvt_ltd from './pages/Company_Registration/MOA_amendmend_pvt_ltd';
import MOA_amendmend_section8 from './pages/Company_Registration/MOA_amendmend_section8';
import Nidhi_registration_lic from './pages/Company_Registration/Nidhi_registration_lic';
import One_person_company from './pages/Company_Registration/One_person_company';
import Public_limited_company from './pages/Company_Registration/Public_limited_company';
import Pvt_ltd_company from './pages/Company_Registration/Pvt_ltd_company';
import Pvt_ltd_winding_up from './pages/Company_Registration/Pvt_ltd_winding_up';
import Registerd_office_change from './pages/Company_Registration/Registerd_office_change';
import Removal_director from './pages/Company_Registration/Removal_director';
import Section_8_company from './pages/Company_Registration/Section_8_company';
import Share_tranfer from './pages/Company_Registration/Share_tranfer';
// legal consultancy
import Advice_on_divorce from './pages/Legal_Consultancy/Advice_on_divorce';
import Legal_notice from './pages/Legal_Consultancy/Legal_notice';
import Mahsule from './pages/Legal_Consultancy/Mahsule';
import Online_legal_advice from './pages/Legal_Consultancy/Online_legal_advice';
// license
import Dl_Learning from './pages/Licenses/Dl_Learning';
import Dl_Permanent from './pages/Licenses/Dl_Permanent';
import Dl_Renewal from './pages/Licenses/Dl_Renewal';
import Driving_Lic from './pages/Licenses/Driving_Lic';
import Food_Central from './pages/Licenses/Food_Central';
import Food_lic from './pages/Licenses/Food_lic';
import Food_Local from './pages/Licenses/Food_Local';
import Food_manufacturing from './pages/Licenses/Food_manufacturing';
import Food_State from './pages/Licenses/Food_State';
import Shop_act from './pages/Licenses/Shop_act';
import ShopAct_New from './pages/Licenses/ShopAct_New';
// tax
import Annual_compliances_other from './pages/Tax_&_Compliances/Annual_compliances_other';
import Payroll_compliance from './pages/Tax_&_Compliances/Payroll_compliance';
import GST from './pages/Tax_&_Compliances/GST';
import Gst_return_filing from './pages/Tax_&_Compliances/Gst_return_filing';
import Gst_eway_bills from './pages/Tax_&_Compliances/Gst_eway_bills';
import Gst_modification from './pages/Tax_&_Compliances/Gst_modification';
import Gst_nil_return from './pages/Tax_&_Compliances/Gst_nil_return';
import Gstr from './pages/Tax_&_Compliances/Gstr';
import Gst_lutt from './pages/Tax_&_Compliances/Gst_lutt';
import Gst_cancle from './pages/Tax_&_Compliances/Gst_cancle';
// more
import Team from './pages/More/Team';
import Blogs from './pages/More/Blogs';
import Gallery from './pages/More/Gallery';

// userdashboard
import Usidebar from './components/Usidebar';
import { useState } from 'react';
import Dashboard from './pages/UserDashboard/Dashboard';
import Uheader from './components/Uheader';
import AllServices from './pages/UserDashboard/AllServices';
import Uprofile from './pages/UserDashboard/Uprofile';
import TransactionHistory from './pages/UserDashboard/TransactionHistory';

// admin dashboard
import ADashboard from "./pages/AdminDashboard/Dashboard"
import Asidebar from './components/Asidebar';
import Aheader from './components/Aheader';
import MyApplications from './pages/UserDashboard/Myaplications';
import Reviews from './pages/More/Reviews';
import Passport_Fresh from './pages/All_Services/Passport_Fresh';
import Passport_reissue from './pages/All_Services/Passport_reissue';
import ApplicationConsole from './pages/AdminDashboard/ApplicationConsole';
import Application_localfoodlicense from './pages/AdminDashboard/Application_localfoodlicense';
import Application_centralfoodlicense from "./pages/AdminDashboard/Application_centralfoodlicense"
import Application_companypancard from "./pages/AdminDashboard/Application_companypancard"
import Application_permanent from './pages/AdminDashboard/Application_permanent';
import Application_learning from './pages/AdminDashboard/Application_learning';
import Application_gstregistration from "./pages/AdminDashboard/Application_gstregistration"
import Application_passport_fresh from "./pages/AdminDashboard/Application_passport_fresh"
import Userdetails from './pages/AdminDashboard/Userdetails';
import Formprice from './pages/AdminDashboard/Formprice';
import Addlinks from './pages/AdminDashboard/Addlinks';
import Carousel1 from './pages/AdminDashboard/Carousel1';
import Carousel2 from './pages/AdminDashboard/Carousel2';
import Carousel3 from './pages/AdminDashboard/Carousel3';
import Add_team from './pages/AdminDashboard/Add_team';
import Reports from './pages/AdminDashboard/Reports';
import Change_password from './pages/AdminDashboard/Change_password';
import Application_udyam from './pages/AdminDashboard/Application_udyam';
import Application_statefoodlicense from './pages/AdminDashboard/Application_statefoodlicense';
import Application_manufacturingfoodlicense from './pages/AdminDashboard/Application_manufacturingfoodlicense';
import Application_votternew from "./pages/AdminDashboard/Application_votternew"
import Add_image_links from "./pages/AdminDashboard/Add_image_links"
import Add_blogs from "./pages/AdminDashboard/Add_blogs"
import Add_gallery from "./pages/AdminDashboard/Add_gallery"
import Add_reviews from "./pages/AdminDashboard/Add_reviews"
import Application_gazette_name from './pages/AdminDashboard/Application_gazette_name';
import Application_gazette_dob from './pages/AdminDashboard/Application_gazette_dob';
import Application_gazette_religon from "./pages/AdminDashboard/Application_gazette_religon"
import Application_domicile from './pages/AdminDashboard/Application_domicile';
import Application_passport_reissue from './pages/AdminDashboard/Application_passport_reissue';
import Application_vottershift from "./pages/AdminDashboard/Application_vottershift"
import User_Udyam from './pages/UserDashboard/User_Udyam';
import User_shiftvoter from './pages/UserDashboard/User_shiftvoter';
import User_individualpancard from './pages/UserDashboard/User_individualpancard';
import User_companypancard from './pages/UserDashboard/User_companypancard';
import Application_individualpancard from './pages/AdminDashboard/Application_individualpancard';
import User_Learning from './pages/UserDashboard/User_Learning';
import User_Permanent from './pages/UserDashboard/User_Permanent';
import User_localfoodlicense from "./pages/UserDashboard/User_localfoodlicense"
import User_statefoodlicense from "./pages/UserDashboard/User_statefoodlicense"
import User_centralfoodlicense from "./pages/UserDashboard/User_centralfoodlicense"
import User_manufacturingfoodlicense from './pages/UserDashboard/User_manufacturingfoodlicense';
import User_incomecertificate from "./pages/UserDashboard/User_incomecertificate"
import Application_incomecertificate from "./pages/AdminDashboard/Application_incomecertificate"
import User_companyregistration from './pages/UserDashboard/User_companyregistration';
import Application_companyregistration from './pages/AdminDashboard/Application_companyregistration';
import User_gazette_name from './pages/UserDashboard/User_gazette_name';
import User_gazette_dob from "./pages/UserDashboard/User_gazette_dob"
import User_gazette_religon from "./pages/UserDashboard/User_gazette_religon"
import User_gstregistration from "./pages/UserDashboard/User_gstregistration"


function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [adminSidebarOpen, setAdminSidebarOpen] = useState(false)
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* login */}
        <Route path="/sign_in" element={<Sign_in />} />
        <Route path="/sign_up" element={<Sign_up />} />
        <Route path="/forgot_password" element={<Forgot_password />} />

        {/* all services */}
        <Route path="/all_service" element={<All_service />} />
        <Route path="/company_registration" element={<Company_reg />} />
        <Route path="/company_reg_new" element={<Company_Reg_ApplyNew />} />
        <Route path="/gazzette_dob" element={<Gazzette_DOB_change />} />
        <Route path="/gazzette_name" element={<Gazzette_name_change />} />
        <Route path="/gazzette_religon" element={<Gazzette_religon_change />} />
        <Route path="/gazzette" element={<Gazzette />} />
        <Route path="/gst_registration" element={<GST_registration />} />
        <Route path="/gst_registration_apply" element={<GST_registration_apply />} />
        <Route path="/income_certificate" element={<Income_certificate />} />
        <Route path="/it_services" element={<IT_services />} />
        <Route path="/itr_filing_online" element={<ITR_filing_online />} />
        <Route path="/kisan_point" element={<Kisan_point />} />
        <Route path="/pan_Company_trust" element={<PAN_Company_trust />} />
        <Route path="/pan_Individual" element={<PAN_Individual />} />
        <Route path="/pan_service" element={<Pan_service />} />
        <Route path="/passport" element={<Passport />} />
        <Route path="/passport_fresh" element={<Passport_Fresh />} />
        <Route path="/passport_Reissue" element={<Passport_reissue />} />
        <Route path="/uddyam_aadhar" element={<Uddyam_aadhar />} />
        <Route path="/votter_id" element={<Votter_id />} />
        <Route path="/votter_new" element={<Votter_new />} />
        <Route path="/votter_shift" element={<Votter_shift />} />
        <Route path="/tredmark" element={<Tredmark />} />
        <Route path="/import_Export" element={<Import_Export />} />
        <Route path="/digital_signature" element={<Digital_signature />} />
        <Route path="/legal_consultancy" element={<Legal_consultancy />} />
        <Route path="/domicie" element={<Domicile />} />

        {/* company registration */}
        <Route path="/appointment_director" element={<Appointment_director />} />
        <Route path="/business_registration" element={<Business_registration />} />
        <Route path="/change_company_name" element={<Change_company_name />} />
        <Route path="/credit_management_analysis" element={<Credit_management_analysis />} />
        <Route path="/director_din_ekyc_update" element={<Director_DIN_eKYC_update />} />
        <Route path="/increase_authorized_capital" element={<Increase_authorized_capital />} />
        <Route path="/india_subdiary_lic" element={<India_subdiary_lic />} />
        <Route path="/jansamarth_registration" element={<Jansamarth_registration />} />
        <Route path="/llp_registration" element={<LLP_registration />} />
        <Route path="/llp_winding_up" element={<LLP_winding_up />} />
        <Route path="/moa_amendmend_public_ltd" element={<MOA_amendmend_public_ltd />} />
        <Route path="/moa_amendmend_pvt_ltd" element={<MOA_amendmend_pvt_ltd />} />
        <Route path="/moa_amendmend_section8" element={<MOA_amendmend_section8 />} />
        <Route path="/nidhi_registration_lic" element={<Nidhi_registration_lic />} />
        <Route path="/one_person_company" element={<One_person_company />} />
        <Route path="/public_limited_company" element={<Public_limited_company />} />
        <Route path="/pvt_ltd_company" element={<Pvt_ltd_company />} />
        <Route path="/pvt_ltd_winding_up" element={<Pvt_ltd_winding_up />} />
        <Route path="/registerd_office_change" element={<Registerd_office_change />} />
        <Route path="/removal_director" element={<Removal_director />} />
        <Route path="/section_8_company" element={<Section_8_company />} />
        <Route path="/share_tranfer" element={<Share_tranfer />} />

        {/* legal consultancy */}
        <Route path="/advice_on_divorce" element={<Advice_on_divorce />} />
        <Route path="/legal_notice" element={<Legal_notice />} />
        <Route path="/mahsule" element={<Mahsule />} />
        <Route path="/online_legal_advice" element={<Online_legal_advice />} />

        {/* license */}
        <Route path="/dl_learning" element={<Dl_Learning />} />
        <Route path="/dl_permanent" element={<Dl_Permanent />} />
        <Route path="/dl_renewal" element={<Dl_Renewal />} />
        <Route path="/driving_lic" element={<Driving_Lic />} />
        <Route path="/food_central" element={<Food_Central />} />
        <Route path="/food_lic" element={<Food_lic />} />
        <Route path="/food_local" element={<Food_Local />} />
        <Route path="/food_manufacturing" element={<Food_manufacturing />} />
        <Route path="/food_state" element={<Food_State />} />
        <Route path="/shop_act" element={<Shop_act />} />
        <Route path="/shop_act_new" element={<ShopAct_New />} />

        {/* tax */}
        <Route path="/annual_compliances_other" element={<Annual_compliances_other />} />
        <Route path="/payroll_compliance" element={<Payroll_compliance />} />
        <Route path="/gst" element={<GST />} />
        <Route path="/gstreturn" element={<Gst_return_filing />} />
        <Route path="/gstEwaybill" element={<Gst_eway_bills />} />
        <Route path="/gstmodification" element={<Gst_modification/>} />
        <Route path="/gstnillreturn" element={<Gst_nil_return/>} />
        <Route path="/gstr" element={<Gstr/>} />
        <Route path="/gstlutt" element={<Gst_lutt/>} />
        <Route path="/gstcancle" element={<Gst_cancle/>} />

        {/* More */}
        <Route path="/team" element={<Team />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/reviews" element={<Reviews />} />

        {/* dashboard */}
        <Route path="/dashboard/*" element={<Dashboardroutes sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />} />
        {/* Admin Dashboard */}
        <Route
          path="/admin/*"
          element={
            <AdminDashboardroutes adminSidebarOpen={adminSidebarOpen} setAdminSidebarOpen={setAdminSidebarOpen} />}
        />
        <Route />
      </Routes>



    </div>
  );
}

function Dashboardroutes({ sidebarOpen, setSidebarOpen }) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Usidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex-1 flex flex-col">
        <Uheader setSidebarOpen={setSidebarOpen} />
        <main className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="allServices" element={<AllServices />} />
            <Route path="uprofile" element={<Uprofile />} />
            <Route path="my_application" element={<MyApplications />} />
            <Route path="transactionHistory" element={<TransactionHistory />} />
            <Route path='user_udyam/:id' element={<User_Udyam/>}/>
            <Route path="user_shiftvoter/:id" element={<User_shiftvoter/>}/>
            <Route path='user_individualpancard/:id' element={<User_individualpancard/>}/>
            <Route path="User_companypancard/:id" element={<User_companypancard/>}/>
            <Route path='User_learninglicense/:id' element={<User_Learning/>}/>
            <Route path='User_permanentlicense/:id' element={<User_Permanent/>}/>
            <Route path='User_localfoodlicense/:id' element={<User_localfoodlicense/>}/>
            <Route path='User_statefoodlicense/:id' element={<User_statefoodlicense/>}/>
            <Route path='User_centralfoodlicense/:id' element={<User_centralfoodlicense/>}/>
            <Route path='User_foodmanufacturinglicense/:id' element={<User_manufacturingfoodlicense/>}/>
            <Route path='User_incomecertificate/:id' element={<User_incomecertificate/>}/>
            <Route path='User_companyregistration/:id' element={<User_companyregistration/>}/>
            <Route path='User_gazettenamechange/:id' element={<User_gazette_name/>}/>
            <Route path='User_gazettedobchange/:id' element={<User_gazette_dob/>}/>
            <Route path='User_gazettedreligionchange/:id' element={<User_gazette_religon/>}/>
            <Route path='User_gstregistration/:id' element={<User_gstregistration/>}/>
          </Routes>
        </main>
      </div>
    </div>  
  );
}

function AdminDashboardroutes({ adminSidebarOpen, setAdminSidebarOpen }) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Asidebar adminSidebarOpen={adminSidebarOpen} setAdminSidebarOpen={setAdminSidebarOpen} />
      <div className="flex-1 flex flex-col">
        <Aheader setAdminSidebarOpen={setAdminSidebarOpen} />
        <main className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="admin_dashboard" element={<ADashboard />} />
            <Route path="adashboard" element={<ADashboard />} />
            <Route path='applicationconsole' element={<ApplicationConsole/>}/>
            <Route path='application_localfoodlicense/:id' element={<Application_localfoodlicense/>}/>
            <Route path='application_centralfoodlicense/:id' element={<Application_centralfoodlicense/>}/>
            <Route path='application_companypancard/:id' element={<Application_companypancard/>}/>
            <Route path='application_individualpancard/:id' element={<Application_individualpancard/>}/>
            <Route path='application_permanent/:id' element={<Application_permanent/>}/>
            <Route path='application_learning/:id' element={<Application_learning/>}/>
            <Route path='application_udhyam/:id' element={<Application_udyam/>}/>
            <Route path='application_statefoodlicense/:id' element={<Application_statefoodlicense/>}/>
            <Route path='application_gstregistration/:id' element={<Application_gstregistration/>}/>
            <Route path='application_foodmanufacturing/:id' element={<Application_manufacturingfoodlicense/>}/>
            <Route path='application_newVoterid/:id' element={<Application_votternew/>}/>
            <Route path='application_gazettenamechange/:id' element={<Application_gazette_name/>}/> 
            <Route path='application_gazettedobchange/:id' element={<Application_gazette_dob/>}/>
            <Route path='application_gazettereligionchange/:id' element={<Application_gazette_religon/>}/>
            <Route path='application_domicile/:id' element={<Application_domicile/>}/>
            <Route path='Application_passport_fresh/:id' element={<Application_passport_fresh/>}/>
            <Route path='Application_passport_reissue/:id' element={<Application_passport_reissue/>}/>
            <Route path='Application_votershift/:id' element={<Application_vottershift/>}/>
            <Route path='Application_incomecertificate/:id' element={<Application_incomecertificate/>}/>
            <Route path='Application_companyregistration/:id' element={<Application_companyregistration/>}/>
            <Route path='userdetails' element={< Userdetails />}/>
            <Route path='formprice' element={< Formprice />}/>
            <Route path='addlinks' element={< Addlinks />}/>
            <Route path='ccarousel1' element={< Carousel1 />}/>
            <Route path='carousel2' element={< Carousel2 />}/>
            <Route path='carousel3' element={< Carousel3 />}/>
            <Route path='addteam' element={< Add_team />}/>
            <Route path='report' element={< Reports />}/>
            <Route path='changepassword' element={< Change_password />}/>
            <Route path='Add_image_links' element={< Add_image_links />}/>
            <Route path='addbogs' element={< Add_blogs />}/>
            <Route path='addgallery' element={< Add_gallery />}/>
            <Route path='addreview' element={< Add_reviews />}/>
            </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;