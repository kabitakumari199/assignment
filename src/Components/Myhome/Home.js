import React from 'react';
import Header from '../Header/Header';


class MyContacts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            saveUpdate:false,
            first_name:'',
            contact_no:'',
            username:'',
            email:''


        }
    }

    componentDidMount(){
        const loggingIn = localStorage.getItem('user-token');
        const userInfo = JSON.parse(localStorage.getItem('userData'));

        this.setState({
            first_name:userInfo.first_name,
            contact_no:userInfo.contact_no,
            username:userInfo.username,
            email:userInfo.email
        });
   
        if(!loggingIn){
          this.props.history.push("/");
        }
     }

     handleChange = (e)=> {
        const { name, value } = e.target;
        console.log('name',name);
        this.setState({[name]: value });
    }

     handleSubmit = (event) =>{
        event.preventDefault();
        this.setState({ saveUpdate: true });
         alert('Updated Sucessfully!');
     }

  
       render() {
        
        const {first_name,username,email,contact_no, saveUpdate} = this.state;
   

         return (
            <>
            <Header />
                <div className="container">
                <div className="col-md-6 col-md-offset-3">
             
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" className="form-control" name="first_name" value={first_name} onChange={this.handleChange}/>
                        
                            
                    </div>
                    <div className='form-group'>
                        <label htmlFor="number">Contact Number</label>
                        <input type="number" className="form-control" name="contact_no" value={contact_no} onChange={this.handleChange}/>
                            
                     </div>
                    <div className='form-group'>
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" readOnly name="username" value={username} />
                             
                    </div>
                    <div className='form-group'>
                        <label htmlFor="email">Email</label>
                        <input type="text" className="form-control" name="email" value={email} onChange={this.handleChange}/>
                        
                    </div>
                    
                    <div className="form-group">
                        <button className="btn btn-primary">Save</button>
                        {saveUpdate && 
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
                        
                    </div>
                </form>
                </div>
              </div>
            </>
        );
    }
}

export default MyContacts;

