// via https://github.com/bpmn-io/bpmn-js/blob/develop/lib/Viewer.js
import Diagram from 'diagram-js/lib/Diagram';
// we have to load the overwritten registry registrations
import './injector/registry';

interface ViewerOptions {
  container?: HTMLElement;
  width?: string | number;
  height?: string | number;
  moddleExtensions?: Object;
  modules?: any[];
  additionalModules?: any[];
  [key: string]: any;
}

declare class Viewer extends Diagram {
  constructor(options: ViewerOptions);
  importXML(xml: string, bpmnDiagram?: any): Promise<any>;
  saveSVG(options?: {}): Promise<{ svg: string }>;

  on(event: string, callback: Function, target?: any): any;
  on(event: string, priority: number, callback: Function, target?: any): any;

  getDefinitions(): any;
  destroy(): void;
}
export default Viewer;
