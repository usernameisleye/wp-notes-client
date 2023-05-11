const Options = () => {
    // Avatar specifications options🐱‍👤
    const skinValues = ["77311d", "ac6651", "f9c9b6"];
    const backgroundValues = ["b6e3f4", "c0aede", "d1d4f9", "ffd5dc", "ffdfbf"];
    const hairColorAndShirtColorValues = ["000000", "6bd9e9", "9287ff", "77311d", "ac6651", "d2eff3", "e0ddff", "f4d150", "f9c9b6", "fc909f", "ffeba4", "ffedef", "ffffff"];

    const eyeValues = [
        {
            eye: "eyes",
            src: "normal-eye"
        }, 
        {
            eye: "round",
            src: "round-eye"
        }, 
        {
            eye: "smiling",
            src: "smiling-eye"
        }
    ];
    const eyeBrowsValues = [
        {
            brows: "down",
            src: "brows-down"
        },
        {
            brows: "up",
            src: "brows-up"
        },
        {
            brows: "eyelashesDown",
            src: "brows-lashes-down"
        },
        {
            brows: "eyelashesUp",
            src: "brows-lashes-up"
        },
    ];
    const noseValues = [
        {
            nose: "curve",
            src: "curve-nose"
        },
        {
            nose: "pointed",
            src: "pointed-nose"
        },
        {
            nose: "tound",
            src: "round-nose"
        }
    ];
    const earValues = [
        {
            ear: "attached",
            src: "attached-ears"
        },
        {
            ear: "detached",
            src: "detached-ears"
        }
    ];
    const mouthValues = [
        {
            mouth: "frown",
            src: "frown-mouth"
        },
        {
            mouth: "laughing",
            src: "laugh-mouth"
        },
        {
            mouth: "nervous",
            src: "nervous-mouth"
        },
        {
            mouth: "pucker",
            src: "pucker-mouth"
        },
        {
            mouth: "sad",
            src: "sad-mouth"
        },
        {
            mouth: "smile",
            src: "smile-mouth"
        },
        {
            mouth: "smirk",
            src: "smirk-mouth"
        },
        {
            mouth: "suprised",
            src: "suprised-mouth"
        }
    ];
    const hairValues = [
        {
            hair: "dannyPhantom",
            src: "dannyPhantom-hair"
        },
        {
            hair: "dougFunny",
            src: "dougFunny-hair"
        },
        {
            hair: "fonze",
            src: "fonze-hair"
        },
        {
            hair: "full",
            src: "full-hair"
        },
        {
            hair: "pixie",
            src: "pixie-hair"
        },
        {
            hair: "mrClean",
            src: "mrClean-hair"
        },
        {
            hair: "mrT",
            src: "mr-T-hair"
        },
        {
            hair: "turban",
            src: "turban-hair"
        }
    ];
    const shirtValues = [
        {
            shirt: "collared",
            src: "collared-shirt"
        },
        {
            shirt: "crew",
            src: "crew-shirt"
        },
        {
            shirt: "open",
            src: "open-shirt"
        }
    ];
    return { backgroundValues, skinValues, hairColorAndShirtColorValues, eyeValues, eyeBrowsValues, earValues, noseValues, mouthValues, hairValues, shirtValues };
}
 
export default Options;