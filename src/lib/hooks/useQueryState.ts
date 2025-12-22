import { useCallback, useMemo } from 'react';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export const useQueryState = (key: string, defaultValue: number) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentValue = useMemo(
    () => (searchParams.get(key) ? searchParams.get(key) : defaultValue),
    [searchParams, defaultValue, key]
  );

  const setUrlParam = useCallback(
    (newValue: number) => {
      const params = new URLSearchParams(searchParams.toString());

      if (newValue === defaultValue || !newValue) {
        params.delete(key);
      } else {
        params.set(key, String(newValue));
      }

      const newUrl = `${pathname}?${params.toString()}`;
      router.push(newUrl, { scroll: false });
    },
    [searchParams, pathname, router]
  );

  return { currentValue: Number(currentValue), setUrlParam };
};
