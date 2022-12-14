const Divider = ({ children, gray, wideDivider }) => {
    let classes = "bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6";

    if (!gray) {
        classes = "bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6";
    }

    if (wideDivider) {
        if (!gray) {
            classes = "bg-white px-4 py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6";
        }
        classes = "bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6";
    }

    return (
        <div className={classes}>
            {children}
        </div>
    )
}
export default Divider;