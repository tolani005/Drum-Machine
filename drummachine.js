const audioClips = [
  { key: 'Q', id: 'Heater 1', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },
  { key: 'W', id: 'Heater 2', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },
  { key: 'E', id: 'Heater 3', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },
  { key: 'A', id: 'Heater 4', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },
  { key: 'S', id: 'Clap', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },
  { key: 'D', id: 'Open-HH', src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },
  { key: 'Z', id: "Kick-n'-Hat", src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },
  { key: 'X', id: 'Kick', src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },
  { key: 'C', id: 'Closed-HH', src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' },
];

function App() {
  const [display, setDisplay] = React.useState('');

  const playSound = (key, id) => {
      const audio = document.getElementById(key);
      audio.currentTime = 0; // Rewind to the start
      audio.play();
      setDisplay(id);
  };

  const handleKeyPress = (event) => {
      const clip = audioClips.find(c => c.key === event.key.toUpperCase());
      if (clip) {
          playSound(clip.key, clip.id);
      }
  };

  React.useEffect(() => {
      document.addEventListener('keydown', handleKeyPress);
      return () => {
          document.removeEventListener('keydown', handleKeyPress);
      };
  }, []);

  return (
      <div id="drum-machine">
          <div id="display">{display}</div>
          {audioClips.map(clip => (
              <button
                  key={clip.key}
                  className="drum-pad"
                  id={clip.id}
                  onClick={() => playSound(clip.key, clip.id)}
              >
                  {clip.key}
                  <audio className="clip" id={clip.key} src={clip.src}></audio>
              </button>
          ))}
      </div>
  );
}

ReactDOM.render(<App />, document.getElementById('drum-machine'));
