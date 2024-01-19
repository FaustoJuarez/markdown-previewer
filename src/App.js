import React, { useState } from "react";
import {marked} from "marked";
import './App.css';

function App() {
  const [text, setText] = useState(`
# Heading 1
## Heading 2
[Link](https://www.example.com)
\`inline code\`
\`\`\`
// Code block
const example = "Hello World!";
\`\`\`
- List item
> Blockquote
![Image](https://www.example.com/image.jpg)
**Bold text**
`);

  marked.setOptions({
    breaks: true
  });

  return (
    <div className="App">  
      <textarea 
        id="editor" 
        onChange={(event) => {
          setText(event.target.value);
        }}
        value={text} 
      ></textarea>
      <div 
        id="preview" 
        dangerouslySetInnerHTML={{
          __html: marked(text),
        }}
      ></div>
    </div>
  );
}

export default App;
