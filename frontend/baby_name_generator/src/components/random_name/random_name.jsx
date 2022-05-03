




const RandomName = (props)=>{

    function showName(){
        alert(props.name.name)
    }
    return(
        <div>
            <button onClick={showName} type="button" class="btn btn-warning">click</button>
            <div className="name-field">
                <p className="shown-name">{props.name.name}</p>
            </div>

        </div>
    );
};


export default RandomName;