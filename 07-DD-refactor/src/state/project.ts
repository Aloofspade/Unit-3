import { Project, Status } from "../interfaces/project-model"

//! Project State Management 


export type Listener<T> = (item: T[]) => void

export class State<T> {
    protected listeners: Listener<T>[] = []

    addListener(listenerFN: Listener<T> ){
        this.listeners.push(listenerFN)
    }

}

export class ProjectState extends State<Project>{
    private projects: Project[] = []
    private static instance: ProjectState;

    private constructor() {
        super()
    }

    addProject(title: string, description: string, people: number) {
        const newProject = new Project(
            Math.random().toString(),
            title,
            description,
            people,
            Status.ACTIVE
        );
        this.projects.push(newProject)
        this.updateListeners();
    }

moveProject(projectID: string, newStatus: Status){
    const project = this.projects.find((prj) => prj.id === projectID);
    if(project && project.status !== newStatus){
        project.status = newStatus;
        this.updateListeners();
    }
}

static getInstance(){
    if(this.instance){
        return this.instance
    }
    this.instance = new ProjectState();
    return this.instance;
}

    private updateListeners() {
        for (const listenerFN of this.listeners){
            listenerFN(this.projects.slice())
        }
    }
}

export const projectState = ProjectState.getInstance();