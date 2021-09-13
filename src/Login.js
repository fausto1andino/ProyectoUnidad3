import React from 'react';
const Login =(props)=>{

    const{
        email, 
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAcoount,
        emailError,
        passwordError
    }=props;

    return(
        <section className="login">
            <div className="loginContainer">
                <label>Correo</label>
                <input 
                type="text" 
                autoFocus required value={email}
                onChange={(e)=>setEmail(e.target.value)}/>
                <p className="errorMsg">{emailError}</p>
                <label>Contraseña</label>
                <input 
                type="password" 
                required value={password}
                onChange={(e)=>setPassword(e.target.value)}/>
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    {hasAccount ?(
                        <>
                            <button className="logoutf" onClick={handleLogin}>Ingresar</button>
                            <p>¿No tiene una cuenta?
                                <span onClick={()=>setHasAcoount(!hasAccount)}>Crear Cuenta</span>
                            </p>
                        </>
                    ):(
                        <>
                        <button className="logoutf" onClick={handleSignup}>Crear Cuenta</button>
                        <p>¿Tiene una cuenta?
                            <span onClick={()=>setHasAcoount(!hasAccount)} >Ingresar</span>
                        </p>
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}
export default Login;