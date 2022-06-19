import React from 'react';
import { pages } from '@/data/pages';
import { Links, Action } from '@/mytypes';

const Actions: React.FC<Links> = (props: Links) => {
  return (
    <div className="flex flex-col items-start justify-start my-4">
      {!props.random ? (
        props.actions.map((action: Action) => {
          return (
            <button
              key={action.id}
              onClick={() => props.setPage(pages[action.id])}
              className="text-left max-w-[80%] rounded-lg my-2 ml-2 p-2 first-letter:uppercase btn"
            >
              {action.text}
            </button>
          );
        })
      ) : (
        <button
          onClick={() =>
            props.setPage(
              pages[
                props.actions[Math.floor(Math.random() * props.actions.length)]
                  .id
              ],
            )
          }
          className="text-left max-w-[80%] rounded-lg my-2 ml-2 p-2 btn"
        >
          {props.actions[0].text}
        </button>
      )}
    </div>
  );
};

export default Actions;
