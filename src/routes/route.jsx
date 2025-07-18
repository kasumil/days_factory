import Days from "../pages/Days";
import Login from "../pages/Login";
import Main from "../pages/Main";
import Register from "../pages/Register";
import Day4 from "../practice/days/Day4";
import Day5 from "../practice/days/Day5";
import Day6 from "../practice/days/Day6";

// 라우트 타입 정의
const ROUTE_TYPES = {
  PROTECTED: 'protected',
  PUBLIC: 'public'
};

const routes = [
  { 
    path: '/', 
    component: Main, 
    type: ROUTE_TYPES.PROTECTED,
    exact: true
  },
  { 
    path: '/login', 
    component: Login,
    type: ROUTE_TYPES.PUBLIC,
    exact: true
  },
  { 
    path: '/register', 
    component: Register,
    type: ROUTE_TYPES.PUBLIC,
    exact: true
  },
  {
    path: '/days',
    component: Days,
    type: ROUTE_TYPES.PROTECTED,
    exact: true
  },
  {
    path: '/days/day4',
    component: Day4,
    type: ROUTE_TYPES.PROTECTED,
    exact: true
  },
  {
    path: '/days/day5',
    component: Day5,
    type: ROUTE_TYPES.PROTECTED,
    exact: true
  },
  {
    path: '/days/day6',
    component: Day6,
    type: ROUTE_TYPES.PROTECTED,
    exact: true
  }
];

export { routes, ROUTE_TYPES };
export default routes;