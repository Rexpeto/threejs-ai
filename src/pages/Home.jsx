import state from "../store";
import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from "../config/motion";
import { useSnapshot } from "valtio";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeSwitch, CustomButton } from "../components";

const Home = () => {
    const snap = useSnapshot(state);
    return (
        <AnimatePresence>
            {snap.intro && (
                <motion.section className="home" {...slideAnimation("left")}>
                    <motion.header
                        {...slideAnimation("down")}
                        className="flex justify-between w-full"
                    >
                        <img
                            src="./threejs.png"
                            alt="Logo"
                            title="threejs"
                            className="w-8 h-8 object-contain"
                        />
                        <ThemeSwitch />
                    </motion.header>

                    <motion.div
                        className="home-content"
                        {...headContainerAnimation}
                    >
                        <motion.div {...headTextAnimation}>
                            <h1 className="head-text">Vamos hacerlo</h1>
                        </motion.div>
                        <motion.div
                            {...headContentAnimation}
                            className="flex flex-col gap-5"
                        >
                            <p className="max-w-md font-normal text-gray-600 dark:text-gray-200 text-base">
                                Crea tu camiseta única y exclusiva con nuestra
                                nueva herramienta de personalización en 3D.{" "}
                                <strong>
                                    Da rienda suelta a tu imaginación
                                </strong>{" "}
                                y define tu propio estilo
                            </p>
                            <CustomButton
                                type="filled"
                                title="Personalizar"
                                handleClick={() => (state.intro = false)}
                                customStyle="w-fit px-4 py-2.5 font-bold text-sm dark:text-white bg-gray-300 dark:bg-gray-800"
                            />
                        </motion.div>
                    </motion.div>
                </motion.section>
            )}
        </AnimatePresence>
    );
};

export default Home;
