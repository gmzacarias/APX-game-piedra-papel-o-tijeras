import { initIndexGamePage } from "../src/pages/index-game/index"
import { initRulesGamePage } from "../src/pages/rules-game/rules"
import { initGamePage } from "../src/pages/game/game"
import { initScoreGamePage } from "../src/pages/score-game/score"

const BASE_PATH = "/APX-game-piedra-papel-o-tijeras";

function isGithubPages() {
    console.log(location.host.includes("gmzacarias.github.io"));
    return location.host.includes("gmzacarias.github.io"); 
}

const routes = [
    {
        path: /\/welcomegame/,
        component: initIndexGamePage
    },
    {
        path: /\/rulesgame/,
        component: initRulesGamePage
    },
    {
        path: /\/startgame/,
        component: initGamePage
    },
    
    {
        path: /\/scoregame/,
        component: initScoreGamePage
    }
];

export function initRouter(container: any){
    function goTo(path){
        const completePath = isGithubPages() ? BASE_PATH + path: path;
        history.pushState({}, "", completePath);
        handleRoute(completePath);
    }

    function handleRoute(route){
        console.log("NewRoute: ", route);
        const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;
        console.log("NewRoute: ", newRoute);
        for (const r of routes){
            if (r.path.test(newRoute)) {
                const el = r.component({goTo: goTo});
                while (container.firstChild){
                    container.removeChild(container.firstChild)
                }
                container.appendChild(el)
            }
        }
    }

    if(location.pathname == "/" || "/APX-game-piedra-papel-o-tijeras"){
        goTo("/welcomegame")
    } else {
        handleRoute(location.pathname)
    }

    window.onpopstate = () => {
        handleRoute(location.pathname)
    }

}


