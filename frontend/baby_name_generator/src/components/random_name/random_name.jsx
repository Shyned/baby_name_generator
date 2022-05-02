




const RandomName = (props)=>{

    function showName(){
        alert(props.name.name)
    }
    return(
<button onClick={showName}>Generate Name</button>


    );
};


export default RandomName;