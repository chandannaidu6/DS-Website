import { Appbar } from "../components/Appbar"
import Card from "../components/Card"
import { Dropdown } from "../components/Dropdown"
import { Link } from "react-router-dom"
export const Instructions = () => {

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
                <Dropdown size={10} ButtonName="Academics" Buttons={['Regulations and Syllabus', 'Academic Calenders','Academic Activities Carried out','Industry-institute interaction','Major Products','Mini Projects','Internships','Industrial Visits','Professional Bodies','TechExpo']}  Links={['/syllabus', 'https://www.example.com', 'https://www.example.com', 'https://www.example.com','https://www.example.com','https://www.example.com','/internships','/industrial','https://www.example.com','https://www.example.com']} dropdownLink="/academics" ></Dropdown>  
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
            <div className='text-center font-bold text-2xl'>
                <div>
                    Geethanjali College of Engineering and Technology
                </div>
                <div>
                    (UGC Autonomous, Permanently Affiliated to JNTUH and Accredited by NAAC with ‘A’)
                </div>
                <div>
                    Department of ECE
                </div>
                <div>
                    (NBA Accredited)
                </div>
            </div>
            <div className="text-center text-xl font-semibold">
                Instructions & Guidelines for Students
            </div>
            <div className="pt-10 text-xl font-semibold">
                Instructions:
            </div>
            <div className="text-lg">
                Students are required to follow the under-mentioned instructions and guidelines:
                <ol className="list-decimal pl-5 text-justify">
                    <li>Students should not involve in any Ragging activities or in any other activity that might tarnish the image of the institution. Any indulgence in these activities will be viewed seriously.</li>
                    <li>Regular attendance is mandatory. No student is expected to be absent for the classes without prior written permission from the HoD. In case of emergencies, a leave request has to be made to HoD or to the Counselor over phone and, in such cases, the absentee should bring a leave letter counter signed by the parent on the first day of his/her arrival to the college after availing the emergency leave.</li>
                    <li>Students should strictly follow the college timings and should be punctual. Students should not leave the campus during working hours without the written permission from HoD.</li>
                    <li>Attendance in the Department/College level programmes like Workshops, Guest lectures etc. is mandatory.</li>
                    <li>Students are required to attend all the placement training programmes conducted in the campus without fail and participate in the related events actively</li>
                    <li>Usage of cell phones, iPods and any other electronic gadgets except Calculators and Laptops, is strictly prohibited during the class. In case of violation, the same will be confiscated and will not be returned till the parents of the students submit an undertaking that such incidents will not be repeated.</li>
                    <li>Students must maintain absolute discipline in the class rooms, laboratories and in all the common areas. Students are strictly instructed not to loiter in the corridors and common areas and not to spend time in the canteen other than during the time reserved for them.</li>
                    <li>Students shall not indulge in any sort of malpractice during the examinations/tests. If they do so, they are liable to be punished as per the autonomous regulations.</li>
                    <li>Students should wear the Identity card as long as they are in the campus and in the college buses. Without Identity card, they are not allowed into the campus including the common areas like canteen, library etc.</li>
                    <li>In case of loss of Identity card, student has to submit a letter to the HoD through class teacher requesting for a duplicate Identity card on the same day.</li>
                    <li>Students should follow the dress code in letter and spirit as specified. They are prohibited from wearing T-shirts, Jeans & other fancy design dresses. Boys should come in formals with tucked-in shirt and shoes. The girls should wear Chudidhars.</li>
                    <li>Students are required to attend all the Laboratory classes in the proper uniform along with the updated record book.</li>
                    <li>The students should understand that the property of the college is precious and is provided to fulfill their own needs. Hence all the furniture and other facilities are to be utilized carefully and should not deform or spoil them by scribbling on the desks/boards/walls/in the library books and seats in the buses.</li>
                    <li>Students are exhorted to keep the campus clean and green. They should not throw litter here and there. Students should develop the habit of putting all the unwanted things such as waste papers, used pens etc., in the dustbin which has a lid.</li>
                    <li>Students should abide by all the rules and regulations amended by the college/ department from time to time.</li>                
                </ol>

            </div>
            <div className="text-lg">
            <div className="pt-10 text-xl font-semibold">
                Guidelines:
            </div>
                <ol className="list-decimal pl-5 text-justify">
                    <li>Students are advised to concentrate in their holistic development during their tenure in the college. They are profusely encouraged to make use of the Library, laboratories, R&D lab and Internet facilities for carrying their projects/improving their technical and academic skills.</li>
                    <li>Students are encouraged to actively interact with the faculty members in the pursuit of achieving excellence in academics. They are advised to meet their faculty mentors and take suggestions from them.</li>
                    <li>Always occupy the front seats available in the class room. Never leave the front seats vacant and occupy the back seats. It is desirable that only 2 students sit in a bench whenever and wherever it is possible.</li>
                    <li>Students should participate in all the technical seminars and symposiums that they come across and present technical papers. For this purpose, they can approach the Professors, Mentors or any other faculty members for guidance.</li>
                    <li>Students are advised to improve their both oral and written communication skills as these skills are mandatory for getting them a placement and for further progress in their career. They may resolve to converse only in English in the class room initially and later in the campus. This practice of speaking only in English with the friends and faculty, will definitely result in improved oral communication skills. They are advised to read English news paper daily to improve the reading comprehension.</li>
                    <li>Students should carry out as many technical projects as they can during their study in the college which helps them to assimilate the concepts of a course in a better way.</li>
                    <li>Students are advised to make use of the college bus facility to attend the college. In case of unavoidable circumstances only, they can use a two-wheeler. However, driving a two wheeler with more than one pillion rider is risky and should be avoided. (Triple riding is an offence).</li>
                    <li>Students need to spend at least two hours at home towards academics every day with complete concentration.</li>
               </ol>

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