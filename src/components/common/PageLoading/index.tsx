"use client";

// Libraries
import { useSidebar } from "@/hooks";
import { AnimatePresence, motion } from "motion/react";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Lottie from "react-lottie";
//
import LottieLoading from "@/assets/json/loading.json";

interface PageLoadingProps {
  children?: React.ReactNode;
}

const PageLoadingWrapper = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;

  .page-loading {
    &__left,
    &__right {
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
    }

    &__left {
      background-color: white;
      clip-path: polygon(0 0, 0% 100%, 100% 100%);
    }
    &__right {
      background-color: black;
      clip-path: polygon(100% 0, 0 0, 100% 100%);
    }
  }
`;

const lottieDefaultOptions = {
  loop: true,
  autoplay: true,
  animationData: LottieLoading,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export const PageLoading: React.FC<PageLoadingProps> = (props) => {
  const { children } = props;
  const { currentMenu } = useSidebar();

  const [state, setState] = useState({
    loading: true,
  });
  const { loading } = state;

  // Ref
  const timeoutRef = React.useRef<any>(null);

  useEffect(() => {
    if (!loading) {
      setState((state) => ({
        ...state,
        loading: true,
      }));
    }

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setState((state) => ({
        ...state,
        loading: false,
      }));
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentMenu]);

  return (
    <AnimatePresence>
      {state.loading && (
        <PageLoadingWrapper>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
            }}
            className="z-30"
          >
            <Lottie
              options={lottieDefaultOptions}
              height={200}
              width={200}
              // isStopped={this.state.isStopped}
              // isPaused={this.state.isPaused}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              top: "120%",
              left: "120%",
            }}
            transition={{
              delay: 1,
              duration: 1.5,
              ease: [0, 0.56, 0.98, 0.16],
              opacity: { delay: 0, duration: 0.5 },
            }}
            exit={{
              opacity: 0,
            }}
            className="page-loading__left"
          ></motion.div>
          <motion.div
            className="page-loading__right"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, top: "-120%", left: "-120%" }}
            transition={{
              delay: 1,
              duration: 1.5,
              ease: [0, 0.56, 0.98, 0.16],
              opacity: { delay: 0, duration: 0.5 },
            }}
            exit={{
              opacity: 0,
            }}
          ></motion.div>
          {children}
        </PageLoadingWrapper>
      )}
    </AnimatePresence>
  );
};
