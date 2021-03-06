import { useEffect, useState } from 'react';
import DarkMode from '@/components/DarkMode';
import Content from '@/components/Content';
import Actions from '@/components/Actions';
import SEO from '@/components/Seo';
import { pages } from '@/data/pages';

export default function Home() {
  let initialIndex = `intro`;

  if (typeof window !== `undefined`) {
    initialIndex = window.localStorage.getItem(`page`) ?? `intro`;
  }

  const [page, setPage] = useState(pages[initialIndex]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (page && page.id) window.localStorage.setItem(`page`, page.id);
  }, [page, page?.id]);
  return (
    <>
      <SEO title="My Gamebook" />
      <main className="px-4 py-10 mx-auto font-sans text-xl text-center text-black dark:text-gray-200 max-w-prose">
        <DarkMode />
        {page !== undefined ? (
          <>
            <Content html={page.html} />
            <Actions
              actions={page.actions}
              setPage={setPage}
              random={page.random}
            />
          </>
        ) : (
          <>
            <div>
              <h1>Error with selected page</h1>
              <button
                onClick={() => setPage(Object.entries(pages)[0][1])}
                className="text-left w-[80%] border-l rounded-lg my-2 p-2 btn"
              >
                Go back
              </button>
            </div>
          </>
        )}
      </main>
    </>
  );
}
