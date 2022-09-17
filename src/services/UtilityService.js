import HttpService from './httpService';
import { AppSettings } from '../constants/AppSettings'
import { StatusCodes } from '../constants/StatusCodes';
import moment from 'moment';

export const UtilityService = {

    /**
     * Return error response object with passed error message
     * @param {*} errorMessage 
     */
    getErrorResponse(errorMessage){
        return {
            statusCode: -10000,
            message: errorMessage ? errorMessage : 'Something went wrong.'
        }
    },

    /**
     * Return success response object with passed success message and data
     * @param {*} errorMessage 
     */
    getSuccessResponse(data, successMessage){
        return {
            statusCode: 10000,
            message: successMessage ? successMessage : 'Success.',
            data: data
        }
    },

    /**
     * Return response object with passed success message and data
     * @param {*} errorMessage 
     */
    getResponse(statusCode, data, message){
        return {
            statusCode: statusCode,
            message: message ? message : 'Success.',
            data: data
        }
    },

    convertImageToBase64(files, validations){
        return new Promise ((resolve, reject)=>{
        if (files.length===0) 
        resolve(this.getErrorResponse('No file found.'))

        const f = files[ 0 ]; // FileList object

        if((f.size / (1024*1024).toFixed(2)) > validations.maxFileSize)
        resolve(this.getResponse(-10001, '', 'Max file size allowed is: '+validations.maxFileSize+ ' MB'))

        this.getImageDimensions(f).then(resp => {
            if(resp.statusCode === 10000){
                if(resp.data.width > validations.maxWidth)
                resolve(this.getResponse(-10002, '', 'Width should not be greater than '+validations.maxWidth+ ' px') )
                else if(resp.data.height > validations.maxHeight)
                resolve(this.getResponse(-10003, '', 'Height should not be greater than '+validations.maxHeight+ ' px'))
                else {
                    const reader = new FileReader();
                    reader.onload = ((theFile) => {
                        return (e) => {
                        const binaryData = e.target.result;
                        // Converting Binary Data to base 64
                        const base64String = window.btoa(binaryData);
                        resolve(this.getSuccessResponse(base64String))
                        };
                    })();
                    // Read in the image file as a data URL.
                    reader.readAsBinaryString(f);
                }

            } else {
                resolve(this.getErrorResponse())
            }
        })
        
        })
        
    },

    getImageDimensions(file){
        return new Promise ((resolve, reject)=>{
            var _URL = window.URL;
            var img = new Image();
            const that = this;
            img.onload = function () {
                const data = { width: this.width, height: this.height }
                resolve(that.getSuccessResponse(data))
                };
                img.src = _URL.createObjectURL(file);
            })
    },

    getConfigurations(){
        const request = {}
        return HttpService.post(`${ AppSettings.GET_CONFIGURATION }`, request).then(response => {
            return new Promise((resolve, reject)=>{
                const data = {};
                if(response.statusCode === StatusCodes.SUCCESS){
                    response.data.map(item => {
                       return data[ item.key ] = item.value
                    });
                    response.data=data;
                    resolve(response);
                } else {
                    reject(response)
                }
            })
        });
    },

    /**
     * Date formater
     * @param date 
     */
    dateFormater(date) {
        const defaultValue = '';
        if (!date) return defaultValue;
        const formattedDate = moment(date).format(AppSettings.DATE_FORMAT);
        return formattedDate === 'Invalid date' ? defaultValue : formattedDate;
    }

}
