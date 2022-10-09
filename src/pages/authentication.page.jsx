import axios from "axios";

import { useEffect } from "react";
import { getRedirectResult } from 'firebase/auth';
import { auth, signInWithGoogleRedirect } from "../utils/firebase/firebase.utils";
import GoogleButton from "react-google-button";
import { AutoCenter, Space } from "antd-mobile";
import './authentication.css'

const Authenticate = () => {
    useEffect(() => {
        const authenticate = async () => {
            const response = await getRedirectResult(auth);

            if(response) {
                await axios.post('https://projeto-aquila.herokuapp.com/api/users/', {
                    'id': response.user.uid,
                    'name': response.user.displayName,
                    'email': response.user.email
                });
            }
        }

        authenticate();
    }, []);

    // return (

        return(
            <div>               
    
                <main>
    
                    <div className="card-post" >
                     <div className="logo">
                     <img src="img/Aquila_preto.png"/>
                     </div>
                    
                        <div className="line-post" ></div>
    
                        <div className="card-body-post" >
    
                            <form >
    
                                <div className="fields" >
                                    <label>Email</label>
                                    <input type="email" name="email" />                                    
                                </div>
    
                                <div className="fields" >
                                    <label>senha</label>
                                    <input type="password" name="description"/>                                    
                                </div>   
                                
                                <div className="btn-post" >
                                    <button type="submit" >Enviar</button>
                                </div>
                                <div className="enter">
                                <GoogleButton label="Entrar com Google" onClick={signInWithGoogleRedirect}></GoogleButton>
                                </div>
    
                            </form>
    
                        </div>
    
                    </div>
    
                </main>
    
            </div>
        )
    }
    
        
        
        
        // <div className="container">
        //      <header >
        //       <img src="img/Aquila_preto.png"/>
        //     </header>          
        //     <div>
        //     <form>
        //     <label>Email</label>
        //       <input type="text" name="email" placeholder="email" />
        //       <label>Senha</label>
        //       <input type="text" name="passoword" placeholder="senha" />              
        //     </form>
        //     <button type="submit">Enviar</button>
        //     </div>
           
        //     <GoogleButton label="Entrar com Google" onClick={signInWithGoogleRedirect}></GoogleButton>
            {/* <AutoCenter>
                <Space direction="vertical">
                    <AutoCenter>
                    
                    </AutoCenter>
                    
                </Space>
            </AutoCenter> */}
//         </div>
//     );
// }

export default Authenticate;
