import { useState } from "react";
import Options from "../utils/Options";

const CreateAvatar = () => {
    // State values
    const [username, setUsername] = useState("");

    const [background, setBackground] = useState("");
    const [baseColor, setBaseColor]  = useState("");
    const [eyes, setEyes] = useState("");
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
    const [noseActive, setNoseActive] = useState(null);
    const [earsActive, setEarsActive] = useState(null);
    const [mouthActive, setMouthActive] = useState(null);
    const [shirtActive, setShirtActive] = useState(null);
    const [hairActive, setHairActive] = useState(null);
    const [hairColorActive, setHairColorActive] = useState(null);
    const [shirtColorActive, setShirtColorActive] = useState(null);

    // Avatar imported options
    const { backgroundValues, skinValues, hairColorAndShirtColorValues, eyeValues, earValues, noseValues, mouthValues, hairValues, shirtValues } = Options();

    const handleAvatar = () => {
        const avatar = { username, background, baseColor, eyes, nose, ears, mouth, hair, shirt, hairColor, shirtColor };
        console.log(avatar);
    }

    return ( 
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

            <button onClick={handleAvatar}>Create Avatar</button>
        </div>
     );
}
 
export default CreateAvatar;