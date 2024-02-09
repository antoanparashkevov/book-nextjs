import React, { ChangeEvent, FocusEvent } from "react";

//UI component
import Icon from "@/components/UI/Icon";

type inputProps = {
    id: string,
    type: string,
    name: string,
    placeholder: string,
    classes?: string,
    showRemoveIcon?: boolean,
    inputDisabled?: boolean,
    iconSrc?: string,
    iconAlt?: string,
    iconWidth?: number,
    iconHeight?: number,
    enteredValue: string | number,
    onChangeHandler: (event:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    onBlurHandler: (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    reset: () => void,
    autoCompleteAttribute?: string
}

const Input: React.FC<inputProps> = ({
    id,
    type,
    name,
    placeholder,
    classes = "",
    showRemoveIcon,
    inputDisabled = false,
    iconAlt,
    iconWidth,
    iconHeight,
    iconSrc,
    onChangeHandler,
    onBlurHandler,
    enteredValue,
    reset,
    autoCompleteAttribute = ""
}) => {

    return (
        <div
            className={`relative w-full inline-flex justify-start items-center gap-x-2.5 ${classes}`.trim()}
        >

            {iconSrc &&
                <div className='w-6 h-full absolute left-2 top-0 flex justify-center items-center text-black'>
                    <Icon src={iconSrc} alt={iconAlt || ""} width={iconWidth || 0} height={iconHeight || 0}/>
                </div>
            }

            <input
                className='
                    w-full block py-3 pl-10 pr-10 bg-white text-sm text-gray-500 border rounded-3xl border-gray-300 shadow-sm
                    placeholder:text-gray-400
                    focus:outline-none focus:border-kingfisher-daisy-900 focus:bg-magnolia-50
                    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                '
                id={id}
                type={type}
                name={name}
                placeholder={placeholder}
                disabled={inputDisabled}
                value={enteredValue}
                onChange={onChangeHandler}
                autoComplete={autoCompleteAttribute}
                onBlur={onBlurHandler}
            />

            {showRemoveIcon && enteredValue.toString().length > 0 &&
                <div
                    onClick={() => reset()}
                    className='w-6 h-full absolute top-0 right-4 flex justify-center items-center text-black cursor-pointer pointer-events-auto'
                >
                    <Icon src='/icons/remove.svg' alt='Remove' width={24} height={24}/>
                </div>
            }
        </div>
    );
};

export default Input;