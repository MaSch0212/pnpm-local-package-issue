import BaseModeling from 'diagram-js/lib/features/modeling/Modeling';

// https://github.com/bpmn-io/bpmn-js/blob/develop/lib/features/modeling/Modeling.js
declare class Modeling extends BaseModeling {
  splitLane(targetLane: any, count: any): void;
  addLane(targetLaneShape: any, location: any): any;
  updateProperties(element: any, properties: any): any;
  updateLabel(element: any, newLabel: string, newBounds?: any, hints?: any): void;
  updateModdleProperties(element: any, moddleElement: any, properties: any): void;
}
export default Modeling;
