import React from "react";

const ToggleSection = ({ showCondition, toggleFunction, children, title }) => {

    return (
        <section className="seccion">
            <h2 onClick={() => toggleFunction(!showCondition)}>
                {showCondition ? "- " : "+ "}{title}
            </h2>
            {showCondition ? <div className="secction-body">{children}</div> : ""}
        </section>
    );
};

export { ToggleSection }