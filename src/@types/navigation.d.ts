export type RouteParamsList = {
    Home: undefined;
    NewNote: undefined;
    ViewNote: {
        id: string;
        title: string;
        description: string;
    };
}
declare global {
    namespace ReactNavigation {
        interface RootParamList extends RouteParamsList {}
    }
}