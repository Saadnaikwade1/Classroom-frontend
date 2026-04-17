import { BACKEND_BASE_URL } from "@/constants";
import { ListResponse } from "@/types";
import {createDataProvider, CreateDataProviderOptions } from "@refinedev/rest";

const option: CreateDataProviderOptions = {
    getList:{
        getEndpoint: ({resource}) => resource,
        buildQueryParams: ({resource,pagination, filters}) => {
            const page = pagination?.currentPage ?? 1;
            const pageSize = pagination?.pageSize ?? 10;
            
        const params : Record<string, string|number> = {page,limit:pageSize};
        filters?.forEach((filter) => {
            const field = 'field' in filter ? filter.field : "";
            const vlaue=String(filter.value);
    
            if(resource === "subjects" ){
                if(field === "department") params.department = vlaue;
                if(field === "name" || field==="code") params.search = vlaue;
            }
           
        });
        return params;
        },
        mapResponse: async (response) => {
        const payload:ListResponse= await response.json();
        return payload.data??[];
        },
        getTotalCount: async (response) => {
            const payload:ListResponse= await response.json();
            return payload.pagination?.total??payload.data?.length??0;
        }
    }
};

const {dataProvider} = createDataProvider(BACKEND_BASE_URL,option);
export {dataProvider};