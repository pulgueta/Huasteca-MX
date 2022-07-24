import { FaExclamationTriangle } from "react-icons/fa";

export const helperTextError = (idError) => {
    return (
        <>
            <label htmlFor="Error" className="flexlab mt-1 text-red-600 text-sm">
                <FaExclamationTriangle fontSize={'17px'} className="mr-2 text-red-600" />
                {`Campo ${idError} requerido`}
            </label>
        </>
    )
}
