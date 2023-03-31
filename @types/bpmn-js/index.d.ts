// declare module 'bpmn-js/lib/Modeler' {}
import Viewer from './lib/Viewer';
import Modeler from './lib/Modeler';

declare type BpmnJs = Viewer | Modeler;

export { BpmnJs };
