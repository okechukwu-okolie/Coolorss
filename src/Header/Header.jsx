import Button from '../Components/Button.jsx'
import '../index.css'

const Header = ()=>{
    return (
        <div className="header">
            <>
            <img className='headerImage1' src="https://coolors.co/assets/img/logo.svg" alt="" />
            <img className='headerImage2' src="./chatboyInfo.png" alt="" />
            </>
            <div>
                <ul>
                    <li>Tools</li>
                    <li id='link2'>Go Pro</li>
                    <li id='link3'>|</li>
                    <li>Sign In</li>
                    <Button color='headerButton' text='Sign Up'/>
                </ul>
                
            </div>
            
        </div>
    );
}

export default Header