import Cookies from "js-cookie";
import { URL } from "../../config";

let token = "";

const customHeaders = {
  "Content-Type": "application/json",
  "x-api-key": "$2b$10$J/ty1/.nmtL7TCbJ3m5D2.2bc0EYmSswd2NlkSe4R5bZ94pOwMNq2",
};

const customHeadersWithAuth = {
  ...customHeaders,
  Authorization: `Bearer ${token}`,
};

const postApi = async (path, data, isAuthenticated) => {
  if (typeof window !== "undefined") {
    // Perform localStorage action
    //  token = localStorage.getItem('a_token')

    token = Cookies.get("a_token");
  }

  let header;

  if (isAuthenticated) {
    header = {
      "Content-Type": "application/json",
      "x-api-key":
        "$2b$10$J/ty1/.nmtL7TCbJ3m5D2.2bc0EYmSswd2NlkSe4R5bZ94pOwMNq2",
      Authorization: `Bearer ${token}`,
      "Cache-Control": "public, s-maxage=1000, stale-while-revalidate=590",
    };
  } else {
    header = {
      "Content-Type": "application/json",
      "x-api-key":
        "$2b$10$J/ty1/.nmtL7TCbJ3m5D2.2bc0EYmSswd2NlkSe4R5bZ94pOwMNq2",
      "Cache-Control": "public, s-maxage=1000, stale-while-revalidate=590",
    };
  }

  return await fetch(`${URL}${path}`, {
    method: "post",
    headers: header,
    body: JSON.stringify(data),
  })
    .then((data) => data.json())
    .then((data) => {
      return data;
    });
};

const getApi = async (path, isAuthenticated) => {
  if (typeof window !== "undefined") {
    // Perform localStorage action
    //  token = localStorage.getItem('a_token')
    token = Cookies.get("a_token");
  }

  let header;

  if (isAuthenticated) {
    header = {
      "Content-Type": "application/json",
      "x-api-key":
        "$2b$10$J/ty1/.nmtL7TCbJ3m5D2.2bc0EYmSswd2NlkSe4R5bZ94pOwMNq2",
      Authorization: `Bearer ${token}`,
      "Cache-Control": "public, s-maxage=1000, stale-while-revalidate=590",
    };
  } else {
    header = {
      "Content-Type": "application/json",
      "x-api-key":
        "$2b$10$J/ty1/.nmtL7TCbJ3m5D2.2bc0EYmSswd2NlkSe4R5bZ94pOwMNq2",
      "Cache-Control": "public, s-maxage=1000, stale-while-revalidate=590",
    };
  }

  return await fetch(`${URL}${path}`, {
    method: "get",
    headers: header,
  })
    .then((data) => data.json())
    .then((data) => {
      return data;
    });
};

const putApi = async (path, data, isAuthenticated) => {
  if (typeof window !== "undefined") {
    // Perform localStorage action
    //  token = localStorage.getItem('a_token')

    token = Cookies.get("a_token");
  }

  let header;

  if (isAuthenticated) {
    header = {
      "Content-Type": "application/json",
      "x-api-key":
        "$2b$10$J/ty1/.nmtL7TCbJ3m5D2.2bc0EYmSswd2NlkSe4R5bZ94pOwMNq2",
      Authorization: `Bearer ${token}`,
    };
  } else {
    header = {
      "Content-Type": "application/json",
      "x-api-key":
        "$2b$10$J/ty1/.nmtL7TCbJ3m5D2.2bc0EYmSswd2NlkSe4R5bZ94pOwMNq2",
    };
  }

  return await fetch(`${URL}${path}`, {
    method: "put",
    headers: header,
    body: JSON.stringify(data),
  })
    .then((data) => data.json())
    .then((data) => {
      return data;
    });
};

export const logOut = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
};

// OTP verification

export const getOtp = async (data) => {
  return await postApi("/getOtpPhone", data, false);
};

export const verifyOtp = async (data) => {
  return await postApi("/verifyOtpPhone", data, false);
};

// User

export const fetchUser = async () => {
  return await getApi("/user", true);
};

export const updateUser = async (data) => {

  const keys = Object.keys(data);
  let newData = {};

  for (let index = 0; index < keys.length; index++) {
    const element = data[keys[index]];
    newData[keys[index]] = element;
  }

  return await postApi("/user", newData, true);
};

// Trip

export const fetchPopularTrips = async () => {
  return await getApi("/trips", false);
};

export const fetchSingleTrip = async (id) => {
  return await getApi(`/trip?id=${id}`, false);
};

export const fetchSingleTripBySlug = async (slug) => {
  return await getApi(`/trip/${slug}`, false);
};

export const fetchMultipleTrips = async (data) => {
  return await postApi(`/trips`, data, true);
};

export const fetchTripsByCollection = async (slug) => {
  return await getApi(`/tripByCollection/${slug}`, true);
};



// Search Trips

export const fetchSeachTrips = async (search) => {
  return await getApi(`/search${search}`, false);
};

// Collection

export const fetchCollectionNames = async (data) => {
  return await getApi("/collNames", false);
};

export const fetchAllCollections = async () => {
  return await getApi("/collections", false);
};

export const fetchSingleCollection = async (slug) => {
  return await getApi(`/collection/${slug}`, false);
};


// Favourite Trip

export const addToFavourite = async (data) => {
  return await postApi("/addFavouriteTrip", data, true);
};

export const removeFromFavourite = async (data) => {
  return await postApi("/removeFavouriteTrip", data, true);
};

//  Ticket

export const bookTrip = async (data) => {
  return await postApi("/bookTrip", data, true);
};

export const fetchTickets = async (data) => {
  return await getApi("/ticket", true);
};

// Payment

export const getPaymentOrderId = async (amount) => {
  return await postApi("/getpaymentorderid", { amount }, true);
};

export const verifyPayment = async (data) => {
  return await postApi("/verifypayment", data, true);
};


// Trending Locations

export const fetchTrendingLocations = async () => {
  return await getApi("/topTrendingLocations", false);
};