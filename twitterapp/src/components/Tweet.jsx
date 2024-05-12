import { useState } from "react";
import "../CSS/Tweet.css";
function Tweet({tweetId, content, likes, createdAt ,onEdit}) {
  const [isEditing, setIsEditing] = useState(false);
  console.log(content, likes);
  return (
    <div className="tweet-wrapper">
      <div className="tweet-edit-wrapper">
        <div className="tweet-content">{isEditing ? 
        <input type="text"
    
        value={content} 
        onChange={(e)=>{
            onEdit({
                id:tweetId,
                content:e.target.value,
                likes:likes,
                createdAt:createdAt
            })
        }}

        /> : content}</div>

        <div className="edit-tweet">
          <button onClick={() => setIsEditing(!isEditing)}>
            {isEditing ? "Save" : "Edit"}
          </button>
        </div>
      </div>

      <div className="like-createdAt-wrapper">
        <div className="likes">{likes} Likes</div>

        <div className="created-At">Tweeted at {createdAt}</div>
      </div>
    </div>
  );
}

export default Tweet;
