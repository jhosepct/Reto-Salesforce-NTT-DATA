import { PropsImage } from "../../utils/interfaces/components"
import { ImageStyle } from "./styles"

export const Photo = ({ src = '' }: PropsImage) => {
    return (
        <ImageStyle>
            <img src={src} alt="photo" />
        </ImageStyle>
    )
}