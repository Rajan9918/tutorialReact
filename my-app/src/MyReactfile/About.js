import React,{useState} from 'react'

export default function About() {
    const[cont,setcont]=useState({
        color:'black',
        backgroundColor: "white" 
   })
   const[btntext,setbtntext]=useState("Dark Mod");
   const toggelStyle=()=>{
    if(cont.color==='black'){
        setcont({
            color:'white',
            backgroundColor: "black"
        })
        setbtntext("Light Mod");
    }
    else{
        setcont({
        color:'black',
        backgroundColor: "white"
        })
        setbtntext("Dark Mod");
    }
   }
  return (
    <div className='containere my-3' style={cont}>
        <h1 >About Us</h1>
      <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item" style={cont}>
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" style={cont} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
  <div class="accordion-item" style={cont}>
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" style={cont} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div class="accordion-item" style={cont}>
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" style={cont} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>
<button type="button" onClick={toggelStyle} class="btn btn-primary">{btntext}</button>
    </div>
  )
}
