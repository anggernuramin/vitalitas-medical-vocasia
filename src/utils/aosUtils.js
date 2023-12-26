import AOS from "aos"
import "aos/dist/aos.css"

export const initAos = () => {
    AOS.init()
    AOS.refresh()
}

export const aosConfig = (animation = "fade-up") => {
    return {
        "data-aos":animation,
        "data-aos-duration":"1000",
        "data-aos-once":"true"
    }
}