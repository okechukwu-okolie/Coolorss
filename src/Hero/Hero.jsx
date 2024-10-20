
import Button from '../Components/Button.jsx'
import '../index.css'
// import {logo} from 'https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=9917&theme=light&period=monthly'

function Hero(props){
    return(
        <>
        <div className='hero'>
            <div className='heroText'>
                <h1>The super fast <br />color palettes <br />generator!</h1>
                <h5>Create the perfect palette or get inspired by <br /> 
                thousands of beautiful color  schemes</h5>
                <Button color='heroBtn1' text='Start the generator!' />
                <Button color='heroBtn2' text='Explore trending palettes' />
                <button className='heroBtn3'><img src="./cupImageAndText.png" alt="" /> </button>
            </div>
            <div>
                <img className='heroImage' src="./dynamicLaptopImage.png" alt="" />
            </div>
        </div>
        
        </>
    );
}
export default Hero