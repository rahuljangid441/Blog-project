import TweetList from "./TweetList";
import AddTweet from "./AddTweet";
import { useState , useCallback, memo } from "react";
const intialTweets = [
    { id: 1, content: "hi how are you?", likes: 10,createdAt: new Date() },
    { id: 2, content: "what up?", likes: 10 ,createdAt: new Date() },
    { id: 3, content: "ssup?", likes: 10 ,createdAt: new Date()},
    { id: 4, content: "all good?", likes: 10 ,createdAt: new Date()},
  ];

  const MemoisedTweet = memo(AddTweet);


function Twitter() {
    const[tweets,setTweets]=useState(intialTweets);
    const handleTweets = useCallback((text) =>{
        console.log("text is",text);
        let nextId=(tweets.length>0) ? tweets[tweets.length-1].id+1  :0;
        setTweets([...tweets , {
            content:text,
            likes:Math.floor(Math.random()*10),
            id:nextId,
            createdAt: new Date()
        }]);
    },[tweets]);


    const handleEditTweet = useCallback((tweet) =>{
     console.log("tweet obj",tweet);
      setTweets(
        tweets.map((currentTweet)=>{
          if(currentTweet.id === tweet.id){
            return tweet;
          }
          else{
            return currentTweet;
          }
        })
      )
    },[tweets]);

  return (
    <div>
      <MemoisedTweet onAddTweet={handleTweets} />
      <TweetList tweets={tweets} onEditTweet={handleEditTweet}/>
    </div>
  );
}

export default Twitter;
