import Card from "../components/Card";
import { Appbar } from "../components/Appbar";
import { Dropdown } from "../components/Dropdown";
import { Link } from "react-router-dom";
export const CentralFacilities = () => {
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
        <div className = 'text-2xl flex justify-center font-bold'>
            Central Facilities
        </div>
        <div className = 'pt-4 text-xl  font-bold'>
            Central Library
        </div>
        <div>
            <div className='grid grid-cols-2 gap-4'>
                <div className='text-lg text-justify'>
                    Library and Information centre available in the college needs a special mention as it receives accolades from all the inspecting teams that visited the college so far. The institute has a spacious CENTRAL LIBRARY in an independent building with an area of 1110 Sqm. spread over two floors. First Floor is accommodating OPAC, Periodicals, New Papers, Digital library, thesis, Reprographic facilities and Special reference. Second floor is accommodating circulation, References, Periodical back volumes, computer centre etc. Library has a modern infrastructure with a seating capacity of 250 students.
                    It has the collection of 6069 Titles and 35100 volumes of books as on September, 2018. It has subscribed to more than 5083 online journals of IEEE,K-HUB,DELNET,NATIONAL DIGITAL LIBRARY and it is subscribing more than 155 Journals in print.
                </div>
                <div className="pl-20">
                <img src="https://static.wixstatic.com/media/374af4_67dd47f879044b5db6f0123dc0ff3779~mv2.jpg/v1/fill/w_448,h_295,al_c,lg_1,q_80,enc_auto/Library.jpg" alt="Library.jpg" width="500" height="300" />
                </div>
            </div>
        </div>
        <div className="text-lg pt-4">
            Digital library with 100 systems to access E-journals, E-books, E-learning, Multimedia Centre and photocopying are made available for the convenience of the users NPTEL facility to access video lectures.
            Library & Information Centre provides uncompromising information and intellectual requirements to its students and faculty with user-friendly approach. It offers a fully integrated and dynamic environment for conducting academic study. Library is fully computerized with bar-coding system.
        </div>
        <div className = 'pt-4 text-xl  font-bold'>
            Digital Library
        </div>
        <div className='text-lg font-semibold'>
            <div>
                Availability of digital library content         :  Yes
            </div>
            <div>
                Number of courses                               :  387
            </div>
            <div>
                Number of e-books                               :  4278
            </div>
            <div>
                Availability of exclusive server                :  Yes
            </div>
            <div>
                Availability over Intranet/Internet             :  Yes; 24 systems, 10 Mbps
            </div>
            <div>
                Availability of exclusive space/room            :  Yes
            </div>
            <div>
                Number of users per day                         :  80
            </div>
        </div>
        <div className = 'pt-4 text-xl  font-bold'>
            Librarian
        </div>
        <div className='text-lg'>
            S. CHINNAPPALA NAIDU
        </div>
        <div className="text-lg">
            Cell: +91 9494207429, 9182058191
        </div>
        <div className="text-lg">
           E-mail: gcetlibrary2601@gmail.com, appalanaiduseera@yahoo.co.in
        </div>
        <div className = 'pt-4 text-xl  font-bold'>
            Department Library Coordinator: Mr. G. Rama Chandra Kumar, Asst. Professor
        </div>
        <div className = 'pt-4 text-xl  font-semibold'>
            For more information on central library <a href="https://www.gcetece.org/_files/ugd/374af4_984861c41c1c456d911cf36dfa41db03.docx?dn=Library.docx" target="_blank" className="wixui-rich-text__text underline underline-offset-1">CLICK HERE</a>
        </div>
        <div className = 'pt-4 text-xl  font-bold'>
            Sports
        </div>
        <div className="text-lg">
            Technically speaking we offer holistic education. It is a fact to reckon with that, the students while pursuing B.Tech degree are infact in their teen age. This is the most crucial time period in an individual's life. As an educational institute we have to cater to the moral, spiritual, physical and educational needs of the students. Its wrong on the part of the parents, society and educational institutes only to clamor for academic success alone of the students. Therefore, education should be a tool in enhancing the human qualities in the students. In this regard we have to remember that a sound body restores a sound mind; a sound mind develops a sound character; and a sound character builds a sound personality.
        </div>
        <div className="pt-2 text-lg">
            A vast sports outfield at Geethanjali offers excellent opportunity for the students to cheer up, have a relaxed outing and simultaneously play sports and games for their physical growth. Students have the facilities for playing football, handball, volleyball, shuttle and many other games. Our teams not only represented the college in various sports meets but also brought laurels to the institute by winning many prizes in various sports meets.
        </div>
        <div className = 'pt-2 text-xl  font-semibold'>
            Physical Director: Mr. M. Venkateshwarlu     
        </div>
        <div>
            <div className='grid grid-cols-2 gap-4'>
                <div className='text-justify'>
                    <div className = 'pt-4 text-xl  font-bold'>
                        Transport
                    </div>
                    <div className="text-lg">
                        Transport facility for the students is provided from all corners of the city. Driven by a team of trained drivers, 40 buses ply from all important places of the city catering to the needs of students and staff  for comfortable and safe journey. 
                    </div>
                    <div className="pt-2 text-lg">
                        The college is situated at a distance of 8 Kms from the ECIL X Roads. It is well connected to all the important places of the city. A good number of APSRTC buses ply to this region frequently. Alongside, college owns sufficient buses to bring the students on time to the college. The unique fact is that the students are taken care of in the buses too by senior faculty members, such that their needs are well attended to even during the journey hours. For each bus one faculty member acts as a coordinator who ensures maintenance of discipline in the bus also.
                    </div>
                    <ul className='list-disc pl-2 text-lg'>
                        <li>Public Transport (TS RTC Bus Route No. 241T) is available from Secunderabad to College.</li>
                        <li>College buses numbering 40 are operated covering twin cities.</li>
                    </ul>
                    <div className = 'pt-4 text-xl  font-semibold'>
                        To know more about the Bus Routes <a href="https://www.gcetece.org/_files/ugd/374af4_98a02f6b664f4eaca6cb5e5e7f8c8bce.docx?dn=Transport.docx" target="_blank" className="wixui-rich-text__text underline underline-offset-1"><span  className="wixui-rich-text__text"><span  className="wixui-rich-text__text"><span  className="wixui-rich-text__text">CLICK HERE&nbsp;</span></span></span></a>
                    </div>
                </div>
                <div>
                    <div className="pl-20">
                        <img src="https://static.wixstatic.com/media/374af4_9e950c6244ae4d51ba7e94dd3b065af9~mv2.jpg/v1/crop/x_0,y_237,w_845,h_440/fill/w_599,h_310,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/transport.jpg" alt="transport.jpg" width="500" height="700" />
                    </div>
                    <div className='text-xl font-bold pl-20 pt-4'>
                        Faculty in-charge for Transport:
                    </div>
                    <div className='pl-20 font-semibold text-lg'>
                         Mr. K. Mahender, Associate Professor - EEE Dept.
                    </div>
                    <div className='pl-20 text-lg font-bold pt-4'>
                        Transport Coordinator:
                    </div>
                    <div className='pl-20 font-semibold text-lg'>
                         Mr. Ghouse
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className='grid grid-cols-2'>
                <div>
                    <div className = 'pt-4 text-xl  font-bold'>
                        Alternate Power

                    </div>
                    <div className='text-justify text-lg'>
                        College has adequate power backup and UPS facilities. Entire electrical load of the college can be run on two Kirloskar diesel generators of 200 KVA and 125 KVA . 
                    </div>
                    <div className='pt-2 text-justify text-lg'>
                        All the laboratories are using 25 different sizes of UPS with a total capacity of 190 KVA. 
                    </div>
                    <div className="pl-10 pt-3">
                        <img src="https://static.wixstatic.com/media/374af4_96b959507d2044c8a17276b1acd87ebf~mv2.jpg/v1/fill/w_639,h_320,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Electricity.jpg" alt="Electricity.jpg" width="511" height="256" />                    
                    </div>
                </div>
                <div>
                    <div className="pl-10 pt-3">
                        <img src="https://static.wixstatic.com/media/374af4_61509299fdb44ea386b9d9baced2f94a~mv2.jpg/v1/fill/w_546,h_470,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/POWERBACKUP.jpg" alt="POWERBACKUP.jpg" width="437" height="376" />
                    </div>

                </div>

            </div>
        </div>
        <div>
            <div className='grid grid-cols-2'>
                <div>
                    <div className = 'pt-4 text-xl  font-bold'>
                        RO Water Supply
                    </div>
                    <div className='text-justify text-lg'>
                    College provides drinking water to the entire campus making use of the centralized RO water mechanism.                     
                    </div>
                </div>
                <div>
                    <div className="pl-10 pt-3">
                        <img src="https://static.wixstatic.com/media/374af4_1bbb8175babc4e8599da7091539eec2f~mv2.jpg/v1/crop/x_0,y_152,w_960,h_814/fill/w_376,h_319,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/RO.jpg" alt="RO.jpg" width="301" height="255" />                    
                    </div>

                </div>

            </div>
        </div>
        <div>
            <div className='grid grid-cols-2'>
                <div>
                    <div className = 'pt-4 text-xl  font-bold'>
                         Fire Extinguishers

                    </div>
                    <div className='text-justify text-lg'>
                        College is equipped with fire extinguishers which are  active fire protection devices used to extinguish the fires.                    </div>
                    </div>
                <div>
                    <div className="pl-10 pt-5">
                        <img src="https://static.wixstatic.com/media/374af4_10d75ddc6aa44ce48ccf47199c9a2e62~mv2.jpg/v1/crop/x_329,y_477,w_177,h_389/fill/w_156,h_344,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Fire1.jpg" alt="Fire1.jpg" width="125" height="27" />
                    </div>

                </div>

            </div>
        </div>
        <div>
            <div className='grid grid-cols-2'>
                <div>
                    <div className = 'pt-4 text-xl  font-bold'>
                        Bank ATM
                    </div>
                    <div className='text-justify text-lg'>
                    College has 24 hours ATM facility.  College has tie-up  with Canara Bank for ATM serivces                    </div>
                    </div>
                <div>
                    <div className="pl-10 pt-5">
                    <img src="https://static.wixstatic.com/media/374af4_b1af0b5060b24bba9bbf4bbde0625547~mv2.jpg/v1/crop/x_341,y_351,w_257,h_337/fill/w_260,h_341,al_c,lg_1,q_80,enc_auto/ATM.jpg" alt="ATM.jpg" width="208" height="273"/>                    
                    </div>

                </div>

            </div>
        </div>
        <div>
            <div className='grid grid-cols-2'>
                <div>
                    <div className = 'pt-4 text-xl  font-bold'>
                        Canteen
                    </div>
                    <div className='text-justify text-lg'>
                        The canteen is aesthetically designed and has a wide range of delicious and nutritious range of eateries prepared under hygienic conditions. The ambiance is apt and appetizing. Students find the music soothing and the place is just right for them to unwind.                    
                    </div>
                    <div className='text-justify text-lg'>
                         canteen has the sitting space of 560 Sq. Mtrs. Over 2050 students & staff make use of the facility on any day
                    </div>
                </div>
                <div>
                    <div className="pl-10 pt-5">
                        <img src="https://static.wixstatic.com/media/374af4_d307d6d5728e4718b2123524bb8d14a1~mv2.jpg/v1/fill/w_608,h_331,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/canteen_img6.jpg" alt="canteen_img6.jpg" width="486" height="265" />                    
                    </div>

                </div>

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