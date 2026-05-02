"use client";

import Loader from "@/components/Loader";
import { AnimatePresence } from "motion/react";
import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "portfolio_loader_seen";

export function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const seen = sessionStorage.getItem(STORAGE_KEY);
      if (!seen) setShowLoader(true);
    } catch {
      setShowLoader(true);
    }
  }, []);

  const handleDismiss = useCallback(() => {
    setShowLoader(false);
  }, []);

  return (
    <>
      {mounted && (
        <AnimatePresence
          mode="sync"
          onExitComplete={() => {
            try {
              sessionStorage.setItem(STORAGE_KEY, "1");
            } catch {
              /* ignore */
            }
          }}
        >
          {showLoader && <Loader key="portfolio-loader" onDismiss={handleDismiss} />}
        </AnimatePresence>
      )}
      {children}
    </>
  );
}
