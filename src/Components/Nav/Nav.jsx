import React from "react";

import SoundPlayer from "../SoundPlayer/SoundPlayer";
import { cricketSong } from "../../Config/audioSources";

const Nav = () => {
    return (
        <>
            <SoundPlayer
               sources={cricketSong}
               ariaLabel="Push play for soothing nature sounds"
            />
        </>
    )
};

export default Nav;