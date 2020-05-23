import { ApplicationErrorEvent } from "https://deno.land/x/oak/application.ts";
import { Context } from "https://deno.land/x/oak/context.ts";

var url = 'http://www.omdbapi.com/?t=matrix&apiKey=354a9209';
export const getWeather = async (context: any) =>{
        context.response.body= await fetch(url)
           .then(resp=>resp.json())
           .then(data => {
             
               return data;
           });     
}

const urlAgeOf = "https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations";


  export const toplaGel = async ()=> {
    let sonuc = await fetch(urlAgeOf);
    let veriler = sonuc.json();
return veriler;
  }



  export const getAll = async (context:any)=>
  { 
     var veriler = await toplaGel();
     context.response.body=veriler; 
    }
 

