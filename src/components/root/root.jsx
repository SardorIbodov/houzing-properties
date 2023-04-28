import React from "react";
import { Header } from "../header/header";
import { Footer } from "../footer/index";
import { Properties } from "../properties";
import Filter from "../filter";

export class Root extends React.Component {
  render() {
    return (
      <>
        <Header></Header>
				<Filter></Filter>
				<Properties></Properties>
				<Footer></Footer>
      </>
    );
  }
}
