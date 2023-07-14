import { proxy } from "valtio";

const state = proxy({
    intro: true,
    color: "#EFBD48",
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: "./LogoShirt.png",
    fullDecal: "./LogoShirt.png"
});

export default state;
