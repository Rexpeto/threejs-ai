import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";

import config from "../config/config";
import state from "../store";
import { downloadCanvasToImage, reader } from "../config/helpers";
import { EditorTabs, FilterTabs, DecalTypes } from "../config/constants";
import { fadeAnimation, slideAnimation } from "../config/motion";
import {
    AIPicker,
    ColorPicker,
    CustomButton,
    FilePicker,
    Tab,
    ThemeSwitch
} from "../components";

const Customizer = () => {
    const snap = useSnapshot(state);

    const [file, setFile] = useState("");
    const [prompt, setPrompt] = useState("");
    const [generatingImg, setGeneratingImg] = useState(false);

    const [activeEditorTab, setActiveEditorTab] = useState(false);
    const [activeFilterTab, setActiveFilterTab] = useState({
        logoShirt: true,
        stylishShirt: false
    });

    const generateTabContent = () => {
        switch (activeEditorTab) {
            case "colorpicker":
                return <ColorPicker />;

            case "filePicker":
                return (
                    <FilePicker
                        file={file}
                        setFile={setFile}
                        prompt={prompt}
                        readFile={readFile}
                    />
                );

            case "AI":
                return (
                    <AIPicker
                        prompt={prompt}
                        setPrompt={setPrompt}
                        generatingImg={generatingImg}
                        handleSubmit={handleSubmit}
                    />
                );

            default:
                return null;
        }
    };

    const handleSubmit = async type => {
        if (!prompt) return;

        try {
        } catch (error) {
            console.log(error);
        } finally {
            setGeneratingImg(false);
            setActiveFilterTab("");
        }
    };

    const handleDecals = (type, res) => {
        const decalType = DecalTypes[type];
        state[decalType.stateProperty] = res;

        if (!activeFilterTab[decalType[FilterTab]]) {
            handleActiveFilterTab(decalType.filterTab);
        }
    };

    const handleActiveFilterTab = tabName => {
        switch (tabName) {
            case "logoShirt":
                state.isLogoTexture = !activeFilterTab[tabName];
                break;
            case "stylishShirt":
                state.isFullTexture = !activeFilterTab[tabName];
                break;
            default:
                state.isFullTexture = true;
                state.isLogoTexture = false;
        }

        setActiveFilterTab(prev => {
            return {
                ...prev,
                [tabName]: !prev[tabName]
            };
        });
    };

    const readFile = type => {
        reader(file).then(res => {
            handleDecals(type, res);
            setActiveEditorTab("");
        });
    };

    return (
        <AnimatePresence>
            {!snap.intro && (
                <>
                    <motion.div
                        key="custom"
                        className="absolute top-0 left-0 z-10"
                        {...slideAnimation("left")}
                    >
                        <div className="flex items-center min-h-screen">
                            <div className="editortabs-container tabs">
                                {EditorTabs.map(tab => (
                                    <Tab
                                        key={tab.name}
                                        title={tab.name}
                                        icon={tab.icon}
                                        handleClick={() =>
                                            setActiveEditorTab(tab.action)
                                        }
                                    />
                                ))}

                                {generateTabContent()}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="absolute z-10 top-5 left-5"
                        {...fadeAnimation}
                    >
                        <CustomButton
                            title="Atrás"
                            handleClick={() => {
                                state.intro = true;
                                setActiveEditorTab("");
                            }}
                            customStyle="w-fit px-4 py-2.5 font-bold text-sm dark:text-white bg-gray-500/25 dark:bg-gray-800"
                        />
                    </motion.div>

                    <motion.div
                        className="absolute z-10 top-5 right-5"
                        {...fadeAnimation}
                    >
                        <ThemeSwitch />
                    </motion.div>

                    <motion.div
                        className="filtertabs-container"
                        {...slideAnimation("up")}
                    >
                        {FilterTabs.map(tab => (
                            <Tab
                                key={tab.name}
                                icon={tab.icon}
                                title={tab.name}
                                isFilterTab={activeFilterTab[tab.action]}
                                handleClick={() =>
                                    handleActiveFilterTab(tab.action)
                                }
                            />
                        ))}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default Customizer;
