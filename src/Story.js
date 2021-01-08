import React, { useState } from 'react';

function Story() {
    const [title, setTitle] = useState('');
    const [story, setStory] = useState('');
   
    const handleStory = async () => {

        try {
            /*
          const res = await fetch("/api/story", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              story: story
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          });
          const data = await res.json();
    return data;*/
    console.log(title, story)
  } catch (err) {
    console.error(err);
  }
};

    return (
        
            <form onSubmit= {(e) => {
                 e.preventDefault();
                handleStory();
                }}>
                <h3>Create Story</h3>
        <label>Title</label>
        <input value={title}
               onChange={e => setTitle(e.target.value)}
               placeholder="Titel..."
              type="text" />
        <br /><label>Content</label>
        <input value={story}
               onChange={e => setStory(e.target.value)}
               placeholder="Type ur story..."
              type="text" /><br/>
      <button type="submit">Save Story</button>
    </form>
    
    )
}

export default Story
