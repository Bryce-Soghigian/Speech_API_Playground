import React, { useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";

export default function SpeechInput() {
  const [value, setValue] = useState("");
  const { speak } = useSpeechSynthesis();

  return (
    <div>
      <textarea
        placeholder="Type in here and the api will speak when you tell it to"
        value={value}
        onChange={event => setValue(event.target.value)}
      />
      <button onClick={() => speak({ text: value })}>Speak</button>
    </div>
  );
}


