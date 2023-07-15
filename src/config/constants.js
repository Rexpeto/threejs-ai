export const EditorTabs = [
    {
        name: "Picker color",
        icon: "HiOutlineColorSwatch",
        action: "colorpicker"
    },
    {
        name: "Subir imagen",
        icon: "AiOutlineCloudUpload",
        action: "filePicker"
    },
    {
        name: "IA",
        icon: "BsRobot",
        action: "AI"
    }
];

export const FilterTabs = [
    {
        name: "Logo camiseta",
        icon: "TbShirt",
        action: "logoShirt"
    },
    {
        name: "Estilo de camiseta",
        icon: "TbShirtSport",
        action: "stylishShirt"
    }
];

export const DecalTypes = {
    logo: {
        stateProperty: "logoDecal",
        filterTab: "logoShirt"
    },
    full: {
        stateProperty: "fullDecal",
        filterTab: "stylishShirt"
    }
};
