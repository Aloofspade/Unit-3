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

//! Validation 

interface Validatable {
    value: string | number;
    minLength?: number;
    maxLength?: number;
    required?: boolean;
    min?: number;
    max?: number;
}

function validate(input: Validatable): boolean{
    let isValid = true; 
    if(input .required){
        isValid = isValid && input.value.toString().trim().length !== 0;

    }
    if(input.minLength != null && typeof input.value === 'string'){
        isValid = isValid && input.value.length >= input.minLength
    }
    if(input.maxLength != null && typeof input.value === 'string'){
        isValid = isValid && input.value.length <= input.maxLength
    }
    if(input.max != null && typeof input.value === 'number'){
        isValid = isValid && input.value <= input.max;
    }
    if(input.min != null && typeof input.value === 'number'){
        isValid = isValid && input.value >= input.min;
    }
    return isValid;
}
//! autobinder 


function Autobind(_: any, _2: any, desc: PropertyDescriptor){
const originalMethod = desc.value;

const newMethod: PropertyDescriptor = {
    get(){
        return originalMethod.bind(this);
    },
};

return newMethod;
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



class ProjectInput {
    templateEl: HTMLTemplateElement;
    hostEl: HTMLElement;
    formEl: HTMLFormElement;
    titleInputEl: HTMLInputElement;
    descInputEl: HTMLInputElement;
    peopleInputEl: HTMLInputElement;

    constructor() {
        this.templateEl = document.getElementById('project-input') as HTMLTemplateElement;
        this.hostEl = document.getElementById("app") as HTMLElement;
        //! this creates a clone of the template and then grabs the form from the clone 
        const importedTemplate = document.importNode(this.templateEl.content, true);
        this.formEl = importedTemplate.querySelector("form") as HTMLFormElement;
        this.formEl.id = "user-input";

        this.titleInputEl = this.formEl.querySelector("#title") as HTMLInputElement;
        this.descInputEl = this.formEl.querySelector("#description") as HTMLInputElement;
        this.peopleInputEl = this.formEl.querySelector("#people") as HTMLInputElement;

        




        this.attach();
        this.init();
     }
     //! private makes the method only usable in the class
     private attach() {
        this.hostEl.insertAdjacentElement("afterbegin", this.formEl)
     }

     private init(){
         this.formEl.addEventListener('submit', this.submitHandler)
     }

     @Autobind
     private submitHandler(e: Event){
         e.preventDefault();
         const userInputs = this.gatherUserInput();
         if(userInputs){
             const [title, desc, people] = userInputs;
             console.log(title, desc, people);
             
             projectState.addProject(title, desc, people)
         }
     }

    private gatherUserInput(): [string, string, number] | void{
        const userTitle = this.titleInputEl.value;
        const userDesc = this.descInputEl.value;
        const userPeople = +this.peopleInputEl.value;

        const titleIsValid: Validatable = {
            value: userTitle,
            required: true,
            minLength: 1,
        }

        const descIsValid: Validatable = {
            value: userDesc,
            minLength: 5,
            required: true
        }

        const peopleIsValid: Validatable = {
            value: userPeople,
            min: 1,
            max: 5,
        }

        if(
            validate(titleIsValid) &&
            validate(descIsValid) &&
            validate(peopleIsValid)
        ){
            this.clearInputs();
            return [userTitle, userDesc, userPeople];
        }

        console.log('Something is wrong, fix it.');
        return;
    }

    private clearInputs(){
        this.titleInputEl.value = "";
        this.descInputEl.value = "";
        this.peopleInputEl.value = "";
    }
}


const projectInput = new ProjectInput();


class ProjectList implements DragTarget {

    templateEl: HTMLTemplateElement;
    hostEl: HTMLElement;
    element: HTMLElement;
   

    constructor(private type: "active" | "finished"){


        this.templateEl = document.getElementById("project-list") as HTMLTemplateElement;

        this.hostEl = document.getElementById("app") as HTMLElement;
        const importedTemplate = document.importNode(this.templateEl.content, true)
        this.element = importedTemplate.querySelector("section") as HTMLElement;
        this.element.id = `${this.type}-projects`


            this.attach();

     }

     private attach(){
         this.hostEl.insertAdjacentElement("beforeend", this.element);
     }

     @Autobind
    dragOverHandler(e: DragEvent): void {
        if(e.dataTransfer && e.dataTransfer.types[0] === "text/plain"){
            e.preventDefault();
            const listEl = this.element.querySelector("ul")!;

            listEl.classList.add("droppable")
        }
    }
    @Autobind
    dropHandler(e: DragEvent): void {
        const prjId = e.dataTransfer!.getData("text/plain");
        projectState.moveProject(
            prjId,
            this.type === "active" ? Status.ACTIVE : Status.FINISHED
        )
    }
    @Autobind
    dragLeaveHandler(e: DragEvent): void {
        const listEl  = this.element.querySelector("ul")!;
        listEl.classList.remove("droppable")
    }
}