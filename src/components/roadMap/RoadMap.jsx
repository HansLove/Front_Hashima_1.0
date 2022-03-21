import React from 'react'
import './estilo.css'
import Twitter from '../image/twitter_1.png'
import Insta from '../image/instagram_1.png'
import Reddit from '../image/reddit_1.png'

function RoadMap() {
    return (
        <div className='div_main_roadmap'>
            <div style={{display:'inline-block',width:'65%'}}>
           <h1>Stage 1</h1> 


           <ul>
               <li>Launch first generation of Hashimas</li>
               <li>Achive 10, 000 users</li>
               <li>Medium documents target: 3</li>
           </ul>

           <h1>Stage 2</h1> 

           <ul>
               <li>Launch of first season of 'Hashimas the story'</li>
               <li>Medium documents target: 15</li>
               <li>Deploy the 'Genetic Contract' for deflacionary interaction with Hashimas</li>
               <h1 style={{fontSize:'2.5rem'}}>Social Media:</h1>
               <ul>
                    <li>Twitter:1000 followers 
                        <img 
                        style={{marginLeft:'2%'}}
                        src={Twitter} width='5%'></img>
                    </li>
                    <li>Instagram:3000 followers
                    <img 
                    style={{marginLeft:'2%'}}
                    src={Insta} width='5%'></img>
                    </li>
                    <li>Reddit:1000 followers
                    <img 
                    style={{marginLeft:'2%'}}
                    src={Reddit} width='5%'></img>
                    </li>
               </ul>
           </ul>

           <h1>Stage 3</h1> 

           <ul>
               <li>Fiction universe </li>
               <li>End of season 1</li>
               <li>Stars competitions for the next Hashima generation</li>
               <li>Development of digital brains</li>
               <li>Launch of 'Hashimas Battle Arena'</li>
           </ul>

           <h1>Stage 4</h1> 

           <ul>
               <li>Launch of Hashimas second generation</li>
               <li>IsAlive protocol launch</li>
               <li>Upgrade of mining power</li>
               <h1 style={{fontSize:'2.5rem'}}>Social Media:</h1>
               <ul>
                    <li>Twitter:10,000 followers 
                        <img 
                        style={{marginLeft:'2%'}}
                        src={Twitter} width='5%'></img>
                    </li>
                    <li>Instagram:30,000 followers
                    <img 
                    style={{marginLeft:'2%'}}
                    src={Insta} width='5%'></img>
                    </li>
                    <li>Reddit:5,000 followers
                    <img 
                    style={{marginLeft:'2%'}}
                    src={Reddit} width='5%'></img>
                    </li>
               </ul>
           </ul>

           </div>


           
        </div>
    )
}

export default RoadMap
