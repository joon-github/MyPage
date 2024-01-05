'use client';

import { atom } from "recoil";

export const isManagerState = atom({
  key: 'isManager',
  default: false,
});