marked.setOptions({
    breaks: true
})

const renderer = new marked.Renderer("");


function App() {
    const [text, setText] = React.useState(defaultText);
 
    return (
    <div className="text-center px-4">
        <h1 className="p-4">Markdown Previewer</h1>
        <textarea 
        name='text' 
        className='textarea' 
        id='editor'
        rows="10"
        onChange={(e) => setText(e.target.value)}
        value={text}>
        </textarea>
        <h3 className="mt-3">The Markdown</h3>
        <Preview markdown={text}/>
    </div>
    )
}

function Preview({markdown}) {
    return (
        <div 
        dangerouslySetInnerHTML={{
            __html: marked(markdown, { renderer: renderer })
        }}
        id='preview'
        >
        


        </div>
    )
}

const defaultText = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![cute cat](https://images-na.ssl-images-amazon.com/images/I/71+mDoHG4mL.png)
`;

ReactDOM.render(<App/>, document.getElementById('root'));