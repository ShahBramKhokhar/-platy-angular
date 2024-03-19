import { InjectionToken } from '@angular/core';

export const TITLE_CONFIG = new InjectionToken<{ title: string, titleClass: string }>('title-config');
export const LABEL_CONFIG = new InjectionToken<{ label: string, labelClass: string }>('label-config');

export type NgTitleConfig = {
    title: string,
    titleClass: string
};

export type NgLabelConfig = {
    label: string,
    labelClass: string
};
