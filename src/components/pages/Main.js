import React from 'react'

const Main = () => {
  return (
    <div className='mainContainer'>
    <div className='createTweet'>
        <input type="text" />
        <button>Tweet</button>
    </div>
    <div className='tweetDisplay'>
        <h3>Tweets</h3>
    </div>
    </div>
  )
}

export default Main