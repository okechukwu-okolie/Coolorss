import AppCards from '../Components/AppCards';
import '../index.css'
// import {logo} from './src/assets/apple.png'

const CardSection = ()=>{
    return(
        <div className='cardSection'>
            <AppCards styling='appImg0' image='./apple.png' 
                      text='iOS App'
                      smallText1='Create, browse and'
                      smallText2=' save palettes on the'
                      smallText3='go'
                      reveal1='View on'
                      reveal2='the App'
                      reveal3='store'/>
                      

            <AppCards styling='appImg1' image='./android.png' 
                      text='Andriod App'
                      smallText1='Thousands of'
                      smallText2='palettes in your'
                      smallText3='pocket'
                      reveal1='View on '
                      reveal2='the play'
                      reveal3='store'/>

            <AppCards styling='appImg2' image='./figma.png' 
                      text='Figma Pluggin'
                      smallText1='All palettes right in'
                      smallText2='your work space'
                      smallText3=' '
                      reveal1='Install'
                      reveal2='Now'
                      reveal3=' '/>

            <AppCards styling='appImg3' image='./chrome.png' 
                      text='Chrome Extension'
                      smallText1='get and edit a palette'
                      smallText2='every new tab'
                      smallText3=' '
                      reveal1='Add to'
                      reveal2='Chrome'
                      reveal3=' '/>

            <AppCards styling='appImg4' image='./adobe.png' 
                      text='Adobe Extension'
                      smallText1='Use coolors with'
                      smallText2='your favorite tools'
                      smallText3=' '
                      reveal1='Download'
                      reveal2=' '
                      reveal3=' '/>


        </div>
    );
}
export default CardSection