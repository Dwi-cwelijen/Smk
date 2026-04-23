import { Layout } from "../../view/layouts/home-layout";
import Home from "../../view/pages/home";

export const homeRoute = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {

                index : true,
                element : <Home />
            }

        ]

    }
]