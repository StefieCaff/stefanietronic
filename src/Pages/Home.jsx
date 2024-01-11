import Airplane from "../Components/Airplane/Airplane"
import SoundPlayer from "../Components/SoundPlayer/SoundPlayer";

const audioSources = [
    { src: '/audio/background-song.aac', type: 'audio/aac' },
    { src: '/audio/background-sounds.mp3', type: 'audio/mp3' },
    { src: '/audio/alt-background.ogg', type: 'audio/ogg' },
];
  
const Home = () => {
    return (
        <div className="styles.flex">
            <Airplane />
            <SoundPlayer
               sources={audioSources}
               ariaLabel="Push play for soothing nature sounds"
            />
        </div>
  )
};

export default Home;