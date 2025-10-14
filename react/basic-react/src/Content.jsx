let name = 'ankur singh'

function Content(){
 //remove the hyphen and convert it into camel case 
  return <div>
    <p style={{color:'blue',fontSize:'24px'}} >hello , my name is {name} and my age is {12+20}</p>
  </div> 
}

function Footer(){
    let inlineStyle = {
        border:'1px solid',
        backgroundColor:'tan'
    }
  return <div style={inlineStyle}>
    this is footer 
  </div>
}

export default Footer
export {Content , name}

