function Logo(props){
    return(
        <div>
            <img className={props.style} src={props.logo} alt="" />
        </div>
    );
}
export default Logo