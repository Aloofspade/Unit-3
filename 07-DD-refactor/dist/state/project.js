import { Project, Status } from "../interfaces/project-model";
export class State {
    constructor() {
        this.listeners = [];
    }
    addListener(listenerFN) {
        this.listeners.push(listenerFN);
    }
}
export class ProjectState extends State {
    constructor() {
        super();
        this.projects = [];
    }
    addProject(title, description, people) {
        const newProject = new Project(Math.random().toString(), title, description, people, Status.ACTIVE);
        this.projects.push(newProject);
        this.updateListeners();
    }
    moveProject(projectID, newStatus) {
        const project = this.projects.find((prj) => prj.id === projectID);
        if (project && project.status !== newStatus) {
            project.status = newStatus;
            this.updateListeners();
        }
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new ProjectState();
        return this.instance;
    }
    updateListeners() {
        for (const listenerFN of this.listeners) {
            listenerFN(this.projects.slice());
        }
    }
}
export const projectState = ProjectState.getInstance();
//# sourceMappingURL=project.js.map