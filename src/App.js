
import './App.css';
import About from './components/About';
import StyledContactMe from './components/StyledContactMe';
import AnchorLink from "react-anchor-link-smooth-scroll";

function App() {

  return (
    <>

    <div className="mainbody">


    <div className="navbar">
      <ul >
        <li><AnchorLink href='#projxts'>Projects</AnchorLink></li>
        <li><AnchorLink href='#exp'>Experience</AnchorLink></li>
        <li ><AnchorLink href='#skill-div'>Skills</AnchorLink></li>
        <li ><AnchorLink href='#contactme'>Contact</AnchorLink></li>
   
        {/* <li ><a href='About'>About</a></li> */}
      </ul>
    </div>
    <div className="mainIntro">  

  
        <div className="first-intro"  >
           <p className='header'>Hi, I am Shivam.</p>
          
         </div>
         <div className="second-intro">
          <p>And I am a self Learned Developer
          </p>
          
         </div>
         <div className="third-intro">
          <p> Persuing my Computer Science and Engineering degree  <br>
          </br>
          Development is one of my keen interest <br>
            </br>
            Currently diving into the world of open source and blockchain
          </p>
             <br/>
             <br/>
        
          <hr style = {{ position : "absolute", width : "70%",color : "green",border : " 0.5px solid green"}} />
         </div>


   </div>
   </div>
     
  
   {/* PROJEXT DIV */}
<div className="projext" id ='projxts'>
   <div className="projext-div">
    <div className="primary">
       <div className="p1">
          <div className="p11">
             <p>Text-Utils</p>
          </div>
          <hr style={{marginRight : '2em',color:"green",border : " 0.5px solid green", padding : "0",height:"130px"}}/>
          <div className="p12">
                   <p>01</p>
           </div>

       </div>
       <hr style={{ border : " 0.5px solid green" ,width:"100%" ,marginTop : '-0.56em'}}/>
       <div className="p2" >
         <p style={{marginTop : "1em"  }}>Text-Util is SPA based on react function based components build for assisting in all your text related problems.
         </p>
         <p style={{marginTop : "1em" }}>It uses the Javascript string function to deal with the text and offers functionality as reading time, copying, converting into Upper/Lower cases.</p>
         
            
       </div>
    </div>
    <div className="prod-Img1">
       <p></p>
    </div>
   </div>
<br/>
<br/>
   <div className="projext-div">
    <div className="primary">
       <div className="p1">
          <div className="p11">
             <p>News Today</p>
          </div>
          <hr style={{marginRight : '2em',color:"green",border : " 0.5px solid green", padding : "0",height:"120px"}}/>
          <div className="p12">
                   <p>02</p>
           </div>

       </div>
       <hr style={{ border : " 0.5px solid green" ,width:"100%" ,marginTop : '-0.56em'}}/>
       <div className="p2">
         <p style={{marginTop : "1em"}}>NewsMonkey project is made using react and its function based components</p>
         <p style={{marginTop : "1em"}}>NewsMonkey uses the newsapi to fetch real time news and also offers categories to browse around the news</p>
       </div>
    </div>
    <div className="prod-Img2">
       <p></p>
    </div>
   </div>
</div> 
   <br/>
   <br/>
   
<hr style={{ border : " 0.5px solid green" ,width:"70%" ,marginTop : '3em'}}/>

{/* EXPERIENCES DIV */}

<div className="experiencs" id='exp'>
    <div className="exp-div">
     <div className="primary">
       <div className="p1">
          <div className="p11-exp">
             <p>POSTMAN STUDENT EXPERT</p>
          </div>
       
       </div>
       <hr style={{ border : " 0.5px solid green" ,width:"640px" ,marginTop : '-0.56em' ,marginLeft : "7em"}}/>
       <div className="p2-exp">
         <p style={{width :"100%" ,marginTop : "1em" ,fontSize : '17.2px',fontWeight: "500"}}>✦ Postman is an API  development tool which helps to build, test and modify APIs</p>
         <p style={{width :"100%" ,marginTop : "1em" ,fontSize : '17.2px',fontWeight: "500"}}>✦ Get along with the GET, POST, PUT to work with the API </p>
         <p style={{width :"100%" ,marginTop : "1em" ,fontSize : '17.2px',fontWeight: "500"}}>✦ Opens up a huge field of fucntionality and usability in your projects</p>
       </div>
    </div>
    <div className="exp-Img">
       <p></p>
    </div>
   </div>
</div>
<br/>
 
   
<hr style={{ border : " 0.5px solid green" ,width:"70%" }}/>
      

      {/* SKILLS DIV */}
      <div className="skill-div" id='skill-div'>

      
        
        <div className="languages-skills">
         <div className="guyPhoto">
          
         </div>
         <div className="languages">
         <div className="skillOne">
         <div className="a"></div>

            <div className="b"></div>
            <div className="c"></div>
            <div className="d"></div>
            <div className="e"></div>
         </div>

         <div className="skillTwo">
         
            <div className="f"></div>
            <div className="g"></div>
            <div className="h"></div>
            <div className="i"></div>
            <div className="j"></div>
         </div>
       
         </div>
        
         
           
        </div>
        <br/>
        <br/>
        <hr style={{ border : " 0.5px solid green" ,width:"70%" }}/>

       <div className="frameworks-skills">
         

           <div className="frameworks">
            <div className="tool1">

              <div className="bootstrap">
              </div>
              <div className="react">
              </div>
            </div>
            <div className="tool2">
               <div className="linux">
               </div>
               <div className="git">
                 
               </div>
            </div>
           </div>
           <div className="framePhoto">
       </div>
   </div>

<br/>
<br/>
   <hr style={{ border : " 0.5px solid green" ,width:"100%" ,marginRight :"300px"}}/>
<div className="contactMe" id='contactme'>
           <StyledContactMe/>


</div>   
<br/>
<br/>
<hr style={{ border : " 0.5px solid green" ,width:"100%" ,marginRight :"300px"}}/>
<div className="footer">
 
      
         <div className="socials">
             <a href='https://www.linkedin.com/in/shivam-purohit-94922819b/'> <div className="linkdin">
             
            </div> </a>
            <a href='https://twitter.com/ShivamP49036806'>
            <div className="twitter">

            </div></a>
            <a href='https://github.com/shivam-Purohit'>
            <div className="github">
              
            </div>
            </a>
         </div>
      </div>
      </div>

     
   </>
  );
}

export default App;
