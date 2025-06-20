import {
  LibrarySetup,
  ReactZoomPanPinchState,
  ReactZoomPanPinchBaseClasses,
} from "../models/context.model";

export const initialState: ReactZoomPanPinchState = {
  previousScale: 1,
  scale: 1,
  positionX: 0,
  positionY: 0,
};

export const initialSetup: LibrarySetup = {
  disabled: false,
  minPositionX: null,
  maxPositionX: null,
  minPositionY: null,
  maxPositionY: null,
  minScale: 1,
  maxScale: 8,
  limitToBounds: true,
  singleAxisMode: false,
  allowOverscroll: true,
  centerZoomedOut: false,
  centerOnInit: false,
  disablePadding: false,
  smooth: true,
  wheel: {
    step: 0.2,
    disabled: false,
    smoothStep: 0.001,
    wheelDisabled: false,
    touchPadDisabled: false,
    activationKeys: [],
    excluded: [],
  },
  panning: {
    disabled: false,
    velocityDisabled: false,
    lockAxisX: false,
    lockAxisY: false,
    allowLeftClickPan: true,
    allowMiddleClickPan: true,
    allowRightClickPan: true,
    wheelPanning: false,
    activationKeys: [],
    excluded: [],
  },
  pinch: {
    step: 5,
    disabled: false,
    excluded: [],
  },
  doubleClick: {
    disabled: false,
    step: 0.7,
    mode: "zoomIn",
    animationType: "easeOut",
    animationTime: 200,
    excluded: [],
  },
  zoomAnimation: {
    disabled: false,
    size: 0.4,
    animationTime: 200,
    animationType: "easeOut",
  },
  alignmentAnimation: {
    disabled: false,
    sizeX: 100,
    sizeY: 100,
    animationTime: 200,
    velocityAlignmentTime: 400,
    animationType: "easeOut",
  },
  velocityAnimation: {
    disabled: false,
    sensitivity: 1,
    animationTime: 400,
    animationType: "easeOut",
    equalToMove: true,
  },
};

export const baseClasses: ReactZoomPanPinchBaseClasses = {
  wrapperClass: "react-transform-wrapper",
  contentClass: "react-transform-component",
};
