const BASE_URL = `http://localhost:3000`;

export const Trade = {
  create(params) {
    return fetch(`${BASE_URL}/trades`, {
      method: "POST",
      credentials: "include",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(params)
    }).then(res => res.json());
  },

  currentUserTrades(params) {
    return fetch(`${BASE_URL}/${params}/trades`, {
      credentials: "include",
      headers: {"Content-Type": "application/json"},
    }).then(res => res.json())
  },

  openTrades() {
    return fetch(`${BASE_URL}/trades/`, {
      credentials: "include",
      headers: {"Content-Type": "application/json"},
    }).then(res => res.json())
  },

  myTrades() {
    return fetch(`${BASE_URL}/trades/my`, {
      credentials: "include",
      headers: {"Content-Type": "application/json"},
    }).then(res => res.json())
  },

  search(params) {
    return fetch(`${BASE_URL}/trades`, {
      credentials: "include",
      headers: {"Content-Type": "application/json"},
      // body: JSON.stringify(params)
    }).then(res => res.json());
  },

  makeOffer(params) {
    return fetch(`${BASE_URL}/trades/${params.offer.trade_id}/offers`, {
      method: "POST",
      credentials: "include",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(params)
    }).then(res => res.json());
  },

  acceptOffer(params) {
    return fetch(`${BASE_URL}/trades/${params.trade.id}`, {
      method: "PATCH",
      credentials: "include",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(params)
    }).then(res => res.json());
  },

  find(params) {
    return fetch(`${BASE_URL}/trades/${params}`, {
      credentials: "include",
      headers: {"Content-Type": "application/json"}
    }).then(res => res.json());
  }
}
//=====
export const Offer = {
  accept(params) {
    return fetch(`${BASE_URL}/trades/${params.trade_id}/offers/${params.id}`, {
      method: "PATCH",
      credentials: "include",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(params)
    }).then(res => res.json());
  }
}
//=====
export const Session = {
  create(params) {
    return fetch(`${BASE_URL}/session`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  },

  destroy() {
    return fetch(`${BASE_URL}/session`, {
      method: "DELETE",
      credentials: "include"
    }).then(res => res.json());
  }
};
//======
export const User = {
  current() {
    return fetch(`${BASE_URL}/users/current`, {
      credentials: "include"
    }).then(res => res.json());
  },

  create(user_params) {
    return fetch(`${BASE_URL}/users/`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user_params)
    }).then(res => res.json())
  },

  show(id) {
    return fetch(`${BASE_URL}/users/${id}`, {
      credentials: "include"
    }).then(res => res.json())
  }

};