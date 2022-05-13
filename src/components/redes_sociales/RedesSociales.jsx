import React from 'react'
import Instagram from '../../image/instagram_1.png'
import Twitter from '../../image/twitter_1.png'
import Reddit from '../../image/reddit_1.png'
import Telegram from '../../image/telegram_3.png'
import Youtube from '../../image/youtube.png'
import './estilo.scss'


function RedesSociales() {
    var array=[
        
        {name:'Twitter',image:Twitter,link:'https://twitter.com/HashimaUniverse'},
        {name:'Instagram',image:Instagram,link:'https://www.instagram.com/hashimasdescentralizedanimals/?hl=es'},
        {name:'Reddit',image:Reddit,link:'https://www.reddit.com/r/HashimaUniverse/'},
        {name:'Telegram',image:Telegram,link:'https://t.me/+VwdhMvNQYHQzM2Zh'},
        {name:'Youtube',image:Youtube,link:'https://www.youtube.com/channel/UCFJ1AKFzdMhNshT8cZd2UfA'},

    ]

    const hacer=(item)=>{
        
        // window.location.href = item.link
        window.open(item.link)

    }

    return (
        <div className='div_navbar_main'>
           
                {array.map(item=>
                <img 
                onClick={()=>hacer(item)}
                    className='img_navbar'
                    src={item.image}></img>
                    
                

                )}
            
       
            
        </div>
    )
}

export default RedesSociales
