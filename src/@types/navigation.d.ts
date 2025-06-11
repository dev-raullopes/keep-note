export type RouteParamsList = {
    Home: undefined;
    NewNote: undefined;
    NoteDetails: {
        id: number;
        title: string;
        description: string;
    };
}
declare global {
    namespace ReactNavigation {
        interface RootParamList extends RouteParamsList {}
    }
}