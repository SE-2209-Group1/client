const Card = ({ children, header }) => {
    let classes = "overflow-hidden bg-white shadow-md shadow-gray-300 rounded-md mb-5 w-full"

    return (
        <div className={classes}>
            <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900">{header}</h3>
            </div>
            <div className="border-t border-gray-200">
                {children}
            </div>
        </div>
    )
}
export default Card