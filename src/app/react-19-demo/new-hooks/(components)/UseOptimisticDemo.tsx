"use client";

// Libraries
import React, { useOptimistic, useState } from "react";
import { ReactPlayGround } from "@/components";

// Icons
import { ThumbsUpIcon } from "lucide-react";

const demoCode = `const UseOptimisticDemo = () => {
  const [state, setState] = useState({
    like: 0,
  });

  const [like, setLike] = useOptimistic<number, number>(
    state.like,
    (currentLike, increment) => currentLike + increment
  );

  const formAction = async () => {
    setLike(1);

    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });

    setState({
      like: state.like + 1,
    });
  };

  return (
    <form action={formAction} className="flex flex-col gap-2">
      <div className="text-2xl font-bold">Bài viết số 1</div>
      <div>Số lượt like: {like}</div>
      <Button
        htmlType="submit"
        block={false}
        className="w-fit"
        icon={<ThumbsUpIcon size={16} />}
      >
        Thích
      </Button>
    </form>
  );
};

render(<UseOptimisticDemo />);
`;

export const UseOptimisticDemo: React.FC = () => {
  return (
    <ReactPlayGround
      code={demoCode}
      scope={{
        useState,
        useOptimistic,
        ThumbsUpIcon,
      }}
    />
  );
};
