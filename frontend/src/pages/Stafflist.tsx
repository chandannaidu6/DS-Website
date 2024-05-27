import Card from "../components/Card";
import { Appbar } from "../components/Appbar";
import { Dropdown } from "../components/Dropdown";
import { Link } from "react-router-dom";
export const Stafflist = () => {
    return <div>
                        <Card>
            <div className='flex flex-col justify-center'>
            <div className='flex justify-start justify-center'>
                <div>
                <img src="https://static.wixstatic.com/media/374af4_adaa6463205342eead87a7d02b4241a9~mv2.png/v1/fill/w_89,h_89,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/44_%20Geetanjali.png" alt=""  width="71" height="71"></img>
                <div className='text-sm font-semibold pt-5'>
                ....Striving towards perfection

                </div>
                </div>
                <div>
                    <div className='font-bold text-4xl whitespace-nowrap'>
                        GEETHANJALI COLLEGE OF ENGINEERING AND TECHNOLOGY   
                    </div>
                    <div className='font-semibold flex justify-center'>
                        (UGC Autonomous,  Permanently Affiliated to JNTUH, Accredited by NAAC with 'A+' grade)
                    </div>
                </div>
                <div className='pt-12 font-bold text-md'>
                EAMCET CODE - GCTC

                </div>
            </div>
            <div className='flex justify-center font-bold text-3xl'>
            Department of Data Science(EA)        

            </div>
            <div className='font-semibold flex justify-center pb-2'>
            (Accredited by NBA in 2012, 2015, 2018 and 2022)

            </div>
            
            </div>
            <div className='flex justify-between'>
                <div className='mb-0'>
                <img src="https://static.wixstatic.com/media/374af4_1273fd514c9c40f99c7cf49d9eea74cc~mv2.jpg/v1/fill/w_43,h_43,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/nirf.jpg" alt="nirf.jpg" width="33" height="33" />
                </div>
                <div>
                <img src="https://static.wixstatic.com/media/374af4_c1682f4fa2334f6aa23606e0931a47cc~mv2.png/v1/fill/w_56,h_56,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/AICTE.png" alt="AICTE.png" width="45" height="45" />
                </div>
                <div>
                <img src="https://static.wixstatic.com/media/374af4_4e56e656de81418086ce129a42446cea~mv2.png/v1/crop/x_0,y_0,w_437,h_458/fill/w_61,h_64,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/jntuh%20logo.png" alt="jntuh logo.png"  width="49" height="51"></img>
                </div>
                <div>
                <img src="https://static.wixstatic.com/media/374af4_204bba8823234726ac313d3ad7f1ac70~mv2.png/v1/fill/w_59,h_56,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/NAAC_LOGO.png" alt="NAAC_LOGO.png"  width="47" height="45" />
                </div>
                <div>
                <img src="https://static.wixstatic.com/media/374af4_2f6a25529ea14778a064e82093c1fefb~mv2.png/v1/fill/w_56,h_56,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/NBA.png" alt="NBA.png"  width="45" height="45" />
                </div>
                <div>
                <img src="https://static.wixstatic.com/media/374af4_0e4b94f467fd4b65a5a6c74724fa9be9~mv2.png/v1/fill/w_56,h_56,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/MSME.png" alt="MSME.png"  width="45" height="45"  />
                </div>
            </div>
 

        </Card>
        <Appbar>
            <div className='flex justify-start flex-wrap'>
                
                <Dropdown size={6} ButtonName="HOME" Buttons={['Vision and Mission', 'PEOs,POs and PSOs', 'Salient Features of the Department', 'Messages', 'Board of Studies', 'Approvals and Recognitions']}  Links={['/vision', '/peo', '/features', 'https://www.example.com','https://www.example.com','https://www.example.com']} dropdownLink="/" />
                <Dropdown size={4} ButtonName="Staff Desk" Buttons={['Faculty and Staff list', 'Roles and Responsibilities', 'Enrichment of Skills', 'Faculty as Resource Persons']}   Links={['/stafflist', '/roles', 'https://www.example.com', 'https://www.example.com']} dropdownLink="/staffdesk" />
                <Dropdown size={12} ButtonName="Student Desk" Buttons={['Instructions', 'Student Nominal Rolls','Student Achievements','Academic Toppers','Higher Education and BEC','Training and Placement','Placements','Student Clubs','CACHE','Learning Resources','Department Library','Grievances']}  Links={['/instructions', 'www.google.com', 'www.google.com', 'www.google.com']} ></Dropdown>  
                <Dropdown size={3} ButtonName="Research" Buttons={['Research and Consultancy Policy', 'Research Activities','Research Intiatives']}  Links={['/consultancy', '/act', '/initiatives']}></Dropdown>  
                <Dropdown size={10} ButtonName="Academics" Buttons={['Regulations and Syllabus', 'Academic Calenders','Academic Activities Carried out','Industry-institute interaction','Major Products','Mini Projects','Internships','Industrial Visits','Professional Bodies','TechExpo']}  Links={['/syllabus', 'https://www.example.com', 'https://www.example.com', 'https://www.example.com','https://www.example.com','https://www.example.com','https://www.example.com','/industrial','https://www.example.com','https://www.example.com']} dropdownLink="/academics" ></Dropdown>  
                <Dropdown size={7} ButtonName="TLP" Buttons={['Work Load and Additional duties', 'Time tables', 'Result Analysis', 'Innovations in Teaching', 'Project Based Learning', 'Value Added Courses','Specialized Groups']}  Links={['www.google.com', 'www.google.com', 'www.google.com', 'www.google.com']} dropdownLink="/tlp"></Dropdown>  
                <Dropdown size={3} ButtonName="Labs" Buttons={['List of Laboratories', 'Software','Equipment Purchased']}  Links={['www.google.com', 'www.google.com', 'www.google.com', 'www.google.com']} ></Dropdown>  
                <Dropdown size={2} ButtonName="Centers of Excellence" Buttons={['VLSI Design', 'IOT and ES']}  Links={['www.google.com', 'www.google.com', 'www.google.com', 'www.google.com']} ></Dropdown>  
                <Dropdown size={4} ButtonName="Reports" Buttons={['Techno Digest - News Letter', 'Department Reports', 'Strategic Plan', 'MoUs and MoMs']}  Links={['www.google.com', 'www.google.com', 'www.google.com', 'www.google.com']} ></Dropdown>  
                <Link to='/alumni'>
                <button  className="py-3  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button">
                Alumni

                </button>
                </Link>
                <Link to = '/iqac'>
                <button className="py-3 border text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button">
                IQAC

                </button>
                </Link>
                <Dropdown size={1} ButtonName="Formats" Buttons={['Principal\'s Zone']}  Links={['www.google.com', 'www.google.com', 'www.google.com', 'www.google.com']} ></Dropdown>  

                <Dropdown size={1} ButtonName="Central Facilities" Buttons={['NSS']}  Links={['/nss']} dropdownLink="/centralfacilities"></Dropdown>  
                <Link to='/attainments'>
                <button className="py-3 border text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button">
                CO-PO Attainments

                </button>
                </Link>

                <Dropdown size={6} ButtonName="More" Buttons={['Curriculum Design', 'Contact us', 'NBA Documents - 2022', 'Events of the Dept', 'Gallery', 'New Item']}  Links={['www.google.com', '/contact', 'www.google.com', 'www.google.com','www.google.com','www.google.com']} ></Dropdown>  
            
            </div>
        </Appbar>
        <Card>
    <div className="sm:max-w-3xl lg:max-w-7xl overflow-x-auto">
        <div className='pb-2 text-2xl font-bold text-center'>Faculty and Staff List</div>
        <div>
            <table className='table-auto w-full border-2 border-black'>
                <thead>
                    <tr className='bg-gray-200 border-2 border-black'>
                        <th className='px-4 py-2 border-2 border-black'>Sl. No.</th>
                        <th className='px-4 py-2 border-2 border-black'>Name of the Staff Member</th>
                        <th className='px-4 py-2 border-2 border-black'>Category</th>
                        <th className='px-4 py-2 border-2 border-black'>Designation</th>
                        <th className='px-4 py-2 border-2 border-black'>UG</th>
                        <th className='px-4 py-2 border-2 border-black'>PG</th>
                        <th className='px-4 py-2 border-2 border-black'>Ph.D</th>
                        <th className='px-4 py-2 border-2 border-black'>Teaching Experience</th>
                        <th className='px-4 py-2 border-2 border-black'>Date of Joining</th>
                        <th className='px-4 py-2 border-2 border-black'>Faculty Registration ID</th>
                        <th className='px-4 py-2 border-2 border-black'>Gender</th>
                        <th className='px-4 py-2 border-2 border-black'>Category.</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='px-4 py-2 border-2 border-black'>1</td>
                        <td className='px-4 py-2 border-2 border-black'>Dr. L. Kiran Kumar Reddy</td>
                        <td className='px-4 py-2 border-2 border-black'>UG</td>
                        <td className='px-4 py-2 border-2 border-black'>HoD & Associate Professor</td>
                        <td className='px-4 py-2 border-2 border-black'>BE</td>
                        <td className='px-4 py-2 border-2 border-black'>M.Tech. (SE)</td>
                        <td className='px-4 py-2 border-2 border-black'>Ph.D</td>
                        <td className='px-4 py-2 border-2 border-black'>21</td>
                        <td className='px-4 py-2 border-2 border-black'>29.08.2022</td>
                        <td className='px-4 py-2 border-2 border-black'>4612-151217-230709</td>
                        <td className='px-4 py-2 border-2 border-black'>M</td>
                        <td className='px-4 py-2 border-2 border-black'>OC</td>
                    </tr>
                    <tr>
                        <td className='px-4 py-2 border-2 border-black'>2</td>
                        <td className='px-4 py-2 border-2 border-black'>Dr. K. Neeraja</td>
                        <td className='px-4 py-2 border-2 border-black'>UG</td>
                        <td className='px-4 py-2 border-2 border-black'>Professor</td>
                        <td className='px-4 py-2 border-2 border-black'>B.Sc</td>
                        <td className='px-4 py-2 border-2 border-black'>MCA, M.Tech.</td>
                        <td className='px-4 py-2 border-2 border-black'>Ph.D</td>
                        <td className='px-4 py-2 border-2 border-black'>19</td>
                        <td className='px-4 py-2 border-2 border-black'>20.07.2021</td>
                        <td className='px-4 py-2 border-2 border-black'>62150406-101224</td>
                        <td className='px-4 py-2 border-2 border-black'>F</td>
                        <td className='px-4 py-2 border-2 border-black'>BC</td>
                    </tr>
                    <tr>
                        <td className='px-4 py-2 border-2 border-black'>3</td>
                        <td className='px-4 py-2 border-2 border-black'>Dr. K. Ambedkar</td>
                        <td className='px-4 py-2 border-2 border-black'>UG</td>
                        <td className='px-4 py-2 border-2 border-black'>Associate Professor</td>
                        <td className='px-4 py-2 border-2 border-black'>B.Sc</td>
                        <td className='px-4 py-2 border-2 border-black'>M.Tech . (IT)</td>
                        <td className='px-4 py-2 border-2 border-black'>Ph.D</td>
                        <td className='px-4 py-2 border-2 border-black'>6.8</td>
                        <td className='px-4 py-2 border-2 border-black'>22.03.2021</td>
                        <td className='px-4 py-2 border-2 border-black'>3420-191107-161934</td>
                        <td className='px-4 py-2 border-2 border-black'>M</td>
                        <td className='px-4 py-2 border-2 border-black'>SC</td>
                    </tr>
                    <tr>
                        <td className='px-4 py-2 border-2 border-black'>4</td>
                        <td className='px-4 py-2 border-2 border-black'>Dr. A. Venkata Ramana</td>
                        <td className='px-4 py-2 border-2 border-black'>UG</td>
                        <td className='px-4 py-2 border-2 border-black'>Associate Professor</td>
                        <td className='px-4 py-2 border-2 border-black'>B.Sc</td>
                        <td className='px-4 py-2 border-2 border-black'>M.Sc, M.Tech</td>
                        <td className='px-4 py-2 border-2 border-black'>Ph.D</td>
                        <td className='px-4 py-2 border-2 border-black'>25.6</td>
                        <td className='px-4 py-2 border-2 border-black'>18.01.2023</td>
                        <td className='px-4 py-2 border-2 border-black'>4147-150415-121607</td>
                        <td className='px-4 py-2 border-2 border-black'>M</td>
                        <td className='px-4 py-2 border-2 border-black'>OC</td>
                    </tr>
                    <tr>
                        <td className='px-4 py-2 border-2 border-black'>5</td>
                        <td className='px-4 py-2 border-2 border-black'>T. Pandu Ranga</td>
                        <td className='px-4 py-2 border-2 border-black'>UG</td>
                        <td className='px-4 py-2 border-2 border-black'>Associate Professor</td>
                        <td className='px-4 py-2 border-2 border-black'>AME</td>
                        <td className='px-4 py-2 border-2 border-black'>M.Tech. (CSE)</td>
                        <td className='px-4 py-2 border-2 border-black'>-</td>
                        <td className='px-4 py-2 border-2 border-black'>26.4</td>
                        <td className='px-4 py-2 border-2 border-black'>24.02.2022</td>
                        <td className='px-4 py-2 border-2 border-black'>0395-171227-101529</td>
                        <td className='px-4 py-2 border-2 border-black'>M</td>
                        <td className='px-4 py-2 border-2 border-black'>OC</td>
                    </tr>
                    <tr>
                        <td className='px-4 py-2 border-2 border-black'>6</td>
                        <td className='px-4 py-2 border-2 border-black'>S. Tirupathi Rao</td>
                        <td className='px-4 py-2 border-2 border-black'>UG</td>
                        <td className='px-4 py-2 border-2 border-black'>Associate Professor & Coord.-Internships</td>
                        <td className='px-4 py-2 border-2 border-black'>B.E (CE)</td>
                        <td className='px-4 py-2 border-2 border-black'>M.Tech. (CSE)</td>
                        <td className='px-4 py-2 border-2 border-black'>-</td>
                        <td className='px-4 py-2 border-2 border-black'>19.01</td>
                        <td className='px-4 py-2 border-2 border-black'>25.08.2021</td>
                        <td className='px-4 py-2 border-2 border-black'>42150406-160745</td>
                        <td className='px-4 py-2 border-2 border-black'>M</td>
                        <td className='px-4 py-2 border-2 border-black'>OC</td>
                    </tr>
                    <tr>
                        <td className='px-4 py-2 border-2 border-black'>7</td>
                        <td className='px-4 py-2 border-2 border-black'>G. Vijay  Kumar</td>
                        <td className='px-4 py-2 border-2 border-black'>UG</td>
                        <td className='px-4 py-2 border-2 border-black'>Sr. Asst. Prof.</td>
                        <td className='px-4 py-2 border-2 border-black'>B.Tech.</td>
                        <td className='px-4 py-2 border-2 border-black'>M.Tech. (CSE)</td>
                        <td className='px-4 py-2 border-2 border-black'>-</td>
                        <td className='px-4 py-2 border-2 border-black'>16.11</td>
                        <td className='px-4 py-2 border-2 border-black'>19.07.2021</td>
                        <td className='px-4 py-2 border-2 border-black'>20150404-141037</td>
                        <td className='px-4 py-2 border-2 border-black'>M</td>
                        <td className='px-4 py-2 border-2 border-black'>SC</td>
                    </tr>
                    <tr>
                        <td className='px-4 py-2 border-2 border-black'>8</td>
                        <td className='px-4 py-2 border-2 border-black'>M. V. Lavanya</td>
                        <td className='px-4 py-2 border-2 border-black'>UG</td>
                        <td className='px-4 py-2 border-2 border-black'>Asst. Prof.</td>
                        <td className='px-4 py-2 border-2 border-black'>B.Tech. (IT)</td>
                        <td className='px-4 py-2 border-2 border-black'>M.Tech. (SE)</td>
                        <td className='px-4 py-2 border-2 border-black'>-</td>
                        <td className='px-4 py-2 border-2 border-black'>7.4</td>
                        <td className='px-4 py-2 border-2 border-black'>08.03.2021</td>
                        <td className='px-4 py-2 border-2 border-black'>3512-210312-155957</td>
                        <td className='px-4 py-2 border-2 border-black'>F</td>
                        <td className='px-4 py-2 border-2 border-black'>OC</td>
                    </tr>
                    <tr>
                        <td className='px-4 py-2 border-2 border-black'>9</td>
                        <td className='px-4 py-2 border-2 border-black'>P. Sangeetha</td>
                        <td className='px-4 py-2 border-2 border-black'>UG</td>
                        <td className='px-4 py-2 border-2 border-black'>Asst. Prof.</td>
                        <td className='px-4 py-2 border-2 border-black'>B.Tech.</td>
                        <td className='px-4 py-2 border-2 border-black'>M.Tech. (CSE)</td>
                        <td className='px-4 py-2 border-2 border-black'>-</td>
                        <td className='px-4 py-2 border-2 border-black'>4</td>
                        <td className='px-4 py-2 border-2 border-black'>05.07.2021</td>
                        <td className='px-4 py-2 border-2 border-black'>6732-161222-141635</td>
                        <td className='px-4 py-2 border-2 border-black'>F</td>
                        <td className='px-4 py-2 border-2 border-black'>SC-C</td>
                    </tr>
                    <tr>
                        <td className='px-4 py-2 border-2 border-black'>10</td>
                        <td className='px-4 py-2 border-2 border-black'>N. Madhavi</td>
                        <td className='px-4 py-2 border-2 border-black'>UG</td>
                        <td className='px-4 py-2 border-2 border-black'>Asst. Prof.</td>
                        <td className='px-4 py-2 border-2 border-black'>B.Tech. (IT)</td>
                        <td className='px-4 py-2 border-2 border-black'>M.Tech. (CSE)</td>
                        <td className='px-4 py-2 border-2 border-black'>-</td>
                        <td className='px-4 py-2 border-2 border-black'>1.2</td>
                        <td className='px-4 py-2 border-2 border-black'>02.05.2022</td>
                        <td className='px-4 py-2 border-2 border-black'>1642-220530-130955</td>
                        <td className='px-4 py-2 border-2 border-black'>F</td>
                        <td className='px-4 py-2 border-2 border-black'>BC-B</td>
                    </tr>
                    <tr>
                        <td className='px-4 py-2 border-2 border-black'>11</td>
                        <td className='px-4 py-2 border-2 border-black'>G. Rajasri</td>
                        <td className='px-4 py-2 border-2 border-black'>UG</td>
                        <td className='px-4 py-2 border-2 border-black'>Asst. Prof.</td>
                        <td className='px-4 py-2 border-2 border-black'>B.Sc</td>
                        <td className='px-4 py-2 border-2 border-black'>M.Tech., MCA</td>
                        <td className='px-4 py-2 border-2 border-black'>-</td>
                        <td className='px-4 py-2 border-2 border-black'>10.10</td>
                        <td className='px-4 py-2 border-2 border-black'>29.08.2022</td>
                        <td className='px-4 py-2 border-2 border-black'>8982-211206-130127</td>
                        <td className='px-4 py-2 border-2 border-black'>F</td>
                        <td className='px-4 py-2 border-2 border-black'>BC-B</td>
                    </tr>
                    <tr>
                        <td className='px-4 py-2 border-2 border-black'>12</td>
                        <td className='px-4 py-2 border-2 border-black'>B. Venkateswarlu</td>
                        <td className='px-4 py-2 border-2 border-black'>UG</td>
                        <td className='px-4 py-2 border-2 border-black'>Asst. Prof.</td>
                        <td className='px-4 py-2 border-2 border-black'>B.Tech.</td>
                        <td className='px-4 py-2 border-2 border-black'>M.Tech. (CN&IS)</td>
                        <td className='px-4 py-2 border-2 border-black'>-</td>
                        <td className='px-4 py-2 border-2 border-black'>11.08</td>
                        <td className='px-4 py-2 border-2 border-black'>10.10.2022</td>
                        <td className='px-4 py-2 border-2 border-black'>66150402-171228</td>
                        <td className='px-4 py-2 border-2 border-black'>M</td>
                        <td className='px-4 py-2 border-2 border-black'>SC</td>
                    </tr>
                    <tr>
                        <td className='px-4 py-2 border-2 border-black'>13</td>
                        <td className='px-4 py-2 border-2 border-black'>K Srilatha</td>
                        <td className='px-4 py-2 border-2 border-black'>UG</td>
                        <td className='px-4 py-2 border-2 border-black'>Asst. Prof.</td>
                        <td className='px-4 py-2 border-2 border-black'>B.Tech.</td>
                        <td className='px-4 py-2 border-2 border-black'>M.Tech. (SE)</td>
                        <td className='px-4 py-2 border-2 border-black'>-</td>
                        <td className='px-4 py-2 border-2 border-black'>7.06</td>
                        <td className='px-4 py-2 border-2 border-black'>19.12.2022</td>
                        <td className='px-4 py-2 border-2 border-black'>7269-150411-111837</td>
                        <td className='px-4 py-2 border-2 border-black'>F</td>
                        <td className='px-4 py-2 border-2 border-black'>OC</td>
                    </tr>
                    <tr>
                        <td className='px-4 py-2 border-2 border-black'>14</td>
                        <td className='px-4 py-2 border-2 border-black'>K Laxmi</td>
                        <td className='px-4 py-2 border-2 border-black'>UG</td>
                        <td className='px-4 py-2 border-2 border-black'>Asst. Prof.</td>
                        <td className='px-4 py-2 border-2 border-black'>B.Tech.</td>
                        <td className='px-4 py-2 border-2 border-black'>M.Tech. (SE)</td>
                        <td className='px-4 py-2 border-2 border-black'>-</td>
                        <td className='px-4 py-2 border-2 border-black'>15.06</td>
                        <td className='px-4 py-2 border-2 border-black'>31.12.2022</td>
                        <td className='px-4 py-2 border-2 border-black'>9674-160222-100939</td>
                        <td className='px-4 py-2 border-2 border-black'>F</td>
                        <td className='px-4 py-2 border-2 border-black'>BC-D</td>
                    </tr>
                    <tr>
                        <td className='px-4 py-2 border-2 border-black'>15</td>
                        <td className='px-4 py-2 border-2 border-black'>M. Anusha Sri</td>
                        <td className='px-4 py-2 border-2 border-black'>UG</td>
                        <td className='px-4 py-2 border-2 border-black'>Asst. Prof.</td>
                        <td className='px-4 py-2 border-2 border-black'>B.Tech.</td>
                        <td className='px-4 py-2 border-2 border-black'>M.Tech. (SE)</td>
                        <td className='px-4 py-2 border-2 border-black'>-</td>
                        <td className='px-4 py-2 border-2 border-black'>10</td>
                        <td className='px-4 py-2 border-2 border-black'>01.02.2023</td>
                        <td className='px-4 py-2 border-2 border-black'>8208-230202-135509</td>
                        <td className='px-4 py-2 border-2 border-black'>F</td>
                        <td className='px-4 py-2 border-2 border-black'>BC-D</td>
                    </tr>
                    <tr>
                        <td className='px-4 py-2 border-2 border-black'>16</td>
                        <td className='px-4 py-2 border-2 border-black'>A Bixapathi</td>
                        <td className='px-4 py-2 border-2 border-black'>UG</td>
                        <td className='px-4 py-2 border-2 border-black'>Asst. Prof.</td>
                        <td className='px-4 py-2 border-2 border-black'>B.Tech. (IT)</td>
                        <td className='px-4 py-2 border-2 border-black'>M.Tech. (SE)</td>
                        <td className='px-4 py-2 border-2 border-black'>-</td>
                        <td className='px-4 py-2 border-2 border-black'>10.04</td>
                        <td className='px-4 py-2 border-2 border-black'>26.02.2022</td>
                        <td className='px-4 py-2 border-2 border-black'>41150407-152301</td>
                        <td className='px-4 py-2 border-2 border-black'>M</td>
                        <td className='px-4 py-2 border-2 border-black'>SC</td>
                    </tr>
                    <tr>
                        <td className='px-4 py-2 border-2 border-black'>17</td>
                        <td className='px-4 py-2 border-2 border-black'>P. Shambhavi</td>
                        <td className='px-4 py-2 border-2 border-black'>UG</td>
                        <td className='px-4 py-2 border-2 border-black'>Asst. Prof.</td>
                        <td className='px-4 py-2 border-2 border-black'>B.Tech. (CSE)</td>
                        <td className='px-4 py-2 border-2 border-black'>M.Tech. (CSE)</td>
                        <td className='px-4 py-2 border-2 border-black'>-</td>
                        <td className='px-4 py-2 border-2 border-black'>1.2</td>
                        <td className='px-4 py-2 border-2 border-black'>02.05.2022</td>
                        <td className='px-4 py-2 border-2 border-black'>7634-220506-111553</td>
                        <td className='px-4 py-2 border-2 border-black'>F</td>
                        <td className='px-4 py-2 border-2 border-black'>BC-A</td>
                    </tr>
                    <tr>
                        <td className='px-4 py-2 border-2 border-black'>18</td>
                        <td className='px-4 py-2 border-2 border-black'>G . Raga Mounika</td>
                        <td className='px-4 py-2 border-2 border-black'>UG</td>
                        <td className='px-4 py-2 border-2 border-black'>Asst. Prof.</td>
                        <td className='px-4 py-2 border-2 border-black'>B.Tech. (CSE)</td>
                        <td className='px-4 py-2 border-2 border-black'>M.Tech. (CSE)</td>
                        <td className='px-4 py-2 border-2 border-black'>-</td>
                        <td className='px-4 py-2 border-2 border-black'>F</td>
                        <td className='px-4 py-2 border-2 border-black'>20.10.2023</td>
                        <td className='px-4 py-2 border-2 border-black'>0908-231021-102458</td>
                        <td className='px-4 py-2 border-2 border-black'>F</td>
                        <td className='px-4 py-2 border-2 border-black'>OC</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    </Card>
    <Card>
    <div className='pb-2 text-2xl font-bold text-center'>Teaching</div>
        <div>
            <table className='table-auto w-full border-2 border-black'>
            <thead>
                    <tr className='bg-gray-200 border-2 border-black'>
                        <th className='px-4 py-2 border-2 border-black'>Dept.</th>
                        <th className='px-4 py-2 border-2 border-black'>Existing</th>
                        <th className='px-4 py-2 border-2 border-black'>Resigned</th>
                        <th className='px-4 py-2 border-2 border-black'>M</th>
                        <th className='px-4 py-2 border-2 border-black'>F</th>
                    </tr>
            </thead>
            <tbody>
                    <tr>
                        <td className='px-4 py-2 border-2 border-black'>DS</td>
                        <td className='px-4 py-2 border-2 border-black'>18</td>
                        <td className='px-4 py-2 border-2 border-black'>-</td>
                        <td className='px-4 py-2 border-2 border-black'>7</td>
                        <td className='px-4 py-2 border-2 border-black'>11</td>
                    </tr>
                    <tr>
                        <td className='px-4 py-2 border-2 border-black'>Total</td>
                        <td className='px-4 py-2 border-2 border-black'>18</td>
                        <td className='px-4 py-2 border-2 border-black'>-</td>
                        <td className='px-4 py-2 border-2 border-black'>7</td>
                        <td className='px-4 py-2 border-2 border-black'>11</td>
                    </tr>

            </tbody>
            </table>
        </div>
    </Card>
    <div className={`flex justify-center w-full`}>
            <div className='mt-4 border border-slate-400 p-4 rounded sm:max-w-3xl lg:max-w-full'>
  
            <div className='flex flex-col justify-center'>
            <div className='flex justify-start justify-center'>
                <div className='px-2'>
                <img src="https://static.wixstatic.com/media/374af4_adaa6463205342eead87a7d02b4241a9~mv2.png/v1/fill/w_89,h_89,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/44_%20Geetanjali.png" alt=""  width="71" height="71"></img>

                </div>
                <div>
                    <div className='font-bold text-4xl'>
                        GEETHANJALI COLLEGE OF ENGINEERING AND TECHNOLOGY   
                    </div>
                    <div className='font-semibold flex justify-center'>
                        (UGC Autonomous,  Permanently Affiliated to JNTUH, Accredited by NAAC with 'A+' grade)
                    </div>
                </div>
                <div className='pt-12 font-bold text-md'>
                EAMCET CODE - GCTC

                </div>
            </div>
            <div className='flex justify-center font-bold text-3xl'>
            Department of Data Science(EA)        

            </div>
            <div className='font-semibold flex justify-center pb-2'>
            (Accredited by NBA in 2012, 2015, 2018 and 2022)

            </div>
            <div className='font-semibold flex justify-center pb-2'>
            Cheeryala(V), Keesara(M), Medchal (Dist.), Telangana, INDIA, Pin Code-501301.

 

            </div>

            
            </div>
        </div>
 

        </div>

</div>
}