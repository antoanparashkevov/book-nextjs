"use client";

import React, {FormEvent, Fragment, useState} from "react";
import Image from 'next/image';

import BookCover from '../../../public/images/book_cover.jpg';

import PersonIcon from "../../../public/icons/user.svg";
import MessageIcon from "../../../public/icons/message.svg";
import MarkerPinIcon from '../../../public/icons/marker-pin.svg';

import Input from "./Input";
import TextArea from "./TextArea";

const SubmitButton = dynamic(() => import("./SubmitButton"));

import dynamic from "next/dynamic";
import {useFormStatus} from "react-dom";
import useInput from "@/hooks/useInput";

import GiftBoxImage from '../../../public/images/gift_box.webp';
import RadioButton from "@/components/UI/RadioButton";

export type initialStateType = {
    message: string,
}

const ContactForm: React.FC = () => {
    const formState = useFormStatus();
    const [selectedOffer, setSelectedOffer] = useState<string>('gift');
    const [selectedDeliveryType, setSelectedDeliveryType] = useState<string>('office');

    const onOfferChange = (event: any) => {
        setSelectedOffer(event.target.value);
    }

    const onAddressChange = (event: any) => {
        setSelectedDeliveryType(event.target.value);
    }

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
        value: enteredDeliveryAddress,
        isValid: deliveryAddressIsValid,
        hasError: deliveryAddressHasError,
        valueChangeHandler: deliveryAddressChangeHandler,
        inputBlurHandler: deliveryAddressBlurHandler,
        reset: deliveryAddressReset
    } = useInput(
        (value) => value.trim().length > 0 && value.trim().length > 3,
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

    const formIsValid = firstNameIsValid && lastNameIsValid && emailIsValid && deliveryAddressIsValid && messageIsValid;

    const handleFormSubmission = async (event: FormEvent) => {
        event.preventDefault();

        if(!formIsValid) {
            return;
        }

        console.log('firstName >>> ', enteredFirstName)
        console.log('lastName >>> ', enteredLastName)
        console.log('email >>> ', enteredEmail)
        console.log('address >>> ', enteredDeliveryAddress)
        console.log('message >>> ', enteredMessage)
        console.log('selected offer >>> ', selectedOffer)
        console.log('selected delivery type >>> ', selectedDeliveryType)
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
                    <fieldset className="flex flex-wrap justify-center items-center gap-4 md:col-span-2">

                        <RadioButton
                            id='gift'
                            value='gift'
                            onOptionChange={onOfferChange}
                            selected={selectedOffer}
                        >
                            <Image
                                src={GiftBoxImage}
                                alt='Gift box'
                                className='rounded-[8px] w-1/2'
                            />
                            <p className='text-sm text-gray-500'>
                                <strong className='text-red-600'>34.99лв</strong> с подаръчна кутия + безплатна доставка
                                до офис
                            </p>
                        </RadioButton>

                        <RadioButton
                            id='no-gift'
                            value='no-gift'
                            onOptionChange={onOfferChange}
                            selected={selectedOffer}
                        >
                            <p className='text-sm text-gray-500'>
                                <strong className='text-red-600'>24.99лв</strong> без подаръчна кутия
                            </p>
                        </RadioButton>
                    </fieldset>

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

                    <fieldset className="flex flex-col justify-center items-start gap-y-4 md:col-span-2">

                        <div className='flex gap-x-2'>
                            <input
                                id='office'
                                type="radio"
                                name='address_type'
                                value='office'
                                onChange={onAddressChange}
                                checked={selectedDeliveryType === 'office'}
                            />
                            <label
                                className={`text-[16px] ${selectedDeliveryType === 'office' ? 'font-bold' : 'font-normal'}`}
                                htmlFor="office"
                            >
                                Доставка до офис
                            </label>
                        </div>

                        <div className='flex gap-x-2'>
                            <input
                                id='address'
                                type="radio"
                                name='address_type'
                                value='address'
                                onChange={onAddressChange}
                                checked={selectedDeliveryType === 'address'}
                            />
                            <label
                                className={`text-[16px] ${selectedDeliveryType === 'address' ? 'font-bold' : 'font-normal'}`}
                                htmlFor="address"
                            >
                                Доставка до адрес
                            </label>
                        </div>
                    </fieldset>

                    <div className={`
                            flex flex-col justify-start items-start gap-y-[10px] md:col-span-2
                            ${deliveryAddressHasError ? 'invalid' : ''}
                        `}
                    >
                    <label
                            htmlFor="delivery_address"
                            className="block text-sm font-bold mb-[10px]"
                        >
                            Адрес за доставка
                        </label>
                        <Input
                            id="delivery_address"
                            type="text"
                            name="delivery_address"
                            placeholder='Адрес за доставка'
                            showRemoveIcon
                            iconSrc={MarkerPinIcon}
                            iconAlt="Marker Pin Icon"
                            enteredValue={enteredDeliveryAddress}
                            onChangeHandler={deliveryAddressChangeHandler}
                            onBlurHandler={deliveryAddressBlurHandler}
                            reset={deliveryAddressReset}
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
                        <SubmitButton formIsValid={formIsValid}/>
                    </div>
                </form>
            </section>
        </Fragment>
    );
};

export default ContactForm;
