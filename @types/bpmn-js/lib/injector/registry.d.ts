import BpmnFactory from 'bpmn-js/lib/features/modeling/BpmnFactory';
import Modeling from 'bpmn-js/lib/features/modeling/Modeling';

declare module 'diagram-js/lib/injector/registry' {
  export default interface InjectorRegistry {
    bpmnFactory: BpmnFactory;
    modeling: Modeling;
  }
}
