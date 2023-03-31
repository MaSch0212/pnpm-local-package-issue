// https://github.com/bpmn-io/bpmn-js/blob/develop/lib/util/ModelUtil.js

declare const is: (element: any, type: string) => boolean;

declare const isAny: (element: any, types: string[]) => boolean;

declare const getBusinessObject: (element: any) => any;

export { is, isAny, getBusinessObject };
