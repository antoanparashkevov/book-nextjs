import dynamic from "next/dynamic";
import React, { Fragment } from "react";
import { useFormStatus } from "react-dom";

const Notification = dynamic(() => import('./Notification'));

import type { initialStateType } from "./ContactForm";

const SubmitButton: React.FC<{formState?: initialStateType, formIsValid: boolean}> = ({
	formState,
	formIsValid
}) => {
	const { pending } = useFormStatus();

	return (
		<Fragment>
			{/*{ !pending && (formState.errors?.length! > 0 || formState.message) && (*/}
				<Notification
					status='success'
					// status={formState.message ? "success" : "error"}
					timeout={4000}
            >
					test
					{/*{formState.message ||*/}
					{/*	(formState.errors*/}
					{/*		? formState :*/}
					{/*		"Something went wrong!")}*/}
				</Notification>
			{/*)}*/}
			<button
				type="submit"
				aria-disabled={pending || !formIsValid}
				disabled={pending || !formIsValid}
				className="base-btn"
            >
				{pending ? "Изпращане..." : "Поръчай"}
			</button>
		</Fragment>
	);
}

export default SubmitButton;