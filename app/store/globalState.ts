'use client';

import { atom } from "recoil";

export const isManagerState = atom({
  key: 'isManager',
  default: false,
});

export const selectedCategoryIdState = atom({
  key: 'selectedCategoryId',
  default: 0,
});