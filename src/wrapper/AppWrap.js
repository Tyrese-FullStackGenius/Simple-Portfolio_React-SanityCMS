import React from "react";

const AppWrap = (Component, idName) => function HOC() {
  return (
    <section className={`${idName} section`} id={idName}>
      <Component/>
    </section>
  )
}

export default AppWrap
