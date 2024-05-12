import { useState } from "react";

function AddTweet({onAddTweet}) {
  const [text, setText] = useState("");
  return (
    <>
      <input
        placeholder="Let's Tweet..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={ () => {
        
        onAddTweet(text)
        setText('')
      }}>Tweet!</button>
    </>
  );
}

export default AddTweet;
