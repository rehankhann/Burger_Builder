import React,{ Component } from 'react';
import Modal from '../components/Modal/Modal';


const errorhandler = (WrappedComponent , axios) => {
    return class extends Component{
        state = {
            error:null,
            showerror:'none',
            continuehide:'none'
        }


        componentWillMount(){
            console.log('Calling Component will mount');
            this.requestinterceptors = axios.interceptors.request.use(req =>{
                this.setState({error:null});
                return req;
            });
            this.responseinterceptors = axios.interceptors.response.use(res => res, error =>{
                this.setState({error:error , showerror:'block'});
            })
        }

        componentWillUnmount(){
            console.log('Calling Component will unmount');
            axios.interceptors.request.eject(this.requestinterceptors)
            axios.interceptors.response.eject(this.responseinterceptors);
        }

        CloseError = () =>{
            this.setState({error:null , showerror:'none'});
        }
        render(){
            return(
                <div className="">
                    <Modal continuehide={this.state.continuehide} hide={this.state.showerror} dismisspopup={this.CloseError}>
                        <p>{this.state.error ? this.state.error.message : null}</p>
                    </Modal>
                    <WrappedComponent {...this.props}/>
                </div>
            );
        }
    }
}

export default errorhandler;

