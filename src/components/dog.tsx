import { useState } from "react"

export function GenerateDog({ service }: { service: () => Promise<string> }) {
    const [dogImage, setDogImage] = useState<string>()

    async function generateImage() {
        const response = await service()
        
        if (response) {
            setDogImage(response)
        }
    }

    console.log(dogImage)
    return (
        <div style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
            <h3>Click this button and see a funny dog!</h3>
            <button data-testid="click-me-button" onClick={generateImage} style={{padding: "20px", fontSize: "70px", border: "1px solid black", borderRadius: "10px", cursor: "pointer", backgroundColor: "yellow"}}>
                🐶 click me 🐶
            </button> 
            <br />
            <br />
            {dogImage && <img data-testid="dog-image" src={dogImage} style={{maxWidth: "500px", maxHeight: "500px"}}/>}
        </div>
    )
}