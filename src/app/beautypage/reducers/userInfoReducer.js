export const initialState = {
    ip: null,
    countryName: null,
    countryCode: null,
    countryPhoneCode: null,
    utcOffset: "+0000"
};

const userInfoReducer = (state = initialState, action) => {
    switch (action.type) {

        case "BP_SET_USER_INFO": {
            const { userData } = action;
            if (!userData) {
                return state;
            }
            return {
                ...initialState,
                ip: userData.ip,
                countryName: userData.country_name,
                countryCode: userData.country_code,
                countryPhoneCode: userData.country_calling_code,
                utcOffset: userData.utc_offset,
            };
        }

        case "BP_CLEAN_USER_INFO": {
            return {
                ...initialState,
            };
        }

        default:
            return state;
    }
};

export default userInfoReducer;
