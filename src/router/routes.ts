import {ASCII_PAGE_ROUTE, COMPARE_PAGE_ROUTE, IDENTICAL_PAGE_ROUTE, MAIN_PAGE_ROUTE} from "../utils/consts";
import NotFoundPage from "../pages/PageNotFound/NotFoundPage";
import MainPage from "../pages/MainPage/MainPage";
import ComparePage from "../pages/ComparePage/ComparePage";
import IdenticalPage from "../pages/IdenticalPage/IdenticalPage";
import AsciiPage from "../pages/AsciiPage/AsciiPage";

interface RouteI {
    path: string,
    Component: Function
}

export const publicRoutes:RouteI[] = [
    {
        path: "/",
        Component: MainPage
    },
    {
        path: COMPARE_PAGE_ROUTE,
        Component: ComparePage
    },
    {
        path: MAIN_PAGE_ROUTE,
        Component: MainPage
    },
    {
        path: IDENTICAL_PAGE_ROUTE,
        Component: IdenticalPage
    },
    {
        path: ASCII_PAGE_ROUTE,
        Component: AsciiPage
    },
    {
        path: "*",
        Component: NotFoundPage
    }
]