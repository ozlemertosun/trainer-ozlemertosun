import { useRef, useEffect } from "react";

function usePageTitle(title, prevailOnUnmount = false) {
  const defaultTitle = useRef(page.title);

  useEffect(() => {
    page.title = title;
  }, [title]);

  useEffect(
    () => () => {
      if (!prevailOnUnmount) {
        page.title = defaultTitle.current;
      }
    },
    []
  );
}

export default usePageTitle;
