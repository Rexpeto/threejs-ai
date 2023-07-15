import { AiOutlineCloudUpload } from "react-icons/ai";
import CustomButton from "./CustomButton";

const FilePicker = ({ file, setFile, readFile }) => {
    return (
        <div className="filepicker-container">
            <div className="flex flex-1 flex-col">
                <input
                    type="file"
                    id="file-upload"
                    accept="image/*"
                    onChange={e => setFile(e.target.files[0])}
                />
                <label
                    className="flex justify-center items-center h-36 dark:text-white text-[120px] cursor-pointer"
                    htmlFor="file-upload"
                >
                    <AiOutlineCloudUpload />
                </label>

                {file && (
                    <div className="flex flex-wrap gap-2">
                        <CustomButton
                            title="Logo"
                            handleClick={() => readFile("logo")}
                            customStyle="bg-blue-600 w-full text-white outline-none"
                        />
                        <CustomButton
                            title="Full"
                            handleClick={() => readFile("full")}
                            customStyle="bg-blue-600 w-full text-white outline-none"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default FilePicker;
