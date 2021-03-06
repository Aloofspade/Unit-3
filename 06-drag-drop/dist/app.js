"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//! Project Type 
var Status;
(function (Status) {
    Status[Status["ACTIVE"] = 0] = "ACTIVE";
    Status[Status["FINISHED"] = 1] = "FINISHED";
})(Status || (Status = {}));
class Project {
    constructor(id, title, description, people, status) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.people = people;
        this.status = status;
    }
    ;
}
function validate(input) {
    let isValid = true;
    if (input.required) {
        isValid = isValid && input.value.toString().trim().length !== 0;
    }
    if (input.minLength != null && typeof input.value === 'string') {
        isValid = isValid && input.value.length >= input.minLength;
    }
    if (input.maxLength != null && typeof input.value === 'string') {
        isValid = isValid && input.value.length <= input.maxLength;
    }
    if (input.max != null && typeof input.value === 'number') {
        isValid = isValid && input.value <= input.max;
    }
    if (input.min != null && typeof input.value === 'number') {
        isValid = isValid && input.value >= input.min;
    }
    return isValid;
}
//! autobinder 
function Autobind(_, _2, desc) {
    const originalMethod = desc.value;
    const newMethod = {
        get() {
            return originalMethod.bind(this);
        },
    };
    return newMethod;
}
class State {
    constructor() {
        this.listeners = [];
    }
    addListener(listenerFN) {
        this.listeners.push(listenerFN);
    }
}
class ProjectState extends State {
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
const projectState = ProjectState.getInstance();
class ProjectInput {
    constructor() {
        this.templateEl = document.getElementById('project-input');
        this.hostEl = document.getElementById("app");
        //! this creates a clone of the template and then grabs the form from the clone 
        const importedTemplate = document.importNode(this.templateEl.content, true);
        this.formEl = importedTemplate.querySelector("form");
        this.formEl.id = "user-input";
        this.titleInputEl = this.formEl.querySelector("#title");
        this.descInputEl = this.formEl.querySelector("#description");
        this.peopleInputEl = this.formEl.querySelector("#people");
        this.attach();
        this.init();
    }
    //! private makes the method only usable in the class
    attach() {
        this.hostEl.insertAdjacentElement("afterbegin", this.formEl);
    }
    init() {
        this.formEl.addEventListener('submit', this.submitHandler);
    }
    submitHandler(e) {
        e.preventDefault();
        const userInputs = this.gatherUserInput();
        if (userInputs) {
            const [title, desc, people] = userInputs;
            console.log(title, desc, people);
            projectState.addProject(title, desc, people);
        }
    }
    gatherUserInput() {
        const userTitle = this.titleInputEl.value;
        const userDesc = this.descInputEl.value;
        const userPeople = +this.peopleInputEl.value;
        const titleIsValid = {
            value: userTitle,
            required: true,
            minLength: 1,
        };
        const descIsValid = {
            value: userDesc,
            minLength: 5,
            required: true
        };
        const peopleIsValid = {
            value: userPeople,
            min: 1,
            max: 5,
        };
        if (validate(titleIsValid) &&
            validate(descIsValid) &&
            validate(peopleIsValid)) {
            this.clearInputs();
            return [userTitle, userDesc, userPeople];
        }
        console.log('Something is wrong, fix it.');
        return;
    }
    clearInputs() {
        this.titleInputEl.value = "";
        this.descInputEl.value = "";
        this.peopleInputEl.value = "";
    }
}
__decorate([
    Autobind
], ProjectInput.prototype, "submitHandler", null);
class ProjectItem {
    constructor(hostId, project) {
        this.hostId = hostId;
        this.project = project;
        this.templateEl = document.getElementById("single-project");
        this.hostEl = document.getElementById(this.hostId);
        const importedTemplate = document.importNode(this.templateEl.content, true);
        this.element = importedTemplate.querySelector("li");
        this.element.id = `${this.project.id}`;
        this.attach();
        this.init();
        this.render();
    }
    get persons() {
        if (this.project.people === 1) {
            return "1 person";
        }
        else {
            return `${this.project.people} people`;
        }
    }
    init() {
        this.element.addEventListener('dragstart', this.dragStartHandler);
        this.element.addEventListener('dragend', this.dragEndHandler);
    }
    render() {
        this.element.querySelector('h2').textContent = this.project.title;
        this.element.querySelector('h3').textContent = this.persons + " assigned";
        this.element.querySelector('p').textContent = this.project.description;
    }
    attach() {
        this.hostEl.insertAdjacentElement("beforeend", this.element);
    }
    dragEndHandler(_) {
        console.log('drag end');
    }
    dragStartHandler(e) {
        e.dataTransfer.setData("text/plain", this.project.id);
        e.dataTransfer.effectAllowed = "move";
    }
}
__decorate([
    Autobind
], ProjectItem.prototype, "dragEndHandler", null);
__decorate([
    Autobind
], ProjectItem.prototype, "dragStartHandler", null);
class ProjectList {
    constructor(type) {
        this.type = type;
        this.assignedProjects = [];
        this.templateEl = document.getElementById("project-list");
        this.hostEl = document.getElementById("app");
        const importedTemplate = document.importNode(this.templateEl.content, true);
        this.element = importedTemplate.querySelector("section");
        this.element.id = `${this.type}-projects`;
        this.attach();
        this.init();
        this.renderContent();
    }
    init() {
        this.element.addEventListener('dragover', this.dragOverHandler);
        this.element.addEventListener('dragleave', this.dragLeaveHandler);
        this.element.addEventListener('drop', this.dropHandler);
        projectState.addListener((projects) => {
            const relevantProjects = projects.filter((prj) => {
                if (this.type === "active") {
                    return prj.status === Status.ACTIVE;
                }
                else {
                    return prj.status === Status.FINISHED;
                }
            });
            this.assignedProjects = relevantProjects;
            this.renderProjects();
        });
    }
    renderProjects() {
        const listEl = document.getElementById(`${this.type}-projects-list`);
        listEl.innerHTML = "";
        for (const prjItem of this.assignedProjects) {
            new ProjectItem(this.element.querySelector('ul').id, prjItem);
        }
    }
    renderContent() {
        const listId = `${this.type}-projects-list`;
        this.element.querySelector("ul").id = listId;
        this.element.querySelector("h2").textContent = this.type.toUpperCase() + " PROJECTS";
    }
    attach() {
        this.hostEl.insertAdjacentElement("beforeend", this.element);
    }
    dragOverHandler(e) {
        if (e.dataTransfer && e.dataTransfer.types[0] === "text/plain") {
            e.preventDefault();
            const listEl = this.element.querySelector("ul");
            listEl.classList.add("droppable");
        }
    }
    dropHandler(e) {
        const prjId = e.dataTransfer.getData("text/plain");
        projectState.moveProject(prjId, this.type === "active" ? Status.ACTIVE : Status.FINISHED);
    }
    dragLeaveHandler(_) {
        const listEl = this.element.querySelector("ul");
        listEl.classList.remove("droppable");
    }
}
__decorate([
    Autobind
], ProjectList.prototype, "dragOverHandler", null);
__decorate([
    Autobind
], ProjectList.prototype, "dropHandler", null);
__decorate([
    Autobind
], ProjectList.prototype, "dragLeaveHandler", null);
const projectInput = new ProjectInput();
const activeProjects = new ProjectList('active');
const finishedProjects = new ProjectList("finished");
//# sourceMappingURL=app.js.map