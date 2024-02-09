"use client";

import dynamic from "next/dynamic";
import { Fragment } from "react";
import { useFormStatus } from "react-dom";

const Notification = dynamic(() => import('./Notification'));

import type { ZodIssue } from "zod";
import type { initialStateType } from "./ContactForm";

const SubmitButton: React.FC<{formState: initialStateType}> = ({formState}) => {
	const { pending } = useFormStatus();

	return (
		<Fragment>
			{ !pending && (formState.errors?.length! > 0 || formState.message) && (
				<Notification
					status={formState.message ? "success" : "error"}
					timeout={4000}
            >
					{formState.message ||
						(formState.errors
							? formState
									.errors!.map((error: ZodIssue) => error.message)
									.join("\n")
							: "Something went wrong!")}
				</Notification>
			)}
			<button
				type="submit"
				aria-disabled={pending}
				disabled={pending}
				className="base-btn"
            >
				{pending ? "Submitting..." : "Submit"}
			</button>
		</Fragment>
	);
}

export default SubmitButton;