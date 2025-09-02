backend sy token milta hy (login/signup k time) to  hm koi route agr acess krna chahen to hmy token send krna hoga 
frontend sy us protected route ko access krny k liye is liye hm angular my interceptor use krty hen 

   //store token in local storage from backend 
          localStorage.setItem('token', response.data.token);

create folder interceptors check for details

-> ng g interceptor name

in app.config.ts
-> provideHttpClient(withInterceptors([tokenInterceptor]))