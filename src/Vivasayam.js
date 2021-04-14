import React, { useState } from 'react'
import { Button, TextField } from "@material-ui/core"

export const Vivasayam = () => {
    const [kudiClick, setKudiClick] = useState(false)
    return (
        <div style={{textAlign: 'center'}}>
        {!kudiClick && (
        	<div>
          <h2>நீங்கள் எந்த குடி ?</h2>
          <TextField id="filled-basic" label="சொல்ரா Fuண்ட  " variant="filled" />
          <div style={{marginTop: 2 + 'rem'}}>
			  <Button onClick={() => setKudiClick(true)} className="button-kudi" variant="contained" color="primary">
               மூத்திரத்தை குடி 
              </Button>
          </div>
        </div>
        	)} 

        {kudiClick && (
        	<div style={{marginTop: 10 + 'rem'}} >
                 <img alt="vivasayam" width="50%" src="https://i.imgflip.com/55lvcn.jpg" />
                 <img alt="vivasayam" width="50%" src="https://i.imgflip.com/3n6g3p.jpg" />
                 <h1 style={{marginTop: 2 + 'rem', fontWeight:1000}}>விவசாயம் பாருடா புண்டமோனே </h1>
                 {/*<a href="https://imgflip.com/i/55lvcn"><img src="https://i.imgflip.com/55lvcn.jpg" title="made at imgflip.com"/></a><div><a href="https://imgflip.com/memegenerator">from Imgflip Meme Generator</a></div>*/}
            </div>
        	)}
            
            
		</div>
    )
}