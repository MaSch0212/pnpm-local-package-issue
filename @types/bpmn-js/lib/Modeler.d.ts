// via https://github.com/bpmn-io/bpmn-js/blob/develop/lib/Modeler.js
import Viewer from 'bpmn-js/lib/Viewer';

interface ModelerOptions {
  container?: HTMLElement;
  width?: string | number;
  height?: string | number;
  moddleExtensions?: Object;
  modules?: any[];
  additionalModules?: any[];
  [key: string]: any;
}

interface SaveXMLResult {
  xml: string;
}

declare class Modeler extends Viewer {
  constructor(options: ModelerOptions);

  saveXML(options: { format: boolean }): Promise<SaveXMLResult>;
}
export default Modeler;
