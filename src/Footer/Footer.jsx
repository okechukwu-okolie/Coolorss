import FooterContent from "../Components/FooterContent";

const Footer =()=>{
    return (
        <div className="footer">
        <div className="footerFlex">
            <FooterContent footerHeading='Tools' 
                            footerText1='Generate your palettes'
                            footerText2='Explore popular palettes'
                            footerText3='Extract palette from image'
                            footerText4='Contrast checker'
                            footerText5='Preview palettes on designs'
                            footerText6='Recolor your own design'
                            footerText7='color picker'
                            footerText8='Browse free fonts'
                            footerText9=' '
                            footerText10=''/>
            
            
            <FooterContent footerHeading='More' 
                            footerText1='List of colors'
                            footerText2='Browse gradients'
                            footerText3='Create a gradient'
                            footerText4='MAke a gradient palette'
                            footerText5='Image converter'
                            footerText6='Create a collage'
                            footerText7='Font generator'
                            footerText8=' '
                            footerText9=' '
                            footerText10=' '/>
            <div>
            <FooterContent footerHeading='Jobs' 
                            footerText1='Find your next job'
                            footerText2='Post a job'
                            footerText3=' '
                            footerText4=' '
                            footerText5=' '
                            footerText6=' '
                            footerText7=' '
                            footerText8=' '
                            footerText9=' '
                            footerText10=' '/>


                <FooterContent footerHeading='Apps' 
                            footerText1='iOS App'
                            footerText2='Android App'
                            footerText3='Figma Plugin'
                            footerText4='Adobe Extension'
                            footerText5='Chrome Extension'
                            footerText6='Instagram Page'
                            footerText7=' '
                            footerText8=' '
                            footerText9=' '
                            footerText10=' '/>
            </div>
            
            <FooterContent footerHeading='Company' 
                            footerText1='Pricing'
                            footerText2='License'
                            footerText3='Terms of service'
                            footerText4='Privacy policy'
                            footerText5='Cookie policy'
                            footerText6='Manage cookies'
                            footerText7='Help center'
                            footerText8='Advertise'
                            footerText9='Affiliate'
                            footerText10='Contact'/>

                            
        </div>
        <hr />
        <div>
            <div className="footerImageTextFlex">
            <p> &#169; coolors by <strong>Fabrizo Bianchi.</strong>From a creative to all the others.</p>
            <div >
                <a href=""><img className="footerImg1" src="/twitter.png" alt="" /></a>
                <a href=""><img className="footerImg2" src="/facebook.png" alt="" /></a>
                <a href=""><img className="footerImg3" src="/pintrest.png" alt="" /></a>
                <a href=""><img className="footerImg4" src="./instagram.png" alt="" /></a>
                <a href=""><img className="footerImg5" src="./productHunt.png" alt="" /></a>
            </div>
            </div>
        </div>
        
           
        </div>
        
        
    );
}
export default Footer