import { NextRequest } from "next/server";
export const authConfig = {
    pages:{
        signIn:"/login",
    },callbacks:{
        authorized({auth, request}:{auth:any,request: NextRequest}){
            const isLoggedIn = auth?.user;
            const isOnDashboad = request.nextUrl.pathname.startsWith("/dashboard")

            if(isOnDashboad){
                if(isLoggedIn) return true
                return false;
            }else if (isLoggedIn){
                return Response.redirect(new URL("/dashboard",request.nextUrl));

            }
            return true;
        }
    }
}