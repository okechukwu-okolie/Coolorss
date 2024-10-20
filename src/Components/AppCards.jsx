const AppCards = (props)=>{
    return (
        
            <div className = {props.styling}>
                <img  src={props.image} alt="" />
                <h2>{props.text}</h2>
                <p>{props.smallText1}</p>
                <p>{props.smallText2}</p>
                <p>{props.smallText3}</p>
                <span>{props.reveal1}</span>
                <span>{props.reveal2}</span>
                <span>{props.reveal3}</span>
            </div>
            
    );
}
export default AppCards