import firebase from "firebase";
const state = {
  circleData: {},
};

const getters = {
  getPersonalData: (state) =>  {
    return state.circleData;
  },
};

const mutations = {
  SET_CIRCLE_DATA_HEADER(state, payload) {
    state.circleData[payload] = [];
  },
  SET_CIRCLE_DATA(state, payload) {
    state.circleData[payload.header] = payload.data;
  },
};

const actions = {
  async GET_CIRCLE_DATA({ state, commit }, payload) {
    return new Promise(async (resolve) => {
      state.circleData[payload]
        ? null
        : commit("SET_CIRCLE_DATA_HEADER", payload);
      // payload => Circle Name *Circle 1*
      const db = firebase.firestore();
      const data = (await db.collection(payload).get()).docs.map((doc) =>
        doc.data()
      );
      commit("SET_CIRCLE_DATA", { header: payload, data: data });
      resolve(true);
    });
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
