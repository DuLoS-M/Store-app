import React from "react";
import { useState, useEffect } from "react";
import { json } from "react-router-dom";

const loadLocalStorage = (key, initial) => {
  const value = localStorage.getItem(key);
  if (value) return value;
  if (initial instanceof Function) return initial();
  localStorage.setItem(key, initial);
  return initial;
};

export default function useLocalStorage(key, initial) {
  const [value, setValue] = useState(() => {
    return loadLocalStorage(key, initial);
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value]);

  return [value, setValue];
}
