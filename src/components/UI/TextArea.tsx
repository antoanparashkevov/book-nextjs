import React, {ChangeEvent, FocusEvent} from "react";

type textAreaProps = {
    id: string,
    name: string,
    placeholder?: string,
}

const TextArea: React.FC<textAreaProps> = ({
    id,
    name,
    placeholder,
}) => {
    
    return (
        <textarea
            className='
                w-full h-full rounded-[16px] border border-solid text-[1rem] p-[0.5rem] resize-none
                focus:border-kingfisher-daisy-950 focus:bg-[#faf6ff] focus:outline-0
            '
            name={name}
            id={id}
            placeholder={placeholder}
        />
    );
};

export default TextArea;