import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Options from "../utils/Options";
import { useGlobalContext } from "../context/GlobalContext";

const CreateAvatar = () => {
    const { setAvatarSrc } = useGlobalContext();
    const navigate = useNavigate();

    // State values
    const [username, setUsername] = useState("");

    const [background, setBackground] = useState("");
    const [baseColor, setBaseColor]  = useState("");
    const [eyes, setEyes] = useState("");
    const [eyeBrows, setEyeBrows] = useState("");
    const [nose, setNose] = useState("");
    const [ears, setEars] = useState("");
    const [mouth, setMouth] = useState("");
    const [hair, setHair] = useState("");
    const [shirt, setShirt] = useState("");
    const [hairColor, setHairColor] = useState("");
    const [shirtColor, setShirtColor] = useState("");

    // Active state
    const [bgActive, setBgActive] = useState(null);
    const [baseActive, setBaseActive] = useState(null);
    const [eyesActive, setEyesActive] = useState(null);
    const [eyeBrowsActive, setEyeBrowsActive] = useState(null);
    const [noseActive, setNoseActive] = useState(null);
    const [earsActive, setEarsActive] = useState(null);
    const [mouthActive, setMouthActive] = useState(null);
    const [shirtActive, setShirtActive] = useState(null);
    const [hairActive, setHairActive] = useState(null);
    const [hairColorActive, setHairColorActive] = useState(null);
    const [shirtColorActive, setShirtColorActive] = useState(null);

    // Src and error states
    const [src, setSrc] = useState(null);
    const [error, setError] = useState(null);

    // Lightbox state⚡
    const [show, setShow] = useState(false);
    

    // Avatar imported options
    const { backgroundValues, skinValues, hairColorAndShirtColorValues, eyeValues, eyeBrowsValues, earValues, noseValues, mouthValues, hairValues, shirtValues } = Options();

    const handleAvatar = async () => {
        // State object
        const avatar = { username, background, baseColor, eyes, eyeBrows, nose, ears, mouth, hair, shirt, hairColor, shirtColor };
        // State array
        const values = [ username, background, baseColor, eyes, eyeBrows, nose, ears, mouth, hair, shirt, hairColor, shirtColor ];

        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(avatar)
        }

        try{
            // Checking if at least one option is chosen in each field
            values.forEach(value => {
                if(!value){
                    setShow(false);
                    throw Error("Choose at least one option in each field");
                }
                else{
                    setShow(true);
                    setError(null);
                }
            })

            const res = await fetch("http://localhost:2004/api/user/avatar", options);
            const resData = await res.json();

            if(res.ok){
                setSrc(resData);
                setAvatarSrc(resData);
            }
        }
        catch(error){
            console.log(error);
            setError(error.message);
            setShow(false);
        };
    };

    // Save Avatar
    const saveAvatar = (e) => {
        e.target.textContent = "Saved⚡";
        //Navigate to signup
        setTimeout(() => {
            navigate("/signup");
        }, 900)
    }

    return (
        <div className="Avatar-div">
            <div className="Avatar">
                <h2>Create your Personal Avatar</h2>

                <div className="options">
                    <div className="username">
                        <label htmlFor="username">Username*</label>
                        <input 
                        id="username"
                        type="text"
                        value={username}
                        onChange={e => setUsername(e.target.value)} 
                        />
                    </div>

                    <div className="avatar-bg">
                        <h3>Background</h3>

                        <div className="list">
                            {backgroundValues.map((value, index) => (
                                <div 
                                key={index} 
                                className={`${value} ${index === bgActive ? "active" : "*"}`} 
                                onClick={() => {setBackground(value); setBgActive(index)}}
                                ></div>
                            ))}
                        </div>
                    </div>

                    <div className="skin-color">
                        <h3>Skin</h3>

                        <div className="list">
                            {skinValues.map((value, index) => (
                                <div 
                                key={index} 
                                className={`skin-${value} ${index === baseActive ? "active" : "*"}`} 
                                onClick={() => {setBaseColor(value); setBaseActive(index)}}
                                ></div>
                            ))}
                        </div>
                    </div>

                    <div className="eyes">
                        <h3>Eyes</h3>

                        <div className="list">
                            {eyeValues.map((value, index) => (
                                <div 
                                key={index} 
                                className={index === eyesActive ? "active" : "*"} 
                                onClick={() => {setEyes(value.eye); setEyesActive(index)}}
                                >
                                    <img src={`./images/AvatarKit/${value.src}.svg`} alt={value.eye} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="eye-brows">
                        <h3>Eye Brows</h3>

                        <div className="list">
                            {eyeBrowsValues.map((value, index) => (
                                <div 
                                key={index} 
                                className={index === eyeBrowsActive ? "active" : "*"} 
                                onClick={() => {setEyeBrows(value.brows); setEyeBrowsActive(index)}}
                                >
                                    <img src={`./images/AvatarKit/${value.src}.svg`} alt={value.brows} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="nose">
                        <h3>Nose</h3>

                        <div className="list">
                            {noseValues.map((value, index) => (
                                <div 
                                key={index} 
                                className={index === noseActive ? "active" : "*"} 
                                onClick={() => {setNose(value.nose); setNoseActive(index)}}
                                >
                                    <img src={`./images/AvatarKit/${value.src}.svg`} alt={value.nose} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="ears">
                        <h3>Ears</h3>

                        <div className="list">
                            {earValues.map((value, index) => (
                                <div 
                                key={index} 
                                className={index === earsActive ? "active" : "*"} 
                                onClick={() => {setEars(value.ear); setEarsActive(index)}}
                                >
                                    <img src={`./images/AvatarKit/${value.src}.svg`} alt={value.ear} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mouth">
                        <h3>Mouth</h3>

                        <div className="list">
                            {mouthValues.map((value, index) => (
                                <div 
                                key={index} 
                                className={index === mouthActive ? "active" : "*"}  
                                onClick={() => {setMouth(value.mouth); setMouthActive(index)}}
                                >
                                    <img src={`./images/AvatarKit/${value.src}.svg`} alt={value.mouth} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="hair">
                        <h3>Hair</h3>

                        <div className="list">
                            {hairValues.map((value, index) => (
                                <div  
                                key={index} 
                                className={index === hairActive ? "active" : "*"}  
                                onClick={() => {setHair(value.hair); setHairActive(index)}}
                                >
                                    <img src={`./images/AvatarKit/${value.src}.svg`} alt={value.hair} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="hair-color">
                        <h3>Hair Color</h3>

                        <div className="list">
                            {hairColorAndShirtColorValues.map((value, index) => (
                                <div 
                                key={index} 
                                className={`hair-${value} ${index === hairColorActive ? "active" : "*"}`} 
                                onClick={() => {setHairColor(value); setHairColorActive(index)}}
                                ></div>
                            ))}
                        </div>
                    </div>

                    <div className="shirt">
                        <h3>Shirt</h3>

                        <div className="list">
                            {shirtValues.map((value, index) => (
                                <div 
                                key={index} 
                                className={index === shirtActive ? "active" : "*"}  
                                onClick={() => {setShirt(value.shirt); setShirtActive(index)}}
                                >
                                    <img src={`./images/AvatarKit/${value.src}.svg`} alt={value.shirt} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="shirt-color">
                        <h3>Shirt Color</h3>

                        <div className="list">
                            {hairColorAndShirtColorValues.map((value, index) => (
                                <div 
                                key={index} 
                                className={`shirt-${value} ${index === shirtColorActive ? "active" : "*"}`} 
                                onClick={() => {setShirtColor(value); setShirtColorActive(index)}}
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Error field */}
                { error &&  <div className="error">{error}</div>}

                {/* Create */}
                <button className="create" onClick={handleAvatar}>Create Avatar</button>
            </div>



            {/* Created avatar lightbox */}
            <div className={`overlay ${show ? "show" : "hide"}`}>
                <button className="close">
                    <img src="./images/close-white.png" alt="Close button" onClick={() => setShow(false)} />
                </button>

                { src &&  <img src={src} className="result-avatar" alt="" />}

                <button className="save" onClick={saveAvatar}>Save</button>
            </div>
        </div> 
     );
}
 
export default CreateAvatar;