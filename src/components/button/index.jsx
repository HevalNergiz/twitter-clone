import classNames from "classnames";
import {createElement} from "react";
import PropTypes from "prop-types";

export default function Button({size, children}){
    return createElement("button", {
            className: classNames("bg-[#1D9BF9] text-white border border-black rounded-full text-center font-bold hover:bg-[#1A8CD8] flex items-center justify-center transition-colors",
                {"px-4 min-w-[36px] min-h-[36px] font-bold": size === "normal"},
                {"w-full h-[52px] text-[17px]": size === "large"}
            )
        }, children)
}

Button.propTypes = {
    size: PropTypes.oneOf(["normal", "large"]),
}

Button.defaultProps ={
    size: "normal"
}