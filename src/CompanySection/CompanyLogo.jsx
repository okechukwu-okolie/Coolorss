import Logo from "../Components/logo";
import '../index.css'

const CompanyLogo = ()=>{
    return(
        <div className="companyLogo">
            <h2>Used by 5+ million designers and by top companies</h2>
            <div className="logoFlex">
                <Logo style = 'logo1' logo = './disney.png'/>
                <Logo style = 'logo2' logo = './dream-removebg-preview.png'/>
                <Logo style = 'logo3' logo = './warnerbro-removebg-preview.png'/>
                <Logo style = 'logo4' logo = './netflix.png'/>
                <Logo style = 'logo5' logo = './airbnb.png'/>
                <Logo style = 'logo6' logo = './dropbox.png'/>
                <Logo style = 'logo7' logo = './hansvro-removebg-preview.png'/>
                <Logo style = 'logo8' logo = './ubisoft.png'/>
                <Logo style = 'logo9' logo = './ea.png'/>
                <Logo style = 'logo10' logo = './apple2.png'/>
            </div>
            <Logo style = 'logo11' logo = './microsoft.png'/>
        </div>
    );
}
export default CompanyLogo