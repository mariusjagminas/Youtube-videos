// to fix material-ui error message, when use enzyme's render method
import React from "react";
React.useLayoutEffect = React.useEffect;
//
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "jest-enzyme";

configure({ adapter: new Adapter() });
