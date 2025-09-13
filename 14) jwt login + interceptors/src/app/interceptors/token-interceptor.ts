import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {

    // Get token from localStorage
  const token = localStorage.getItem('token');

  // If token exists, clone request with Authorization header
  //previous request 
  const newReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });

  // Pass modified request to the next handler
  return next(newReq);





};
