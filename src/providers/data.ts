import { BACKEND_BASE_URL } from "@/constants";
import { ListResponse } from "@/types";
import { HttpError } from "@refinedev/core";
import {createDataProvider, CreateDataProviderOptions } from "@refinedev/rest";


if(!BACKEND_BASE_URL){
    throw new Error("BACKEND_BASE_URL is not defined");
}

const buildHttpError = async (response:Response):Promise<HttpError> => {
    let message = 'request failed.';
    try{
        const paylaod =( await response.json()) as {message?: string}
        if(paylaod.message) message = paylaod.message;

    }
    catch{
        // ignore json parsing error
    }

    return {
        message,
        statusCode: response.status
    }

    
}
const option: CreateDataProviderOptions = {
    getList:{
        getEndpoint: ({resource}) => resource,
            buildQueryParams:async ({resource,pagination, filters}) => {
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
        if(!response.ok) throw await buildHttpError(response);
        const payload:ListResponse= await response.clone().json();
        return payload.data??[];
        },
        getTotalCount: async (response) => {
            const payload:ListResponse= await response.clone().json();
            return payload.pagination?.total??payload.data?.length??0;
        }
    }
};

const {dataProvider} = createDataProvider(BACKEND_BASE_URL,option);
export {dataProvider};