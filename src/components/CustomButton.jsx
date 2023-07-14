const CustomButton = ({ type, title, handleClick, customStyle }) => {
    return (
        <button
            onClick={handleClick}
            className={`px-2 py-1.5 flex-1 rounded-md ${customStyle}`}
        >
            {title}
        </button>
    );
};

export default CustomButton;
