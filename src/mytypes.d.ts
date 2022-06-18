import React from 'react';

interface Action {
  id: string;
  text: string;
}

interface IPage {
  id: string;
  html: string;
  random?: boolean;
  actions: Action[];
}

type PageDict = Record<string, IPage>;

interface IContent {
  html: string;
}

interface Links {
  actions: Action[];
  setPage: React.Dispatch<React.SetStateAction<IPage>>;
  random?: boolean;
}

export { IPage, PageDict, IContent, Links, Action };
