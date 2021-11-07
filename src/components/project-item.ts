import { Draggable } from '../models/drag-drop.js';
import { Project } from '../models/project.js';
import Cmp from './base-component.js';
import { autobind } from '../decorators/autobind.js';
//ProjectItem Class
export class ProjectItem extends Cmp<HTMLUListElement, HTMLLIElement> implements Draggable {
  private project: Project

  get persons() {
    if (this.project.people === 1) {
      return `1 Person`
    } else {
      return `${this.project.people} Persons`
    }
  }

  constructor(hostId: string, project: Project) {
    console.log('project', project.id)
    super('single-project', hostId, false, project.id)
    this.project = project
    this.configure()
    this.renderContent();
  }
  @autobind
  dragStartHandler(event: DragEvent) {
    console.log('dragstart', event);
    event.dataTransfer!.setData('text/plain', this.project.id);
    event.dataTransfer!.effectAllowed = 'move';
  }

  dragEndHandler(_: DragEvent) {
    console.log('DragEnd!');
  }

  @autobind
  configure() {
    this.element.addEventListener('dragstart', this.dragStartHandler)
    this.element.addEventListener('dragend', this.dragEndHandler)

  }
  renderContent() {
    this.element.querySelector('h2')!.textContent = this.project.title;
    this.element.querySelector('h3')!.textContent = this.persons + ' assigned';
    this.element.querySelector('p')!.textContent = this.project.description;
  }

}