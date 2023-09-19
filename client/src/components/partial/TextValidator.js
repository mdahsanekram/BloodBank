import React from "react";
import { ValidatorComponent } from "react-form-validator-core";

class TextValidator extends ValidatorComponent {
    errorText() {
        const { isValid } = this.state;

        if (isValid) {
            return null;
        }

        return <span className="textValidatorError">{this.getErrorMessage()}</span>;
    }

    renderValidatorComponent() {
        const { type, errorMessages, validators, requiredError, validatorListener, ...rest } = this.props;

        return (
            <>
                {this.props.name === "detailAboutProject" ? (
                    <textarea
                        {...rest}
                        ref={(r) => {
                            this.input = r;
                        }}
                    ></textarea>
                ) : (
                    <input
                        type={type || "text"}
                        {...rest}
                        ref={(r) => {
                            this.input = r;
                        }}
                    />
                )}
                {this.errorText()}
            </>
        );
    }
}

export default TextValidator;
