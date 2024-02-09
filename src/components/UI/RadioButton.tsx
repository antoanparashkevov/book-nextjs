import React from "react";

import Icon from "@/components/UI/Icon";
import MarkIcon from "../../../public/icons/mark.svg";

type RadioButtonProps = {
    children: Readonly<React.ReactNode>;
    id: string;
    value: string;
    onOptionChange: (event: any) => void
    selected: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({
    children,
    id,
    value,
    onOptionChange,
    selected
}) => {

    return (
        <label htmlFor={id}>
            <input
                type="radio"
                id={id}
                name='user-choice'
                value={value}
                checked={selected === value}
                onChange={onOptionChange}
                className='hidden group'
            />

            <span className={`
                    relative
                    flex flex-col justify-center items-center
                    w-[200px] h-[170px] p-1
                    border-[1px] border-solid rounded-xl
                    ${selected === value ? 'border-purple-500 shadow-xl' : 'border-transparent shadow-lg'}
                    cursor-pointer shadow-purple-300
                `}
            >
                <Icon
                    src={MarkIcon}
                    alt='Mark Icon'
                    parentClassName={`
                        !absolute -top-[15px] left-1/2
                        -translate-x-1/2
                        ${selected === value ? 'opacity-100 scale-100' : 'scale-[2] opacity-0'}
                        pointer-events-none transition-all
                        flex justify-center w-[24px] h-[24px] bg-purple-500 rounded-full
                    `}
                />
                {children}
            </span>
        </label>
    )
};

export default RadioButton;