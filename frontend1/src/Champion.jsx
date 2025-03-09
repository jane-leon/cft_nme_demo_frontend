function Champion(props){
    const won = <h2>" {props.name} has won a championship "</h2>
    const none = <h2>" {props.name} has won no championship"</h2>
    return (
        (props.champion) ? won : none


    );
}
export default Champion