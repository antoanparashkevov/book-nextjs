import React, {ChangeEvent, FocusEvent} from "react";

type textAreaProps = {
    id: string,
    name: string,
    placeholder?: string,
    value: string | number,
    onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void,
    onBlur: (event: FocusEvent<HTMLTextAreaElement>) => void,
    rows: number,
    cols: number,
}

const TextArea: React.FC<textAreaProps> = ({
    id,
    name,
    placeholder,
    value,
    onChange,
    onBlur,
    rows,
cols
}) => {
    
    return (
        <textarea
            className='
                w-full h-full rounded-[16px] border border-solid text-[1rem] p-[0.5rem] resize-none
                focus:border-kingfisher-daisy-950 focus:bg-[#faf6ff] focus:outline-0
            '
            name={name}
            id={id}
            cols={cols}
            rows={rows}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
        />
    );
};

export default TextArea;