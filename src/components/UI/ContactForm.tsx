"use client";

import React, {FormEvent, Fragment} from "react";
import Image from 'next/image';

import BookCover from '../../../public/images/book_cover.jpg';

import PersonIcon from "../../../public/icons/user.svg";
import MessageIcon from "../../../public/icons/message.svg";

import Input from "./Input";
import TextArea from "./TextArea";
import Circle from "./Circle";

const SubmitButton = dynamic(() => import("./SubmitButton"));

import dynamic from "next/dynamic";
import {useFormStatus} from "react-dom";
import useInput from "@/hooks/useInput";

export type initialStateType = {
    message: string,
}

const ContactForm: React.FC = () => {
    const formState = useFormStatus();

    const {
        value: enteredFirstName,
        isValid: firstNameIsValid,
        hasError: firstNameHasError,
        valueChangeHandler: firstNameChangeHandler,
        inputBlurHandler: firstNameBlurHandler,
        reset: firstNameReset
    } = useInput(
        (value) => value.trim().length > 0 && value.trim().length > 3,
        ''
    );

    const {
        value: enteredLastName,
        isValid: lastNameIsValid,
        hasError: lastNameHasError,
        valueChangeHandler: lastNameChangeHandler,
        inputBlurHandler: lastNameBlurHandler,
        reset: lastNameReset
    } = useInput(
        (value) => value.trim().length > 0 && value.trim().length > 3,
        ''
    );

    const {
        value: enteredEmail,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: emailReset
    } = useInput(
        (value) => value.trim().length > 0 && value.trim().length > 5 && value.trim().includes('@'),
        ''
    );

    const {
        value: enteredMessage,
        isValid: messageIsValid,
        hasError: messageHasError,
        valueChangeHandler: messageChangeHandler,
        inputBlurHandler: messageBlurHandler,
    } = useInput(
        () => true,
        ''
    );

    const formIsValid = firstNameIsValid && lastNameIsValid && emailIsValid && messageIsValid;

    const handleFormSubmission = async (event: FormEvent) => {
        event.preventDefault();

        if(!formIsValid) {
            return;
        }

        console.log('firstName >>> ', enteredFirstName)
        console.log('lastName >>> ', enteredLastName)
        console.log('email >>> ', enteredEmail)
        console.log('message >>> ', enteredMessage)
    }

    return (
        <Fragment>
            <section id="contact" className="grid grid-cols-1 lg:grid-cols-3 w-full">
                <div className='py-20 px-4 lg:py-48 shadow-[4px_0px_0px_0px_rgba(0,_0,_0,_0.11)]'>
                    <Image
                        src={BookCover}
                        alt='Book Cover'
                        className="rounded-xl"
                    />
                </div>
                <form
                    onSubmit={handleFormSubmission}
                    className="grid grid-cols-1 md:grid-cols-2 lg:col-span-2 gap-x-8 gap-y-6 py-20 px-6 lg:py-48 lg:px-8"
                >

                    <p className="flex text-sm text-black font-bold md:col-span-2">
                        Picked plan:&nbsp;
                        <span className="inline-flex gap-x-[1px] text-blue-600">
							<Circle className="bg-blue-600"/>
						</span>
                    </p>

                    <div
                        className={`
                            flex flex-col justify-start items-start gap-y-[10px]
                            ${firstNameHasError ? 'invalid' : ''}
                        `}
                    >
                        <label htmlFor="firstName" className="block text-sm font-bold">
                            Собствено име
                        </label>
                        <Input
                            id="firstName"
                            type="text"
                            name="firstName"
                            placeholder='Вашето собствено име'
                            showRemoveIcon
                            iconSrc={PersonIcon}
                            iconAlt="Person Icon"
                            enteredValue={enteredFirstName}
                            onChangeHandler={firstNameChangeHandler}
                            onBlurHandler={firstNameBlurHandler}
                            reset={firstNameReset}
                        />
                    </div>

                    <div
                        className={`
                            flex flex-col justify-start items-start gap-y-[10px]
                            ${lastNameHasError ? 'invalid' : ''}
                        `}
                    >
                        <label htmlFor="lastName" className="block text-sm font-bold">
                            Фамилно име
                        </label>
                        <Input
                            id="lastName"
                            type="text"
                            name="lastName"
                            placeholder='Вашето фамилно име'
                            showRemoveIcon
                            iconSrc={PersonIcon}
                            iconAlt="Person Icon"
                            enteredValue={enteredLastName}
                            onChangeHandler={lastNameChangeHandler}
                            onBlurHandler={lastNameBlurHandler}
                            reset={lastNameReset}
                        />
                    </div>

                    <div className={`
                            flex flex-col justify-start items-start gap-y-[10px] md:col-span-2
                            ${emailHasError ? 'invalid' : ''}
                        `}
                    >
                        <label
                            htmlFor="email"
                            className="block text-sm font-bold mb-[10px]"
                        >
                            Имейл
                        </label>
                        <Input
                            id="email"
                            type="email"
                            name="email"
                            placeholder='Вашият имейл адрес'
                            showRemoveIcon
                            iconSrc={MessageIcon}
                            iconAlt="Message Icon"
                            enteredValue={enteredEmail}
                            onChangeHandler={emailChangeHandler}
                            onBlurHandler={emailBlurHandler}
                            reset={emailReset}
                        />
                    </div>
                    <div
                        className={`
                            flex flex-col justify-start items-start gap-y-[10px] md:col-span-2
                            ${messageHasError ? 'invalid' : ''}
                        `}
                    >
                        <label
                            htmlFor="message"
                            className="block text-sm font-bold mb-[10px]"
                        >
                            Допълнителна информация към поръчката
                        </label>
                        <TextArea
                            id="message"
                            name="message"
                            value={enteredMessage}
                            onChange={messageChangeHandler}
                            onBlur={messageBlurHandler}
                            rows={5}
                            cols={10}
                        />
                    </div>
                    <div className="flex justify-end md:col-span-2">
                        <SubmitButton/>
                    </div>
                </form>
            </section>
        </Fragment>
    );
};

export default ContactForm;
