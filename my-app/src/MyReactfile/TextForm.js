import React, {useState} from 'react'
// import propsTypes from 'prop-types'

export default function TextForm(props) {
  const hendleUpClick= ()=>{
    let newtext= text.toUpperCase();
    setText(newtext);
    props.showAlert("Convert to Upper Case Lettar","success");
  }

  const hendledownClick= ()=>{
    let newtext= text.toLowerCase();
    props.showAlert("Convert to Lower Case Lettar","success")
     setText(newtext);
  }

  const hendleCopytext=()=>{
    let texta=document.getElementById("floatingTextarea2");
    texta.select();
    navigator.clipboard.writeText(texta.value);
    props.showAlert('Copyed all Words','success');
  }

  const hendleExtraSpace=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Clear all Extra Spaces","success");
  }

  const hendleClear=()=>{
    let newtext="";
    setText(newtext);
    props.showAlert("Clear","susccesfully");

  }

  const hendleOnChange= (event)=>{
    setText(event.target.value);
 }
    const [text,setText]=useState('');   

    
    return (
        <>
    <div className="container my-3 " >
      <h1>{props.hading} </h1>
      <div className="form-floating">
  <textarea className="form-control my-2" style={{color: props.mode==="primary"?'black':'white',backgroundColor: props.mode==="primary"?'white':'black'}} value={text} onChange={hendleOnChange}  placeholder="Leave a comment here" id="floatingTextarea2" ></textarea>
</div>   
<button className="btn btn-primary my-2" type="submit" onClick={hendleUpClick}>Convert_UpperCase</button>
<button className="btn btn-primary my-2 mx-1" type="submit" onClick={hendledownClick}>Convert_LowerCase</button>
<button className="btn btn-primary my-2 mx-1" type="submit" onClick={hendleExtraSpace}>Remove Spaces</button>
<button className="btn btn-primary my-2 mx-1" type="submit" onClick={hendleCopytext}>Copy Text</button>
<button className="btn btn-primary my-2 mx-1" type="submit" onClick={hendleClear}>Clear Text</button>
    </div>

    <div className="container my-3">
      <h4>Your Text Summary</h4>
      <p>{text.length==0?0:text.split(" ").length} Words and {text.length} Characters</p>
      <p>{0.008*text.split(" ").length} Minutes to Read</p>
      <h2 className='previwe'>Previwe</h2>
      <p>{text.length>0?text:"Enter something in the textbar above to previwe it here"}</p>
    </div>
    </>
  )
}

// TextForm.propsTypes={
//     hading: propsTypes.string
//     // showalert: propsTypes.object
// }