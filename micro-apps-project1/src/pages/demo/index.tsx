import { useEffect } from "react";
import { useObserver, Observer, useLocalStore } from "mobx-react";
import { store } from "../../store";

function MouseEventListenerMobx(props: any) {
  const state = useLocalStore(
    (target) => ({
      x: 0,
      y: 0,
      handler(e: any) {
        const nx = e.x;
        const ny = e.y;

        state.x = nx;
        state.y = ny;
      },
    }),
    props
  );

  useEffect(() => {
    document.addEventListener("mousemove", state.handler);
    return () => document.removeEventListener("mousemove", state.handler);
  }, []);

  console.log("props.children:", props.children);
  return useObserver(() => (
    <div style={{ height: "50vh", width: "1000px" }}>
      坐标：x: {state.x} y: {state.y}
    </div>
  ));
}

// 方法1
export function Demo1() {
  const localStore = useLocalStore(() => store);
  return useObserver(() => (
    <div onClick={localStore.setCount}>
      {localStore.count}
      <MouseEventListenerMobx />
    </div>
  ));
}

// 方法2
export function Demo2() {
  const localStore = useLocalStore(() => store);
  return <Observer>{() => <span>{localStore.count}</span>}</Observer>;
}
