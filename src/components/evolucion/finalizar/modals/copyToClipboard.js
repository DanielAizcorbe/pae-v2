const copyToClipboard = (text, completado, informarError) => {
    navigator.clipboard.writeText(text)
        .then(() => completado())
        .catch((err) => informarError());
};

export { copyToClipboard }