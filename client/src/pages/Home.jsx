import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import { CustomButton } from '../components';
import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from '../config/motion';
const Home = () => {
    const snap = useSnapshot(state);
    
  return (
    <AnimatePresence>
{snap.intro && (
<motion.section className="home" {...slideAnimation('left')}>
<motion.header {...slideAnimation('down')}>
    <img src='./k76.png' 
    alt="logo" 
    className="w-10 h-10 object-contain"
    />
</motion.header>
<motion.div className="home-content" {...headContainerAnimation}>
<motion.div {...headTextAnimation}>
<h1 className="head-text">
LET'S <br className="x1:block hidden" /> DO IT.
</h1>
</motion.div>
<motion.div {...headContentAnimation} className="flex flex-col gap-5">
    <p className="max-w-md font-normal text-gray-600 text-base">
Create your unique and exclusive Kweku76 shirt with our brand-new 3D customization tool. <strong>Unleash your imagination</strong>
{" "} and define your style.</p>
<CustomButton 

type="filled"
title="Customize it"
handleClick={() => state.intro = false}
customStyles="w-fit px-4 py-2.5 font-bold text-sm"
/>
</motion.div>

</motion.div>
</motion.section>
)}
    </AnimatePresence>
  )
}

export default Home