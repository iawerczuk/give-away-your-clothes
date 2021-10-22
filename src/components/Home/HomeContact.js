import React,{ useState } from 'react';

import TitleDecor from '../utils/TitleDecor';

const HomeContact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");
    const [sent, setSent] = useState(false);

    const validateName = name => {
        const re = /^[a-zA-Z]+$/
        console.log(re.test(String(name).toLowerCase()))
        return name.length !== 0 ? re.test(String(name).toLowerCase()) : false;
    }

    const validateEmail = email => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        console.log(re.test(String(email).toLowerCase()))
        return email.length !== 0 ? re.test(String(email).toLowerCase()) : false;
    }

    const validateMsg = msg => {
        const msgLength = msg.length;
        console.log(msgLength > 120 ? true : false);
        return msgLength > 120 ? true : false;
    }

    const handleOnSubmit = e => {
        e.preventDefault();
        const data = {
            name: name,
            email: email,
            msg: msg
        };
        if (validateName(name) && validateEmail(email) && validateMsg(msg)) {
            fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            setName("");
            setEmail("");
            setMsg("");
            setSent(true);
        }
    }
    return (
        <section className="contact-container" id='contact'>
            <div className='empty'></div>
            <div className='form-container'>
            <TitleDecor>
                Skontaktuj się z nami
                {sent ? <p className='sent'>Wiadomość została wysłana!<br></br>Wkrótce się skontaktujemy.</p> : null}
            </TitleDecor>
            <form className="contact-form" onSubmit={handleOnSubmit}>
                <div className="contact-data">
                    <label>
                        Wpisz swoje imię
                        <input 
                            id="name" 
                            name="name" 
                            type="text" 
                            placeholder="Krzysztof"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            style={name.length === 0 || validateName(name) ? null : { borderBottom:"2px solid carmin"}}
                        />
                        {/* <p style={{color:"carmin"}}>Podane imię jest nieprawidłowe!</p>  */}
                    </label>
                    <label>
                            Wpisz swój email
                        <input 
                            id="email" 
                            name="email" 
                            type="email" 
                            placeholder="abc@xyz.com"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            style={email.length === 0 || validateEmail(email) ? null : { borderBottom:"2px solid carmin"}}
                        />
                        {/* <p style={{color:"carmin"}}>Podany email jest nieprawidłowy!</p>  */}
                        
                    </label>
                </div>
                <div className="contact-message">
                    <label htmlFor="message">Wpisz swoją wiadomość</label>
                    <textarea 
                        id="message" 
                        name="message" 
                        placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing <br></br>elit, sed do eiusmod tempor incididunt ut labore et dolore <br></br> magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br></br>ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        value={msg}
                        onChange={e => setMsg(e.target.value)}
                        style={msg.length ===0 || validateMsg(msg) ? null :{ borderBottom:"2px solid carmin"}}
                        />
                        {/* <p style={{color:"carmin"}}>Wiadomość musi mieć conajmniej 120 znaków!</p>  */}

                </div>
            </form>
            <button className='submit' id="submit" type="submit" value="Wyślij">Wyślij</button>
            </div>
        </section>
    );
  }
  export default HomeContact;