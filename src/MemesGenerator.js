import React, { useState, useEffect } from 'react'

const objectToQueryParam = obj => {
    const params = Object.entries(obj).map(([key, value]) => `${key}=${value}`);
    return "?" + params.join("&");
};

export const MemesGenerator = () => {
    const [templates, setTemplates] = useState([]);
    const [template, setTemplate] = useState(null)
    const [topText, setTopText] = useState("");
    const [bottomText, setBottomText] = useState("");
    const [meme, setMeme] = useState(null)

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes").then(res => {
            res.json().then(response => setTemplates(response.data.memes))
        })
    }, [])

    if (meme) {
        return (
            <div style={{textAlign:'center'}}>
    			<img src={meme.data.url}/>
    		</div>
        )
    }
    return (
        <div>
            {template && (
            	<form style={{textAlign:'center'}} onSubmit={async (e) => {
            		e.preventDefault();
            		const params = {
                     template_id: template.id,
                     text0: topText,
                     text1: bottomText,
                     username: "fayaz0",
                     password: "9TsdaCyqztEk!se"
                    };

                    const response = await fetch(`https://api.imgflip.com/caption_image${objectToQueryParam(params)}`)

                    const json = await response.json()
                    setMeme(json)
            	}}>
            	<img width="300" src={template.url} alt={template.name} />
            	<input type="text" value={topText} onChange={(e) => setTopText(e.target.value)} placeholder="Top Text" />
            	<input type="text" value={bottomText} onChange={(e) => setBottomText(e.target.value)} placeholder="Bottom Text" />
            	<button type="submit" >Generate</button>
            	</form>
            	) }

        	{!template && templates.map(temp => {
        		return( <img width="300" src={temp.url} key={temp.id} alt={temp.name} onClick={(e)=> {
        			setTemplate(temp)
        		}} />)
        	})}
        </div>
    )
}