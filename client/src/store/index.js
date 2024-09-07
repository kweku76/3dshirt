import { proxy } from 'valtio';

const state = proxy({
    intro: true,
    color: '#cf6202',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './k76white.png',
    fullDecal: './k76white.png',

});

export default state;