import {
    Action,
} from 'redux';
import { IRecorderServerConfig } from '@testring/types';

export enum recorderConfigActions {
    UPDATE = 'CONFIG@UPDATE_CONFIG',
}

interface IRecorderWebAppStore extends Partial<IRecorderServerConfig>{
    initialized: boolean;
}

interface IRecorderConfigAction extends Action {
    payload: any;
}

export function recorderConfigReducer(
    state: IRecorderWebAppStore = {
        initialized: false,
    },
    action: IRecorderConfigAction,
) {
    switch (action.type) {
        case recorderConfigActions.UPDATE: {
            const payload: IRecorderServerConfig = action.payload;

            return {
                ...payload,
                initialized: true,
            };
        }

        default:
            return state;
    }
}
