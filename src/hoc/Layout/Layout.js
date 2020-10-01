import React, {Component} from "react";
import Aux from "../Auxillary/Auxillary";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import Main from "../Main/Main";

class Layout extends Component {
 render (){
  return (
        <Aux>
            <Toolbar></Toolbar>
            <Main>Test</Main>
        </Aux>
  )
 }
}




export default Layout;
