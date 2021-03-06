// (C) 2020 GoodData Corporation

import { IObjectMeta } from './Meta';
import { Layout } from './DashboardLayout';
import { ExtendedDateFilters } from './ExtendedDateFilters';

export interface IAnalyticalDashboard {
    content: IAnalyticalDashboardContent;
    meta: IObjectMeta;
}

export interface IAnalyticalDashboardContent {
    widgets: string[];
    filterContext?: string;
    layout?: Layout;
    dateFilterConfig?: ExtendedDateFilters.IDashboardDateFilterConfig;
}
