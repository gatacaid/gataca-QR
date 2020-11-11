/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { RESULT_STATUS } from "./utils/utils";
export namespace Components {
    interface GatacaQr {
        /**
          * _[Optional]_ Decide if to show it as a button to display the QR Or display directly the QR. Default: true (display button)
         */
        "asButton": boolean;
        "buttonText"?: string;
        /**
          * ***Mandatory*** Connect Server where the wallet will send the data
         */
        "callbackServer": string;
        /**
          * _[Optional]_ Check status function to query the current status of the session If not set, it would fallback to the session Endpoint property.
         */
        "checkStatus"?: (id ?: string) => Promise<RESULT_STATUS>;
        /**
          * _[Optional]_ Create session function to generate a new Session If the property is unset, it will fallback to the generation Endpoint property.
         */
        "createSession"?: () => Promise<string>;
        /**
          * Force manually the display of a QR
         */
        "display": () => Promise<void>;
        /**
          * _[Optional]_ Display a link containing a dynamic link to invoke the wallet if closed
         */
        "dynamicLink"?: boolean;
        /**
          * ***Mandatory*** Callback fired upon session expired or invalid If not set, session error would not be handled An error containing information will be passed as parameter
         */
        "errorCallback": (error ?: Error) => void;
        /**
          * _[Optional]_ Session Generation URL to create a new Session. It will expect to receive the session Id from the response header 'X-Connect-Id'. If not set, it would use a default endpoint to the same window URL under the path /auth
         */
        "generationEndpoint"?: string;
        /**
          * Retrieve manually the session data on a successful login
         */
        "getSessionData": () => Promise<any>;
        /**
          * Retrieve manually a possible token retrieved upon login on the Header 'token'
         */
        "getToken": () => Promise<string>;
        /**
          * _[Optional]_ Frequency in seconds to check if the session has been validated
         */
        "pollingFrequency"?: number;
        "qrDescription"?: string;
        /**
          * _[Optional]_ Decide if scanning the credential as a verifier to request credentials or as an issuer too issue credentials. Options: scan (default) | credential
         */
        "qrRole": string;
        "qrTitle"?: string;
        /**
          * _[Optional]_ EndpointURL to fetch data for the status. The endpoint URL will send a GET request with the session id on a parameter; concatenated to this string. It can be used if your API fulfills the requirement. If not, use the checkStatus property. If not set, it would use a default endpoint to the same window URL under the path /auth
         */
        "sessionEndpoint"?: string;
        /**
          * _[Optional]_ Generated session Id, which is required. Without session Id, the QR will not work. If the property is unset, it will check for an _id_ or _sessionId_ query parameter on the current URL. If there is no sessionId, it will fallback to the createSession method to generate a new Session.
         */
        "sessionId"?: string;
        /**
          * _[Optional]_ Maximum time window to display the session
         */
        "sessionTimeout"?: number;
        /**
          * Stop manually an ongoing session
         */
        "stop": () => Promise<void>;
        /**
          * ***Mandatory*** Callback fired upon session correctly verified If not set, session validation wouldn't trigger any action The session data and a possible token will be sent as parameters to the callback
         */
        "successCallback": (data ?: any, token ?: string) => void;
    }
}
declare global {
    interface HTMLGatacaQrElement extends Components.GatacaQr, HTMLStencilElement {
    }
    var HTMLGatacaQrElement: {
        prototype: HTMLGatacaQrElement;
        new (): HTMLGatacaQrElement;
    };
    interface HTMLElementTagNameMap {
        "gataca-qr": HTMLGatacaQrElement;
    }
}
declare namespace LocalJSX {
    interface GatacaQr {
        /**
          * _[Optional]_ Decide if to show it as a button to display the QR Or display directly the QR. Default: true (display button)
         */
        "asButton"?: boolean;
        "buttonText"?: string;
        /**
          * ***Mandatory*** Connect Server where the wallet will send the data
         */
        "callbackServer"?: string;
        /**
          * _[Optional]_ Check status function to query the current status of the session If not set, it would fallback to the session Endpoint property.
         */
        "checkStatus"?: (id ?: string) => Promise<RESULT_STATUS>;
        /**
          * _[Optional]_ Create session function to generate a new Session If the property is unset, it will fallback to the generation Endpoint property.
         */
        "createSession"?: () => Promise<string>;
        /**
          * _[Optional]_ Display a link containing a dynamic link to invoke the wallet if closed
         */
        "dynamicLink"?: boolean;
        /**
          * ***Mandatory*** Callback fired upon session expired or invalid If not set, session error would not be handled An error containing information will be passed as parameter
         */
        "errorCallback"?: (error ?: Error) => void;
        /**
          * _[Optional]_ Session Generation URL to create a new Session. It will expect to receive the session Id from the response header 'X-Connect-Id'. If not set, it would use a default endpoint to the same window URL under the path /auth
         */
        "generationEndpoint"?: string;
        /**
          * GatacaLoginCompleted event, triggered with session data upon login success
         */
        "onGatacaLoginCompleted"?: (event: CustomEvent<any>) => void;
        /**
          * GatacaLoginFailed event, triggered with error upon login failure
         */
        "onGatacaLoginFailed"?: (event: CustomEvent<any>) => void;
        /**
          * _[Optional]_ Frequency in seconds to check if the session has been validated
         */
        "pollingFrequency"?: number;
        "qrDescription"?: string;
        /**
          * _[Optional]_ Decide if scanning the credential as a verifier to request credentials or as an issuer too issue credentials. Options: scan (default) | credential
         */
        "qrRole"?: string;
        "qrTitle"?: string;
        /**
          * _[Optional]_ EndpointURL to fetch data for the status. The endpoint URL will send a GET request with the session id on a parameter; concatenated to this string. It can be used if your API fulfills the requirement. If not, use the checkStatus property. If not set, it would use a default endpoint to the same window URL under the path /auth
         */
        "sessionEndpoint"?: string;
        /**
          * _[Optional]_ Generated session Id, which is required. Without session Id, the QR will not work. If the property is unset, it will check for an _id_ or _sessionId_ query parameter on the current URL. If there is no sessionId, it will fallback to the createSession method to generate a new Session.
         */
        "sessionId"?: string;
        /**
          * _[Optional]_ Maximum time window to display the session
         */
        "sessionTimeout"?: number;
        /**
          * ***Mandatory*** Callback fired upon session correctly verified If not set, session validation wouldn't trigger any action The session data and a possible token will be sent as parameters to the callback
         */
        "successCallback"?: (data ?: any, token ?: string) => void;
    }
    interface IntrinsicElements {
        "gataca-qr": GatacaQr;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "gataca-qr": LocalJSX.GatacaQr & JSXBase.HTMLAttributes<HTMLGatacaQrElement>;
        }
    }
}
