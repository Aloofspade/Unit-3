//! Drag & Drop Interfaces 
interface Draggable {
    dragStartHandler(event: DragEvent): void;
    dragEndHandler(event: DragEvent): void;
}

interface DragTarget {
    dragOverHandler(event: DragEvent): void
    dropHandler(event: DragEvent): void
    dragLeaveHandler(event: DragEvent): void
}

//! Project Type 


enum Status{
    ACTIVE,
    FINISHED

}
class Project {
    constructor(
        public id: string,
        public title: string,
        public description: string,
        public people: number,
        public status: Status 
    ) {};
}

//! Project State Management 


type Listener<T> = (item: T[]) => void

class State<T> {
    protected listeners: Listener<T>[] = []

    addListener(listenerFN: Listener<T> ){
        this.listeners.push(listenerFN)
    }

}

class ProjectState extends State<Project>{
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

const projectState = ProjectState.getInstance();