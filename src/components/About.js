import React from 'react';
import Image from 'react-bootstrap/Image';
import Me from '../assets/images/profile.png';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import {FaHtml5, FaCss3, FaReact, FaAngular, FaGithub, FaBootstrap} from 'react-icons/fa';
import {SiJavascript, SiMaterialUi, SiTypescript, SiJquery, SiPhp, SiMysql, SiXampp, SiVisualstudio} from 'react-icons/si';
import {GrDocumentPdf, GrDocumentWord, GrDocumentZip} from 'react-icons/gr';

const About = () => {
    return (
        <div id='about'>
            <div className='about-text-me-container'>
              
                    <div className='about-text-container'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Sed blandit libero volutpat sed cras ornare arcu. 
                        Sed viverra tellus in hac habitasse. Amet porttitor eget 
                        dolor morbi non arcu risus quis varius. Magna eget est lorem 
                        ipsum. Ac turpis egestas maecenas pharetra convallis posuere 
                        morbi leo urna. Sed odio morbi quis commodo odio aenean sed 
                        adipiscing diam. Tellus in hac habitasse platea dictumst 
                        vestibulum rhoncus est pellentesque. Semper feugiat nibh sed 
                        pulvinar proin. Nulla at volutpat diam ut venenatis tellus in. 
                        Mauris a diam maecenas sed enim.
                    </div>
                    <div className='about-me-container'>
                        <div className='about-me'><Image src={Me} className='about-img-me' roundedCircle alt='Will Peterson' /></div>
                        <div className='about-who-am-i'>Will Peterson</div>
                    </div>
            </div>
            <div className='about-icons-resume-container'>    
               
                    <div className='about-icons-container'>
                        <div className='about-icons'>
                            <FaHtml5 size={50} />
                        </div>
                        <div className='about-icons'>
                            <FaCss3 size={50} />
                        </div>
                        <div className='about-icons'>
                            <SiJavascript size={50} />
                        </div>
                        <div className='about-icons'>
                            <FaReact size={50} />
                        </div>
                        <div className='about-icons'>
                            <FaAngular size={50} />
                        </div>
                        <div className='about-icons'>
                            <FaGithub size={50} />
                        </div>
                        <div className='about-icons'>
                            <FaBootstrap size={50} />
                        </div>
                        <div className='about-icons'>
                            <SiMaterialUi size={50} />
                        </div>
                        <div className='about-icons'>
                            <SiTypescript size={50} />
                        </div>
                        <div className='about-icons'>
                            <SiJquery size={50} />
                        </div>
                        <div className='about-icons'>
                            <SiPhp size={50} />
                        </div>
                        <div className='about-icons'>
                            <SiMysql size={50} />
                        </div>
                        <div className='about-icons'>
                            <SiXampp size={50} />
                        </div>
                        <div className='about-icons'>
                            <SiVisualstudio size={50} />
                        </div>
                    </div>
                    <div className='about-resume-container'>
                        <div><a href='www.williamrpeterson.com' ><GrDocumentPdf size={100} className='about-resume' /></a></div>
                        <div><a href='www.williamrpeterson.com' ><GrDocumentWord size={100} className='about-resume' /></a></div>
                        <div><a href='www.williamrpeterson.com' ><GrDocumentZip size={100} className='about-resume' /></a></div>
                    </div>
            </div>
        </div>
    );
}

export default About;











// import React from 'react';
// import Image from 'react-bootstrap/Image';
// import Me from '../assets/images/profile.png';
// // import Container from 'react-bootstrap/Container';
// // import Row from 'react-bootstrap/Row';
// // import Col from 'react-bootstrap/Col';
// import {FaHtml5, FaCss3, FaReact, FaAngular, FaGithub, FaBootstrap} from 'react-icons/fa';
// import {SiJavascript, SiMaterialUi, SiTypescript, SiJquery, SiPhp, SiMysql, SiXampp, SiVisualstudio} from 'react-icons/si';
// import {GrDocumentPdf, GrDocumentWord, GrDocumentZip} from 'react-icons/gr';

// const About = () => {
//     return (
//         <div id='about'>
//             <div style={{}} >
//                 <Row >
//                     <Col xs={12} sm={12} md={8} lg={8} style={{fontSize: '2rem', backgroundColor: 'beige', border: '1px solid black'}}>
//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
//                         sed do eiusmod tempor incididunt ut labore et dolore magna 
//                         aliqua. Sed blandit libero volutpat sed cras ornare arcu. 
//                         Sed viverra tellus in hac habitasse. Amet porttitor eget 
//                         dolor morbi non arcu risus quis varius. Magna eget est lorem 
//                         ipsum. Ac turpis egestas maecenas pharetra convallis posuere 
//                         morbi leo urna. Sed odio morbi quis commodo odio aenean sed 
//                         adipiscing diam. Tellus in hac habitasse platea dictumst 
//                         vestibulum rhoncus est pellentesque. Semper feugiat nibh sed 
//                         pulvinar proin. Nulla at volutpat diam ut venenatis tellus in. 
//                         Mauris a diam maecenas sed enim.
//                     </Col>
//                     <Col xs={12} sm={12} md={4} lg={4} style={{alignSelf: 'center', backgroundColor: 'beige', border: '1px solid black'}}>
//                         <Row style={{justifyContent: 'center'}}><Image src={Me} roundedCircle alt='Will Peterson' /></Row>
//                         <Row style={{justifyContent: 'center', fontFamily: 'PermanentMarker', fontSize: '2rem'}}>Will Peterson</Row>
//                     </Col>
//                 </Row>
//                 <Row style={{}}>
//                     <div xs={12} sm={12} md={6} lg={6} style={{backgroundColor: 'beige', border: '1px solid black'}}>
//                         <div className='about-icons'>
//                             <FaHtml5 size={50} />
//                         </div>
//                         <div className='about-icons'>
//                             <FaCss3 size={50} />
//                         </div>
//                         <div className='about-icons'>
//                             <SiJavascript size={50} />
//                         </div>
//                         <div className='about-icons'>
//                             <FaReact size={50} />
//                         </div>
//                         <div className='about-icons'>
//                             <FaAngular size={50} />
//                         </div>
//                         <div className='about-icons'>
//                             <FaGithub size={50} />
//                         </div>
//                         <div className='about-icons'>
//                             <FaBootstrap size={50} />
//                         </div>
//                         <div className='about-icons'>
//                             <SiMaterialUi size={50} />
//                         </div>
//                         <div className='about-icons'>
//                             <SiTypescript size={50} />
//                         </div>
//                         <div className='about-icons'>
//                             <SiJquery size={50} />
//                         </div>
//                         <div className='about-icons'>
//                             <SiPhp size={50} />
//                         </div>
//                         <div className='about-icons'>
//                             <SiMysql size={50} />
//                         </div>
//                         <div className='about-icons'>
//                             <SiXampp size={50} />
//                         </div>
//                         <div className='about-icons'>
//                             <SiVisualstudio size={50} />
//                         </div>
//                     </div>
//                     <div xs={12} sm={12} md={6} lg={6} style={{backgroundColor: 'beige', border: '1px solid black', }}>
//                         <GrDocumentPdf size={100} className='about-resume' />
//                         <GrDocumentWord size={100} className='about-resume' />
//                         <GrDocumentZip size={100} className='about-resume' />
//                     </div>
//                 </Row>
//             </div>
//         </div>
//     );
// }

// export default About;











