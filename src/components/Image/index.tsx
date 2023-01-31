import { PropsImage } from "../../utils/interfaces/components"
import { ImageStyle } from "./styles"

export const Photo = ({ src = '', ...props }: PropsImage) => {
    return (
        <ImageStyle {...props}>
            <img src={src} alt="photo" />
        </ImageStyle>
    )
}