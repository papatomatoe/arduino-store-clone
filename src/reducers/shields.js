import { FETCH_SHIELDS } from "../constants/shields";

const initialState = {
    shields: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SHIELDS:
            const shields = action.payload.map((shield) => ({
                id: shield.id,
                title: shield.title,
                description: shields.description,
                image: shields.images.list,
                price: shields.price,
                link: shield.link || "shields",
            }));

            return { ...state, shields };
        default:
            return state;
    }
};

export default reducer;
