import {  message } from 'antd';

// export const infoMessage = (text) => {
//  return message.info(text);
// };


// export const successMessage = (text) => {
//     return message.info(text);
//    };

// export const errorMessage = (text) => {
//     return message.info(text);
//    };

//    export const warningMessage = (text) => {
//     return message.warning(text);
//    };

   

     
export  const  alerts =  {

     success (text)  {
        return message.success(text);
      },

      info (text)  {
         return message.info(text);
       },

       error (text)  {
         return message.error(text);
       },

       warning (text)  {
         return message.warning(text);
       }


   }   
    
