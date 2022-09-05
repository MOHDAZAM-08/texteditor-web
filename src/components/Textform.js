import React, { useState } from 'react'


export default function Textform(props) {
    //Handle to convert text in upper case 
    const handleUpClick = () => {
        console.log("upper case was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Upper Case!", "success");
    }
    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value);
    }
    //Handle to convert text in lower case 
    const handleLoClick = () => {
        console.log("upper case was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lower Case!", "success");
    }
    //Handle to Clear text 
    const handleCleartext = () => {
        console.log("upper case was clicked" + text);
        let newText = '';
        setText(newText)
        props.showAlert("Text cleared", "success");
    }

    //handle to copy text
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("copied to Clipboard!", "success");
    }
    //handal to remove extra
    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed!", "success");        

    }
    const [text, setText] = useState('');
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#042743' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
                </div>
                {/* // all button  */}
                <button disabled={text.length===0} className="btn btn-primary  mx-1 my-1" onClick={handleUpClick}>Convert to upper case</button>
                <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to lower case</button>
                <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleCleartext}>Clear text</button>
                <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy text</button>
                <button disabled={text.length===0}className="btn btn-primary  mx-1 my-1" onClick={handleExtraSpace}>Remove exctra spaces</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black'}}>
                <h1>Your Text Summary</h1>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Nothing to preview"}</p>
            </div>
        </>
    )
}
