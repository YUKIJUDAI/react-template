import { createStore } from "redux";

const loginInfo = {
    username: "",
    password: "",
};

function changeLoginInfo(state = loginInfo, action: any) {
    switch (action.type) {
        case "CHANGE":
            return (state = action.text);
        default:
            return state;
    }
}

const store = createStore(changeLoginInfo);

store.subscribe(() => {
    console.log(store.getState());
});

export default store;
