import { Appbar } from "../components/Appbar"
import Card from "../components/Card"
import { Dropdown } from "../components/Dropdown"
import { Link } from "react-router-dom"
export const Act = () => {
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
                    <div className='font-bold text-4xl whitespace-normal-nowrap'>
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
    <div className='pb-2 text-2xl font-bold text-center'>Publications</div>
        <div className='overflow-x-auto'>
            <table className='table-auto w-full border-2 border-black'>
            <thead>
                    <tr className='bg-gray-200 border-2 border-black whitespace-normal'>
                        <th className='px-4 py-2 border-2 border-black whitespace-normal'>S.No</th>
                        <th className='px-4 py-2 border-2 border-black whitespace-normal'>Name of the author/s</th>
                        <th className='px-4 py-2 border-2 border-black whitespace-normal'>Title of Paper</th>
                        <th className='px-4 py-2 border-2 border-black whitespace-normal'>Name of Journal</th>
                        <th className='px-4 py-2 border-2 border-black whitespace-normal'>Year of Publication</th>
                        <th className='px-4 py-2 border-2 border-black whitespace-normal'>ISSN Number</th>
                        <th className='px-4 py-2 border-2 border-black whitespace-normal'>Link to the Recognition in UGC Enlistment of the Journal</th>

                    </tr>
            </thead>
            <tbody>
                    <tr>
                        <td className='px-4 py-2 border-2 border-black whitespace-normal'>1</td>
                        <td className='px-4 py-2 border-2 border-black whitespace-normal'>Ambedkar Kanapala, Suresh Dara, Jinka Sreedhar, Ankit Vidyarthi, Deepak Gupta, Punit Gupta</td>
                        <td className='px-4 py-2 border-2 border-black whitespace-normal'>Recommendation of Electronic Mobile Gadgets Using Infused Decision Score with Mobile Radiation and Federated Sentiment Score</td>
                        <td className='px-4 py-2 border-2 border-black whitespace-normal'>IEEE TRANSACTIONS ON CONSUMER ELECTRONICS</td>
                        <td className='px-4 py-2 border-2 border-black whitespace-normal'>01-01-2024</td>
                        <td className='px-4 py-2 border-2 border-black whitespace-normal'>0098-3063</td>
                        <td className='px-4 py-2 border-2 border-black whitespace-normal'><a href="https://ieeexplore.ieee.org/abstract/document/10382180" className="text-blue-500 underline">https://ieeexplore.ieee.org/abstract/document/10382180</a></td>

                    </tr>
                    <tr>
                        <td className='px-4 py-2 border-2 border-black whitespace-normal'>2</td>
                        <td className='px-4 py-2 border-2 border-black whitespace-normal'>Mr. Suresh Chimkode, Dr. Milind Singh</td>
                        <td className='px-4 py-2 border-2 border-black whitespace-normal'>A Study on Automatic Based Database Schema Description from Shapeless Necessities Document</td>
                        <td className='px-4 py-2 border-2 border-black whitespace-normal'>Journal of Systems Engineering and Electronics</td>
                        <td className='px-4 py-2 border-2 border-black whitespace-normal'>01-02-2024</td>
                        <td className='px-4 py-2 border-2 border-black whitespace-normal'>1671-1793 & Vol 34, Issue 3, Page no 128-147</td>
                        <td className='px-4 py-2 border-2 border-black whitespace-normal'><a href="https://jseepublisher.com/volume-34-issue-3-2024/" className="text-blue-500 underline">https://jseepublisher.com/volume-34-issue-3-2024/</a></td>

                    </tr>
                    <tr>
                        <td className='px-4 py-2 border-2 border-black whitespace-normal'>3</td>
                        <td className='px-4 py-2 border-2 border-black whitespace-normal'>G Soma Sekhar, Shubhangi Mahadik, Attili Venkata Ramana, Pundru Chandra Shaker Reddy, N Pughazendi and S Asif</td>
                        <td className='px-4 py-2 border-2 border-black whitespace-normal'>Prediction of Traffic Accidents Using Deep Learning Ensemble Model</td>
                        <td className='px-4 py-2 border-2 border-black whitespace-normal'>Publisher: IEEE 2023 International Conference on Innovative Computing, Intelligent Communication and Smart Electrical Systems (ICSES)</td>
                        <td className='px-4 py-2 border-2 border-black whitespace-normal'>Date of Conference: 14-15 December 2023</td>
                        <td className='px-4 py-2 border-2 border-black whitespace-normal'>Electronic ISBN:979-8-3503-1920-0 DOI: 10.1109/ICSES60034.2023.10465425</td>
                        <td className='px-4 py-2 border-2 border-black whitespace-normal'></td>

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