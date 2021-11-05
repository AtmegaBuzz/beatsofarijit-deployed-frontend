import React from "react";
import styles from "./socialMedia.module.css";

//  icons imports 
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';

function* Gen(){
    let i = 0;
    while(true){
        yield i++
    }
}

const keyGen = Gen();

const handles = [
    {
        icon:<InstagramIcon className={styles.Icons}/>,
        name:"Instagram",
        link:"https://www.instagram.com/arijit_saikiaa/"
    },
    {
        icon:<FacebookIcon  className={styles.Icons}/>,
        name:"Facebook",
        link:"#"
    },
    {
        icon:<YouTubeIcon  className={styles.Icons}/>,
        name:"Youtube",
        link:"https://www.youtube.com/channel/UCYCFLRuyIpUJaHTGm4WROLg"
    },
    {
        icon:<TwitterIcon  className={styles.Icons}/>,
        name:"Twitter",
        link:"#"
    }
]



export default function SocialMediaFooter(){

    

    const redirect_to_handel = (link)=>{
        window.open(link,'_blank')
    }

    return(

        <div className={styles.SocialCont}>
            

            {
                handles.map(data=>{
                    return(
                        
                        <div 
                        key={keyGen.next().value}
                        onClick={()=>{redirect_to_handel(data.link)}}
                        className={styles.SocialMedia}>
                            <i>{data.icon}</i>
                            <p className={styles.HandleName}>{data.name}</p>
                        </div>

                    )
                })
            }
            

        </div>

    );

}