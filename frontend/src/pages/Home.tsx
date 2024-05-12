import { Appbar } from "../components/Appbar"
import Card from "../components/Card"
import { Dropdown } from "../components/Dropdown"
import { ImageSlider } from "../components/ImageSlider"
export const Home = () => {
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
                
                <Dropdown size={6} ButtonName="HOME" Buttons={['Vision and Mission', 'PEOs,POs and PSOs', 'Salient Features of the Department', 'Messages', 'Board of Studies', 'Approvals and Recognitions']}  Links={['www.google.com', 'www.google.com', 'www.google.com', 'www.google.com']} ></Dropdown>  
                <Dropdown size={4} ButtonName="Staff Desk" Buttons={['Faculty and Staff list', 'Roles and Responsibilities', 'Enrichment of Skills', 'Faculty as Resource Persons']}  Links={['www.google.com', 'www.google.com', 'www.google.com', 'www.google.com']} ></Dropdown>  
                <Dropdown size={12} ButtonName="Student Desk" Buttons={['Instructions', 'Student Nominal Rolls','Student Achievements','Academic Toppers','Higher Education and BEC','Training and Placement','Placements','Student Clubs','CACHE','Learning Resources','Department Library','Grievances']}  Links={['www.google.com', 'www.google.com', 'www.google.com', 'www.google.com']} ></Dropdown>  
                <Dropdown size={3} ButtonName="Research" Buttons={['Research and Consultancy Policy', 'Research Activities','Research Intiatives']}  Links={['www.google.com', 'www.google.com', 'www.google.com', 'www.google.com']} ></Dropdown>  
                <Dropdown size={10} ButtonName="Academics" Buttons={['Regulations and Syllabus', 'Academic Calenders','Academic Activities Carried out','Industry-institute interaction','Major Products','Mini Projects','Internships','Industrial Visits','Professional Bodies','TechExpo']}  Links={['www.google.com', 'www.google.com', 'www.google.com', 'www.google.com']} ></Dropdown>  
                <Dropdown size={7} ButtonName="TLP" Buttons={['Work Load and Additional duties', 'Time tables', 'Result Analysis', 'Innovations in Teaching', 'Project Based Learning', 'Value Added Courses','Specialized Groups']}  Links={['www.google.com', 'www.google.com', 'www.google.com', 'www.google.com']} ></Dropdown>  
                <Dropdown size={3} ButtonName="Labs" Buttons={['List of Laboratories', 'Software','Equipment Purchased']}  Links={['www.google.com', 'www.google.com', 'www.google.com', 'www.google.com']} ></Dropdown>  
                <Dropdown size={2} ButtonName="Centers of Excellence" Buttons={['VLSI Design', 'IOT and ES']}  Links={['www.google.com', 'www.google.com', 'www.google.com', 'www.google.com']} ></Dropdown>  
                <Dropdown size={4} ButtonName="Reports" Buttons={['Techno Digest - News Letter', 'Department Reports', 'Strategic Plan', 'MoUs and MoMs']}  Links={['www.google.com', 'www.google.com', 'www.google.com', 'www.google.com']} ></Dropdown>  
                <button className="border text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button">
                Alumni

                </button>
                <button className="border text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button">
                IQAC

                </button>
                <Dropdown size={1} ButtonName="Central Facilities" Buttons={['NSS']}  Links={['www.google.com', 'www.google.com', 'www.google.com', 'www.google.com']} ></Dropdown>  
                <button className="border text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button">
                CO-PO Attainments

                </button>
                <Dropdown size={1} ButtonName="Formats" Buttons={['Principal\'s Zone']}  Links={['www.google.com', 'www.google.com', 'www.google.com', 'www.google.com']} ></Dropdown>  

                <Dropdown size={6} ButtonName="More" Buttons={['Curriculum Design', 'Contact us', 'NBA Documents - 2022', 'Events of the Dept', 'Gallery', 'New Item']}  Links={['www.google.com', 'www.google.com', 'www.google.com', 'www.google.com']} ></Dropdown>  
            
            </div>
        </Appbar>
        <Card>
            <ImageSlider />
            <div className='mt-2 flex justify-start justify-between'>
            <button className="border text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button">
                <a href = 'https://www.geethanjaliinstitutions.com/engineering/img/downloads/GCET%20brochure.pdf'>Brochure</a>

            </button>
            <button className="border text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button">
                <a href = 'https://www.youtube.com/watch?v=9NEnZESNoHI&t=219s'>Video Prospectus</a>

            </button>
            <button className="border text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button">
                <a href = 'https://www.geethanjaliinstitutions.com/'>College Website</a>

            </button>

            </div>
        </Card>
        <Card>
            <div>
                <div className='text-lg font-semibold'>
                    WELCOME TO THE DEPARTMENT OF ECE 

                </div>
                <div className='pb-2 mb-2'>
                    Geethanjali College of Engineering and Technology (GCET) was established in the year 2005 under the aegis of Teja Educational Society constituted by a group of academicians and intellectuals. It became an autonomous institution in the year 2016. In the year 2017, the institution was accredited by NAAC with 'A' Grade and with a score of 3.36 on a scale of 4, it was the highest by any institution in AP and Telangana that went for accreditation for first time. In 2022, the institution is re-accredited by NAAC with A+ grade. 

​

                    Presently the college is offering Undergraduate programs in 10 disciplines namely CE, ME, ECE, EEE, IT, CSE, CSE(IoT), CSE(Cyber Security), CSE(AI&ML), CSE(Data Science) and Postgraduate programs in CSE & MBA. The college which is regarded as one of the premier institutions in and around Telangana  state has been carrying forward the legacy of quality education, guiding thousands of students in shaping their future and moulding them into responsible engineers that the country would be proud of.

​

                    The Department of Electronics and Communication Engineering (ECE) was started in the year2005 with an initial intake of 60 students. Right from its inception it is continuously striving to impart quality education and promoting competitive spirit among students for academic excellence. The intake was enhanced to 240 w.e.f 2013-14 academic year. The department has well equipped laboratories, good infrastructure, highly qualified and experienced faculty. A good number of research papers are published by the faculty in National/International conference proceedings/Journals. The department has signed MOUs with various organizations to provide real time training to the students. The department has successfully completed two DST sponsored research projects. It also has two ongoing research projects sponsored by DRDO. The department has successfully completed a project under MODROB Scheme sanctioned by AICTE. The department has received several patents in the field of image processing and microwave engineering. The department is extending research consultancy services to various industries such as M/s VEM Technologies Pvt. Ltd., M/S Malladi Photonics Ltd.
                </div>
            </div>
        </Card>
        <Card>
            <div className='grid grid-cols-2 gap-4'>
                <div className='text-lg font-semibold'>
                    Announcements
                </div>
                <div className='text-lg font-semibold'>
                    Examination Notifications
                </div>
                <div className='text-lg font-semibold'>
                    Important Circulars and Notifications
                </div>
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