const setPosition = (posicion) => {
    switch (posicion) {
        case "center":
            return ["center", "center"];
        case "center-left":
            return ["flex-start", "center"];
        case "center-right":
            return ["flex-end", "center"];
        case "bottom-center":
            return ["center", "flex-end"];
        case "bottom-left":
            return ["flex-start", "flex-end"];
        case "bottom-right":
            return ["flex-end", "flex-end"];
        case "top-center":
            return ["center", "flex-start"];
        case "top-left":
            return ["flex-start", "flex-start"];
        case "top-right":
            return ["flex-end", "flex-start"];
        default:
            return ["center", "center"];
    }
};

const setPositionBy = (direction, position) => {

    const [x, y] = setPosition(position);

    return (direction === "column" ? [y, x] : [x, y]);
};

export { setPositionBy }