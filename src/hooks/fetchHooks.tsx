import { useState, useEffect } from "react";
import { FETCH_URL } from "utils/globalVariables";

export const useGetRequest = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const getRequest = async (to: string) => {
    setLoading(true);
    try {
      const response = await fetch(`${FETCH_URL}${to}`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message);
      }

      return data;
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
    setLoading(false);
  };

  return { error, loading, getRequest };
};

export const usePostRequest = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const postRequest = async (to: string, body: any) => {
    setLoading(true);
    try {
      const response = await fetch(`${FETCH_URL}${to}`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message);
      }

      return data;
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
    setLoading(false);
  };

  return { error, loading, postRequest };
};

export const usePutRequest = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const putRequest = async (to: string, body: any) => {
    setLoading(true);
    try {
      const response = await fetch(`${FETCH_URL}${to}`, {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message);
      }

      return data;
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
    setLoading(false);
  };

  return { error, loading, putRequest };
};

export const useDeleteRequest = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const deleteRequest = async (to: string) => {
    setLoading(true);
    try {
      const response = await fetch(`${FETCH_URL}${to}`, {
        method: "DELETE",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message);
      }

      return data;
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
    setLoading(false);
  };

  return { error, loading, deleteRequest };
};
