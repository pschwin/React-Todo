import React from 'react';


class TaskForm extends React.Component{

    constructor(props){
       
        super(props);
        this.state = {
            formItem: 'Add a Task'
        };
        
    }

    handleChanges = event =>{
        this.setState({[event.target.name]: event.target.value});
    }

    submitItem = event =>{
        this.setState({formItem: ""});
        this.props.addItem(event, this.state.formItem);
    }

    render(){
    return(

        <div>
            <form>
                <input 
                    type="text" 
                    value={this.state.formItem}
                    name ="formItem"
                    onChange ={this.handleChanges}
                />
                <button onClick={this.submitItem}>Add</button>
            </form>
            
        </div>

    )

    }
    
}

export default TaskForm;