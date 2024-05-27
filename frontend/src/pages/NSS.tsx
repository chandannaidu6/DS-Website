import { Appbar } from "../components/Appbar"
import Card from "../components/Card"
import { Dropdown } from "../components/Dropdown"
import { ImageSlider } from "../components/ImageSlider"
import { Link } from "react-router-dom"
export const NSS = () => {
    const imageUrls = [
        "https://static.wixstatic.com/media/374af4_bc4e112406d04e33a406ea499d996572~mv2.jpg/v1/fill/w_722,h_469,al_c,lg_1,q_80,enc_auto/374af4_bc4e112406d04e33a406ea499d996572~mv2.jpg",
        "https://static.wixstatic.com/media/374af4_bc4e112406d04e33a406ea499d996572~mv2.jpg/v1/fill/w_722,h_469,al_c,lg_1,q_80,enc_auto/374af4_bc4e112406d04e33a406ea499d996572~mv2.jpg",
       
      ];
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
            <div className='flex justify-center items-center pb-10'>
                <img src="https://static.wixstatic.com/media/374af4_f5f2ec3a25dd45cb9dd822e2d64bacec~mv2.jpeg/v1/fill/w_134,h_134,al_c,lg_1,q_80,enc_auto/NSSlogo.jpeg" alt="NSSlogo.jpeg" width="107" height="107" />
                
                <div className='pb-2 text-2xl font-bold text-center'>National Service Scheme (NSS)</div>
            </div>
            <div className='flex justify-end pb-4 font-semibold text-2xl'>
                    Program officer - R. Odaiah, Associate Professor
            </div>
            <div className='text-xl'>
                
The National Service Scheme (NSS) is an Indian government-sponsored public service program conducted by the Ministry of Youth Affairs and Sports of the Government of India. Popularly known as NSS, the scheme was launched in Gandhiji's Centenary year in 1969. Aimed at developing student's personality through community service, NSS is a voluntary association of young people in Colleges, Universities and at +2 level working for a campus-community (esp. Villages) linkage.
            </div>
            <div className='text-center p-4'>
            <a
                            href="https://docs.google.com/document/d/1SbyXxzfLD65DUDBMxyHgQHpLc16pNNwG/edit?usp=sharing&ouid=106780119802873164960&rtpof=true&sd=true"
                           className='text-xl underline'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            2023-2024
                        </a>
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