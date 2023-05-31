const BASE_URL = "https://contact.mediusware.com/api";

export const getAllContacts = async (search) => {
  try {
    const url = new URL(`${BASE_URL}/contacts/`);
    if (search) {
      url.searchParams.set("search", search);
    } else {
      url.searchParams.delete("search");
    }

    const response = await fetch(url);
    if (response.statusText !== "OK") {
      throw new Error("Failed to fetch contacts");
    }

    const data = await response.json();
    return data?.results || [];
  } catch (error) {
    console.log(error?.message || "Something went wrong!");
  }
};

export const getUsContacts = async (search) => {
  try {
    const url = new URL(`${BASE_URL}/country-contacts/United%20States/`);
    if (search) {
      url.searchParams.set("search", search);
    } else {
      url.searchParams.delete("search");
    }

    const response = await fetch(url);
    if (response.statusText !== "OK") {
      throw new Error("Failed to fetch contacts");
    }

    const data = await response.json();
    return data?.results || [];
  } catch (error) {
    console.log(error?.message || "Something went wrong!");
  }
};
