import { useState } from "react";

const CreateAvatar = () => {
    // State values
    const [background, setBackground] = useState("");

    // Avatar specifications options🐱‍👤
    const backgroundValues = ["b6e3f4", "c0aede", "d1d4f9", "ffd5dc", "ffdfbf"];
    const skinValues = ["77311d", "ac6651", "f9c9b6"];
    const eyeValues = ["normal", "round", "smiling"];
    const noseValues = ["curve", "pointed", "tound"];
    const earValues = ["attached", "detached"];
    const mouthValues = ["frown", "laughing", "nervous", "pucker", "sad", "smile", "smirk", "suprised"];
    const hairValues = ["dannyPhantom", "dougFunny", "fonze", "full", "pixie", "mrClean", "mrT", "turban"];
    const shirtValue = ["collared", "crew", "open"];

    const hairColorValues = ["000000", "6bd9e9", "9287ff", "77311d", "ac6651", "d2eff3", "e0ddff", "f4d150", "f9c9b6", "fc909f", "ffeba4", "ffedef", "ffffff"];
    const shirtColorValues = ["000000", "6bd9e9", "9287ff", "77311d", "ac6651", "d2eff3", "e0ddff", "f4d150", "f9c9b6", "fc909f", "ffeba4", "ffedef", "ffffff"];

    return ( 
        <div className="Avatar">
            <h2>Create your Personal Avatar</h2>

            <div className="options">
                <div className="username">
                    <label htmlFor="username">Username*</label>
                    <input 
                    id="username"
                    type="text" 
                    />
                </div>

                <div className="background">
                    { backgroundValues.map(backgroundValue => (
                        <div className="" onClick={() => setBackground(backgroundValue)}>{backgroundValue}</div>
                    )) }
                </div>

                {/* Coming soon🌌 */}
                <div className="skin-color"></div>

                <div className="eyes"></div>

                <div className="nose"></div>

                <div className="ears"></div>

                <div className="mouth"></div>

                <div className="hair"></div>
                <div className="hair-color"></div>

                <div className="shirt"></div>
                <div className="shirt-color"></div>
            </div>

            <button>Create Avatar</button>
        </div>
     );
}
 
export default CreateAvatar;