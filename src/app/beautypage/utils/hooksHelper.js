import { useEffect } from "react";

export default (event, handler) => {
    useEffect(() => {
        window.addEventListener(event, handler, false);

        return () => {
            window.removeEventListener(event, handler);
        };
    }, [event, handler]);
};
