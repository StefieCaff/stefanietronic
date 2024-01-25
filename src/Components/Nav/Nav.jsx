import React from "react";
import { Link } from "react-router-dom";

import SoundPlayer from "../SoundPlayer/SoundPlayer";
import { cricketSong } from "../../Config/audioSources";
import { FlexHeader } from "../Containers/Containers";
// import Svg from "../Svg/Svg";


const Nav = () => {
    const linkStyle = {
        pointer: 'cursor',
        backgroundColor: 'red',
        padding: '10px',
        margin: '10px',
        border: '1px solid gray',
        borderRadius: '5px',
  }

    return (
        <FlexHeader>
            <SoundPlayer
               sources={cricketSong}
               ariaLabel="Push play for soothing nature sounds"
            />
            <ul>
                <li>
                    <Link to={"/contact"} style={linkStyle}>
                        {/* <Svg symbolId='paperplane'></Svg> */}
                    </Link>
                </li>
                <li>
                    <Link to={"/experience"} style={linkStyle}>
                        {/* <Svg symbolId='tree'></Svg> */}
                    </Link>
                </li>
                <li>
                    <Link to={"/portfolio"} style={linkStyle}>
                        {/* <Svg symbolId='nippers'></Svg> */}
                    </Link>
                </li>
            </ul>
            

        </FlexHeader>
    )
};

export default Nav;